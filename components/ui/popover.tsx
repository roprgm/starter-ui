"use client";

import { Popover } from "@base-ui/react/popover";
import type { ComponentProps } from "react";
import { PopupArrow, PopupSurface } from "@/components/ui/popup";
import { cn } from "@/lib/styles";

export const PopoverRoot = Popover.Root;
export const PopoverTrigger = Popover.Trigger;

type PopoverContentProps = Omit<Popover.Popup.Props, "className"> & {
	align?: Popover.Positioner.Props["align"];
	className?: string;
	side?: Popover.Positioner.Props["side"];
	sideOffset?: Popover.Positioner.Props["sideOffset"];
};

export function PopoverContent({
	align = "center",
	children,
	className,
	side = "bottom",
	sideOffset = 8,
	...props
}: PopoverContentProps) {
	return (
		<Popover.Portal>
			<Popover.Positioner
				align={align}
				className="z-50"
				side={side}
				sideOffset={sideOffset}
			>
				<Popover.Popup
					render={
						<PopupSurface
							className={cn("w-64 max-w-(--available-width) p-3", className)}
						/>
					}
					{...props}
				>
					<Popover.Arrow render={<PopupArrow />} />
					{children}
				</Popover.Popup>
			</Popover.Positioner>
		</Popover.Portal>
	);
}

export function PopoverTitle({
	className,
	...props
}: ComponentProps<typeof Popover.Title>) {
	return (
		<Popover.Title
			className={cn("font-medium text-foreground text-sm", className)}
			{...props}
		/>
	);
}

export function PopoverDescription({
	className,
	...props
}: ComponentProps<typeof Popover.Description>) {
	return (
		<Popover.Description
			className={cn("mt-1 text-muted text-sm leading-5", className)}
			{...props}
		/>
	);
}
