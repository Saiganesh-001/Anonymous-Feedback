import type { Metadata } from "next"
import { Inter } from "next/font/google"
import AuthProvider from "@/context/AuthProvider"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Anonymous-Feedback",
	description: "Send anonymous messages",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<AuthProvider>
				<body className={inter.className}>
					<Toaster />
					{children}
				</body>
			</AuthProvider>
		</html>
	)
}
