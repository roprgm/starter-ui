import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/styles";

const cardVariants = cva(
	"inset-ring-1 inset-ring-white/2 rounded-lg p-2.5 [&_label]:px-px [&_p]:px-px",
	{
		variants: {
			tone: {
				default: "bg-surface",
				raised: "bg-elevated shadow-black/10 shadow-lg",
			},
		},
		defaultVariants: { tone: "default" },
	},
);

type CardProps = ComponentProps<"section"> & VariantProps<typeof cardVariants>;

export function Card({ className, tone, ...props }: CardProps) {
	return (
		<section className={cn(cardVariants({ tone }), className)} {...props} />
	);
}

export function CardTitle({ className, ...props }: ComponentProps<"h2">) {
	return (
		<h2
			className={cn("font-medium text-base text-foreground", className)}
			{...props}
		/>
	);
}

export function CardDescription({ className, ...props }: ComponentProps<"p">) {
	return <p className={cn("mt-1 text-muted text-sm", className)} {...props} />;
}
