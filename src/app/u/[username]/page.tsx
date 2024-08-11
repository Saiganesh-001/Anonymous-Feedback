"use client"

import { Button } from "@/components/ui/button"
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { messageSchema } from "@/schemas/messageSchema"
import { ApiResponse } from "@/types/ApiResponse"
import { zodResolver } from "@hookform/resolvers/zod"
import axios, { AxiosError } from "axios"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import * as z from "zod"

function MessagePage() {
	const { toast } = useToast()
	const params = useParams<{ username: string }>()
	const form = useForm<z.infer<typeof messageSchema>>({
		resolver: zodResolver(messageSchema),
	})

	const onSubmit = async (data: z.infer<typeof messageSchema>) => {
		try {
			const response = await axios.post<ApiResponse>("/api/send-message", {
				username: params.username,
				content: data.content,
			})
			toast({
				title: "Success",
				description: response.data.message,
				variant: "default",
			})
		} catch (error) {
			console.error("Error during sign-up:", error)

			const axiosError = error as AxiosError<ApiResponse>

			toast({
				title: "Error occured while sending message",
				description: axiosError.response?.data.message,
				variant: "destructive",
			})
		}
	}

	return (
		<div className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
			<h1 className="text-4xl font-bold mb-4 text-center">
				Public Profile Link
			</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						name="content"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Send Anonymous Message to @{params.username}
								</FormLabel>
								<Textarea
									placeholder="Drop your anonymous message here."
									className="resize-none"
									{...field}
								/>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Send It</Button>
				</form>
			</Form>
		</div>
	)
}

export default MessagePage
