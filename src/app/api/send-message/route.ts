import dbConnect from "@/lib/dbConnect"
import UserModel from "@/model/User"
import { Message } from "@/model/User"

export async function POST(request: Request) {
	await dbConnect()

	const { username, content } = await request.json()
	console.log(username)
	
	try {
		const user = await UserModel.findOne({ username })
		if (!user) {
			return Response.json(
				{
					success: false,
					message: "User Not Found",
				},
				{ status: 404 }
			)
		}
		
		// is user accepting messages ??
		if (!user.isAcceptingMessages) {
			return Response.json(
				{
					success: false,
					message: "user is not accepting messages",
				},
				{ status: 403 }
			)
		}
		
		const newMessage = { content, createdAt: new Date() }
		console.log(newMessage)
		user.messages.push(newMessage as Message)
		await user.save()

		return Response.json(
			{
				success: true,
				message: "Message sent successfully",
			},
			{ status: 201 }
		)
	} catch (error) {
        console.log("Error adding message", error)
		return Response.json(
			{
				success: false,
				message: "Internal Server Error",
			},
			{ status: 500 }
		)
	}
}
