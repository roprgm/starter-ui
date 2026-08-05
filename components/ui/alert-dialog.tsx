"use client";

import { AlertDialog } from "@base-ui/react/alert-dialog";
import type { ComponentProps } from "react";
import { ModalBackdrop, ModalSurface } from "@/components/ui/modal";
import { cn } from "@/lib/styles";

export const AlertDialogRoot = AlertDialog.Root;
export const AlertDialogTrigger = AlertDialog.Trigger;
export const AlertDialogClose = AlertDialog.Close;

type AlertDialogContentProps = Omit<AlertDialog.Popup.Props, "className"> & {
	className?: string;
};

export function AlertDialogContent({
	className,
	...props
}: AlertDialogContentProps) {
	return (
		<AlertDialog.Portal>
			<AlertDialog.Backdrop render={<ModalBackdrop />} />
			<AlertDialog.Popup
				render={<ModalSurface className={className} />}
				{...props}
			/>
		</AlertDialog.Portal>
	);
}

export function AlertDialogTitle({
	className,
	...props
}: ComponentProps<typeof AlertDialog.Title>) {
	return (
		<AlertDialog.Title
			className={cn("font-medium text-base text-foreground", className)}
			{...props}
		/>
	);
}

export function AlertDialogDescription({
	className,
	...props
}: ComponentProps<typeof AlertDialog.Description>) {
	return (
		<AlertDialog.Description
			className={cn("-mt-3 text-muted text-sm leading-5", className)}
			{...props}
		/>
	);
}
