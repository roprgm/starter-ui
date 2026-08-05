"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import { cn } from "@/lib/styles";

type FieldProps = Omit<FieldPrimitive.Root.Props, "className"> & {
	className?: string;
};

export function Field({ className, ...props }: FieldProps) {
	return (
		<FieldPrimitive.Root className={cn("grid gap-2", className)} {...props} />
	);
}

type FieldLabelProps = Omit<FieldPrimitive.Label.Props, "className"> & {
	className?: string;
};

export function FieldLabel({ className, ...props }: FieldLabelProps) {
	return (
		<FieldPrimitive.Label
			className={cn(
				"font-medium text-foreground text-sm data-disabled:opacity-40",
				className,
			)}
			{...props}
		/>
	);
}

type FieldDescriptionProps = Omit<
	FieldPrimitive.Description.Props,
	"className"
> & {
	className?: string;
};

export function FieldDescription({
	className,
	...props
}: FieldDescriptionProps) {
	return (
		<FieldPrimitive.Description
			className={cn("text-muted text-sm leading-5", className)}
			{...props}
		/>
	);
}

type FieldErrorProps = Omit<FieldPrimitive.Error.Props, "className"> & {
	className?: string;
};

export function FieldError({ className, ...props }: FieldErrorProps) {
	return (
		<FieldPrimitive.Error
			className={cn(
				"text-danger text-sm leading-5 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none",
				className,
			)}
			{...props}
		/>
	);
}
