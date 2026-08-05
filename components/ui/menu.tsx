"use client";

import { Menu } from "@base-ui/react/menu";
import { PopupItem, PopupSurface } from "@/components/ui/popup";
import { cn } from "@/lib/styles";

export const MenuRoot = Menu.Root;
export const MenuTrigger = Menu.Trigger;

type MenuContentProps = Omit<Menu.Popup.Props, "className"> & {
	align?: Menu.Positioner.Props["align"];
	className?: string;
	side?: Menu.Positioner.Props["side"];
	sideOffset?: Menu.Positioner.Props["sideOffset"];
};

export function MenuContent({
	align = "end",
	className,
	side = "bottom",
	sideOffset = 6,
	...props
}: MenuContentProps) {
	return (
		<Menu.Portal>
			<Menu.Positioner
				align={align}
				className="z-50 outline-none"
				side={side}
				sideOffset={sideOffset}
			>
				<Menu.Popup
					render={<PopupSurface className={cn("min-w-40", className)} />}
					{...props}
				/>
			</Menu.Positioner>
		</Menu.Portal>
	);
}

type MenuItemProps = Omit<Menu.Item.Props, "className"> & {
	className?: string;
	variant?: "default" | "danger";
};

export function MenuItem({
	className,
	variant = "default",
	...props
}: MenuItemProps) {
	return (
		<Menu.Item
			render={
				<PopupItem
					className={cn(
						variant === "danger" &&
							"text-danger data-highlighted:bg-danger-surface/20 data-highlighted:text-danger",
						className,
					)}
				/>
			}
			{...props}
		/>
	);
}

export function MenuSeparator() {
	return <Menu.Separator className="m-1 h-px bg-border/50" />;
}
