import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/options"
import dbConnect from "@/lib/dbConnect"
import UserModel from "@/model/User"
import { User } from "next-auth"
import mongoose from "mongoose"

export async function DELETE(
	request: Request,
	{ params }: { params: { messageid: string } }
) {
	const messageid = params.messageid
	await dbConnect()

	const session = await getServerSession(authOptions)
	const user: User = session?.user as User

	if (!session || !session.user) {
		return Response.json(
			{
				success: false,
				message: "Not Authenticated",
			},
			{ status: 401 }
		)
	}

	try {
		const updateResult = await UserModel.updateOne(
			{ _id: user._id },
			{ $pull: { messages: { _id: messageid } } }
		)
		if (updateResult.modifiedCount === 0) {
			return Response.json(
				{
					success: false,
					message: "Message not found or already deleted",
				},
				{ status: 404 }
			)
		}
		return Response.json(
			{
				success: true,
				message: "Successfully Message deleted",
			},
			{ status: 200 }
		)
	} catch (error) {
		console.log("Error deleting message in message route", error)
		return Response.json(
			{
				success: false,
				message: "Error Deleting Message",
			},
			{ status: 500 }
		)
	}
}
