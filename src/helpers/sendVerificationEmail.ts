import { resend } from "@/lib/resend"
import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/ApiResponse"

export async function sendVerificationEmail(
	email: string,
	username: string,
	verifyCode: string
): Promise<ApiResponse> {
	try {
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: email,
			subject: "Anonymous-Feedback || Verification Code",
			react: VerificationEmail({ username, otp: verifyCode.substring(0, 6) }),
		})
		return { success: true, message: "Verification Email Send Successfully" }
	} catch (emailError) {
		console.error("Error sending Verification Email", emailError)
		return { success: false, message: "Failed to send Verification Email" }
	}
}
