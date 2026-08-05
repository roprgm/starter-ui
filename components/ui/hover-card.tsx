"use client";

import { PreviewCard } from "@base-ui/react/preview-card";
import { PopupArrow, PopupSurface } from "@/components/ui/popup";
import { cn } from "@/lib/styles";

export const HoverCard = PreviewCard.Root;

type HoverCardTriggerProps = Omit<PreviewCard.Trigger.Props, "className"> & {
	className?: string;
};

export function HoverCardTrigger({
	className,
	closeDelay = 150,
	delay = 250,
	...props
}: HoverCardTriggerProps) {
	return (
		<PreviewCard.Trigger
			className={cn(
				"cursor-pointer font-medium text-foreground text-sm underline decoration-border underline-offset-4 outline-none transition-colors duration-150 hover:decoration-muted focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring",
				className,
			)}
			closeDelay={closeDelay}
			delay={delay}
			{...props}
		/>
	);
}

type HoverCardContentProps = Omit<PreviewCard.Popup.Props, "className"> & {
	align?: PreviewCard.Positioner.Props["align"];
	className?: string;
	side?: PreviewCard.Positioner.Props["side"];
	sideOffset?: PreviewCard.Positioner.Props["sideOffset"];
};

export function HoverCardContent({
	align = "center",
	children,
	className,
	side = "bottom",
	sideOffset = 8,
	...props
}: HoverCardContentProps) {
	return (
		<PreviewCard.Portal>
			<PreviewCard.Positioner
				align={align}
				className="z-50"
				side={side}
				sideOffset={sideOffset}
			>
				<PreviewCard.Popup
					render={<PopupSurface className={cn("w-64 p-3", className)} />}
					{...props}
				>
					<PreviewCard.Arrow render={<PopupArrow />} />
					{children}
				</PreviewCard.Popup>
			</PreviewCard.Positioner>
		</PreviewCard.Portal>
	);
}
