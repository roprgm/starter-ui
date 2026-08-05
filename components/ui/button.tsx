"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/styles";

const buttonVariants = cva(
	"inline-flex cursor-pointer touch-manipulation select-none items-center justify-center rounded-md font-medium text-sm shadow-xs outline-none transition-[background-color,border-color,box-shadow,color] duration-150 focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-40",
	{
		variants: {
			variant: {
				primary:
					"bg-primary text-primary-foreground hover:bg-primary/90 data-pressed:bg-primary/80",
				secondary:
					"border border-border bg-control text-foreground hover:bg-control-hover focus-visible:border-border-focus data-popup-open:border-border-focus data-pressed:border-border-focus data-popup-open:bg-control-hover data-pressed:bg-control-hover data-popup-open:ring-2 data-popup-open:ring-ring data-pressed:ring-2 data-pressed:ring-ring",
				ghost:
					"text-muted shadow-none hover:bg-control-hover hover:text-foreground data-pressed:bg-control-hover",
				danger:
					"inset-ring-1 inset-ring-border-subtle bg-danger-surface text-white/80 hover:bg-danger-surface/90 data-pressed:text-white/90",
			},
			size: {
				default:
					"h-9 px-3 has-[>[data-slot=icon]:last-child]:pr-2.5 has-[>svg:last-child]:pr-2.5 has-[>[data-slot=icon]:first-child]:pl-2.5 has-[>svg:first-child]:pl-2.5",
				icon: "size-8 p-0",
			},
		},
		defaultVariants: { size: "default", variant: "primary" },
	},
);

type ButtonProps = Omit<ButtonPrimitive.Props, "className" | "render"> &
	VariantProps<typeof buttonVariants> & {
		className?: string;
	};

export function Button({ className, size, variant, ...props }: ButtonProps) {
	return (
		<ButtonPrimitive
			className={cn(buttonVariants({ size, variant }), className)}
			{...props}
		/>
	);
}
