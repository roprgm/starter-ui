"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import type { ComponentProps } from "react";
import { cn } from "@/lib/styles";
import styles from "./scroll-area.module.css";

type ScrollAreaProps = ComponentProps<"div"> & {
	viewportClassName?: string;
};

export function ScrollArea({
	children,
	className,
	viewportClassName,
	...props
}: ScrollAreaProps) {
	return (
		<ScrollAreaPrimitive.Root
			className={cn(styles.root, className)}
			overflowEdgeThreshold={1}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport
				className={cn(styles.viewport, viewportClassName)}
			>
				<ScrollAreaPrimitive.Content className={styles.content}>
					{children}
				</ScrollAreaPrimitive.Content>
			</ScrollAreaPrimitive.Viewport>
			<ScrollAreaPrimitive.Scrollbar className={styles.scrollbar}>
				<ScrollAreaPrimitive.Thumb className={styles.thumb} />
			</ScrollAreaPrimitive.Scrollbar>
			<div aria-hidden="true" className={cn(styles.fade, styles.fadeStart)} />
			<div aria-hidden="true" className={cn(styles.fade, styles.fadeEnd)} />
		</ScrollAreaPrimitive.Root>
	);
}
