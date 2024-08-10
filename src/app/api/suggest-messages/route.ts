import { openai } from "@ai-sdk/openai"
import { streamText, StreamData } from "ai"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "edge"
export const maxDuration = 30 // Allow streaming responses up to 30 seconds

export async function POST(req: NextRequest) {
	try {
		const prompt =
			"Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What’s a hobby you’ve recently started?||If you could have dinner with any historical figure, who would it be?||What’s a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment."

		// Create a StreamData instance to manage the response data
		const data = new StreamData()

		// Stream the text from OpenAI using the updated model and SDK
		const result = await streamText({
			model: openai("gpt-3.5-turbo"),
			messages: [{ role: "user", content: prompt }],
			maxTokens: 400,
			onFinish() {
				// Close the data stream after completion
				data.close()
			},
		})

		// Return the streaming response
		return result.toDataStreamResponse({ data })
	} catch (error) {
		// Handle OpenAI API errors
		if (error instanceof Error && "response" in error) {
			const response = (error as any).response
			const status = response.status || 500
			const data = response.data || "Unknown error"

			return NextResponse.json({ status, data }, { status })
		} else {
			// Handle other errors
			console.error("An unexpected error occurred:", error)
			return new Response("Internal Server Error", { status: 500 })
		}
	}
}
