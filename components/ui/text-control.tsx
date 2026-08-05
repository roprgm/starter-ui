"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import { cn } from "@/lib/styles";

type TextControlProps = Omit<FieldPrimitive.Control.Props, "className"> & {
	className?: string;
};

export function TextControl({ className, ...props }: TextControlProps) {
	return (
		<FieldPrimitive.Control
			className={cn(
				"w-full rounded-md border border-border bg-control text-foreground text-sm shadow-xs outline-none transition-[background-color,border-color,box-shadow] duration-150 placeholder:text-muted hover:bg-control-hover focus:border-border-focus focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-40 aria-invalid:border-danger aria-invalid:focus:ring-danger/40",
				className,
			)}
			{...props}
		/>
	);
}
