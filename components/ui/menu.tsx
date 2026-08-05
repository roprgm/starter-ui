"use client";

import { Menu } from "@base-ui/react/menu";
import { MenuCloseIcon } from "@/components/icons/menu-close-icon";
import { Button } from "@/components/ui/button";
import { PopupItem, PopupSurface } from "@/components/ui/popup";
import { cn } from "@/lib/styles";

export const MenuRoot = Menu.Root;

const menuItemClassNames = {
	default: "",
	danger:
		"text-danger data-highlighted:bg-danger-surface/20 data-highlighted:text-danger",
} as const;

type MenuTriggerProps = Omit<Menu.Trigger.Props, "className" | "render"> & {
	className?: string;
};

export function MenuTrigger({
	children,
	className,
	...props
}: MenuTriggerProps) {
	return (
		<Menu.Trigger
			{...props}
			render={(triggerProps, state) => {
				const iconState = state.open ? "close" : "menu";

				return (
					<Button
						{...triggerProps}
						className={cn("justify-start gap-2 font-normal", className)}
						variant="secondary"
					>
						{children}
						<MenuCloseIcon className="ml-auto text-muted" state={iconState} />
					</Button>
				);
			}}
		/>
	);
}

type MenuContentProps = Omit<Menu.Popup.Props, "className"> & {
	className?: string;
};

export function MenuContent({ className, ...props }: MenuContentProps) {
	return (
		<Menu.Portal>
			<Menu.Positioner align="end" className="z-50 outline-none" sideOffset={6}>
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
	variant?: keyof typeof menuItemClassNames;
};

export function MenuItem({
	className,
	variant = "default",
	...props
}: MenuItemProps) {
	return (
		<Menu.Item
			render={
				<PopupItem className={cn(menuItemClassNames[variant], className)} />
			}
			{...props}
		/>
	);
}

export function MenuSeparator() {
	return <Menu.Separator className="m-1 h-px bg-border/50" />;
}
