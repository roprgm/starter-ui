"use client";

import type { ComponentProps } from "react";
import { TextControl } from "@/components/ui/text-control";
import { cn } from "@/lib/styles";

type InputProps = Omit<ComponentProps<typeof TextControl>, "render">;

export function Input({ className, ...props }: InputProps) {
	return <TextControl className={cn("h-9 px-2.5", className)} {...props} />;
}
