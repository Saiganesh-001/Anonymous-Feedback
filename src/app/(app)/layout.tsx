import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"

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
		<div>
			<div className={inter.className}>
				<Navbar />
				{children}
			</div>
		</div>
	)
}
