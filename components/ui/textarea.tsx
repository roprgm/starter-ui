"use client";

import type { ComponentProps } from "react";
import { TextControl } from "@/components/ui/text-control";
import { cn } from "@/lib/styles";

export function Textarea({ className, ...props }: ComponentProps<"textarea">) {
	return (
		<TextControl
			className={cn("min-h-24 resize-y px-2.5 py-2", className)}
			render={<textarea {...props} />}
		/>
	);
}
