import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Ajay Anand | Software Engineer",
	description:
		"Hello! I am Ajay Anand, a Software Engineer and AI Enthusiast passionate about building scalable full-stack applications and intelligent AI systems. Explore my projects, skills, and experience.",
	openGraph: {
		type: "website",
		title: "Ajay Anand | Software Engineer",
		description:
			"Portfolio of Ajay Anand — Software Engineer, AI Enthusiast, and Full-Stack Developer building AI-powered and scalable systems.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ajay Anand | Software Engineer",
		description:
			"Explore Ajay Anand’s portfolio — Software Engineer specializing in Full-Stack Development, AI, and Scalable Systems.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased w-screen max-w-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
