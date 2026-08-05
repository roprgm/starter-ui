import type { ComponentProps } from "react";
import { cn } from "@/lib/styles";

const popupArrowBorderPath = "M0 5.5h1L6 0.5l5 5h1";
const popupArrowFillPath = "M0 5.5h1L6 0.5l5 5h1v1.5H0Z";

export function PopupSurface({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"relative origin-(--transform-origin) rounded-md border border-border bg-control p-1 text-foreground shadow-black/25 shadow-md outline-none ring-1 ring-black/30 transition-[transform,opacity] duration-150 ease-out data-ending-style:scale-[0.98] data-starting-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none",
				className,
			)}
			{...props}
		/>
	);
}

export function PopupArrow({ className, ...props }: ComponentProps<"svg">) {
	return (
		<svg
			aria-hidden="true"
			className={cn(
				"block h-1.5 w-3 overflow-visible data-[side=bottom]:-top-1.5 data-[side=left]:-right-2.25 data-[side=top]:-bottom-1.5 data-[side=right]:-left-2.25 data-[side=left]:rotate-90 data-[side=right]:-rotate-90 data-[side=top]:rotate-180",
				className,
			)}
			fill="none"
			viewBox="0 0 12 6"
			{...props}
		>
			<path
				className="stroke-black/30"
				d={popupArrowBorderPath}
				fill="none"
				strokeLinejoin="round"
				strokeWidth="1"
				transform="translate(0 -1)"
				vectorEffect="non-scaling-stroke"
			/>
			<path className="fill-control" d={popupArrowFillPath} />
			<path
				className="stroke-border"
				d={popupArrowBorderPath}
				fill="none"
				strokeLinejoin="round"
				strokeWidth="1"
				vectorEffect="non-scaling-stroke"
			/>
		</svg>
	);
}

export function PopupItem({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"flex min-h-7 cursor-pointer items-center gap-3 rounded-sm px-2 text-sm outline-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-40",
				className,
			)}
			{...props}
		/>
	);
}
