import type { ComponentProps } from "react";
import { cn } from "@/lib/styles";

type CheckIconProps = Omit<ComponentProps<"svg">, "children">;

export function CheckIcon({ className, ...props }: CheckIconProps) {
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
			<path d="m5 12 4 4L19 6" />
		</svg>
	);
}
