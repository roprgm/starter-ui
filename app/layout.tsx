import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
	title: "Nice UI Starter",
	description: "A quiet, dark starter for building accessible interfaces.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html className={GeistSans.variable} lang="en">
			<body>
				<TooltipProvider>{children}</TooltipProvider>
			</body>
		</html>
	);
}
