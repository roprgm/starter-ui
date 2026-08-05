"use client";

import { Select } from "@base-ui/react/select";
import type { ReactNode } from "react";
import { CheckIcon } from "@/components/icons/check-icon";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { Button } from "@/components/ui/button";
import { PopupItem, PopupSurface } from "@/components/ui/popup";
import { cn } from "@/lib/styles";

export const SelectRoot = Select.Root;

type SelectTriggerProps = Omit<Select.Trigger.Props, "className" | "render"> & {
	className?: string;
};

export function SelectTrigger({
	children,
	className,
	...props
}: SelectTriggerProps) {
	return (
		<Select.Trigger
			render={
				<Button
					className={cn("min-w-36 justify-start gap-2 font-normal", className)}
					variant="secondary"
				/>
			}
			{...props}
		>
			{children}
			<Select.Icon
				className="ml-auto in-data-popup-open:rotate-180 text-muted transition-transform duration-150"
				data-slot="icon"
			>
				<ChevronIcon direction="down" />
			</Select.Icon>
		</Select.Trigger>
	);
}

type SelectValueProps = Omit<Select.Value.Props, "className"> & {
	className?: string;
};

export function SelectValue({ className, ...props }: SelectValueProps) {
	return (
		<Select.Value
			className={cn(
				"flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-left data-placeholder:text-muted",
				className,
			)}
			{...props}
		/>
	);
}

type SelectContentProps = {
	children: ReactNode;
	className?: string;
};

export function SelectContent({ children, className }: SelectContentProps) {
	return (
		<Select.Portal>
			<Select.Positioner
				alignItemWithTrigger={false}
				className="z-50"
				sideOffset={6}
			>
				<Select.Popup
					render={
						<PopupSurface
							className={cn(
								"min-w-(--anchor-width) overflow-hidden",
								className,
							)}
						/>
					}
				>
					<Select.List>{children}</Select.List>
				</Select.Popup>
			</Select.Positioner>
		</Select.Portal>
	);
}

type SelectItemProps = Omit<Select.Item.Props, "className"> & {
	className?: string;
};

export function SelectItem({ children, className, ...props }: SelectItemProps) {
	return (
		<Select.Item
			render={<PopupItem className={cn("pr-1.5", className)} />}
			{...props}
		>
			<Select.ItemText className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
				{children}
			</Select.ItemText>
			<Select.ItemIndicator className="ml-2 text-muted">
				<CheckIcon />
			</Select.ItemIndicator>
		</Select.Item>
	);
}
