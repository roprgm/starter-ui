"use client";

import type { ComponentProps } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/styles";

type DatePickerProps = Omit<ComponentProps<typeof Input>, "type">;

export function DatePicker({ className, ...props }: DatePickerProps) {
	return (
		<Input
			className={cn("w-auto min-w-36", className)}
			type="date"
			{...props}
		/>
	);
}
