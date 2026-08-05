import type { ComponentProps } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/styles";

export function ModalBackdrop({ className, ...props }: ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"fixed inset-0 z-50 min-h-dvh bg-black/60 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none",
				className,
			)}
			{...props}
		/>
	);
}

export function ModalSurface({
	className,
	...props
}: ComponentProps<typeof Card>) {
	return (
		<Card
			className={cn(
				"fixed top-1/2 left-1/2 z-50 flex max-h-[calc(100dvh-3rem)] w-96 max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 overflow-y-auto px-3.5 py-3 text-foreground shadow-black/40 shadow-xl outline-none ring-1 ring-black/30 transition-[scale,opacity] duration-150 ease-out data-ending-style:scale-[0.98] data-starting-style:scale-[0.98] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none",
				className,
			)}
			{...props}
		/>
	);
}
