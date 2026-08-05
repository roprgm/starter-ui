import type { ComponentProps } from "react";
import { cn } from "@/lib/styles";

const CHEVRON_PATHS = {
	down: "m6 9 6 6 6-6",
	left: "m15 18-6-6 6-6",
	right: "m9 18 6-6-6-6",
	up: "m18 15-6-6-6 6",
} as const;

type ChevronIconProps = Omit<ComponentProps<"svg">, "children"> & {
	direction: keyof typeof CHEVRON_PATHS;
};

export function ChevronIcon({
	direction,
	className,
	...props
}: ChevronIconProps) {
	return (
		<svg
			{...props}
			aria-hidden="true"
			className={cn("size-4", className)}
			fill="none"
			focusable="false"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<path d={CHEVRON_PATHS[direction]} />
		</svg>
	);
}
