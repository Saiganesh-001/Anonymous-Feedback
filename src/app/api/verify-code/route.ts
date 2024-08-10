import dbConnect from "@/lib/dbConnect"
import UserModel from "@/model/User"

export async function POST(request: Request) {
	await dbConnect()

	try {
		const { username, code } = await request.json()

		const decodedUsername = decodeURIComponent(username)

		const user = await UserModel.findOne({ username: decodedUsername })

		if (!user) {
			return Response.json(
				{
					success: false,
					message: "User Not Found",
				},
				{ status: 500 }
			)
		}

		const isCodeValid = user.verifyCode.substring(0, 6) === code
		const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date()

		if (isCodeValid && isCodeNotExpired) {
			user.isVerified = true
			await user.save()
			return Response.json(
				{
					success: true,
					message: "Account Verified Successfully",
				},
				{ status: 200 }
			)
		} else if (!isCodeNotExpired) {
			return Response.json(
				{
					success: false,
					message:
						"Verifying Code Has Been Expired, Please SignUP again to get a new Code",
				},
				{ status: 500 }
			)
		} else {
			return Response.json(
				{
					success: false,
					message: "Verification Code is INCORRECT",
				},
				{ status: 500 }
			)
		}
	} catch (error) {
		console.error("Error in Verifying Code", error)
		return Response.json(
			{
				success: false,
				message: "Error Verifying Code",
			},
			{ status: 500 }
		)
	}
}
