"use client";

import { Dialog } from "@base-ui/react/dialog";
import type { ComponentProps } from "react";
import { ModalBackdrop, ModalSurface } from "@/components/ui/modal";
import { cn } from "@/lib/styles";

export const DialogRoot = Dialog.Root;
export const DialogTrigger = Dialog.Trigger;
export const DialogClose = Dialog.Close;

type DialogContentProps = Omit<Dialog.Popup.Props, "className"> & {
	className?: string;
};

export function DialogContent({ className, ...props }: DialogContentProps) {
	return (
		<Dialog.Portal>
			<Dialog.Backdrop render={<ModalBackdrop />} />
			<Dialog.Popup
				render={<ModalSurface className={className} />}
				{...props}
			/>
		</Dialog.Portal>
	);
}

export function DialogTitle({
	className,
	...props
}: ComponentProps<typeof Dialog.Title>) {
	return (
		<Dialog.Title
			className={cn("font-medium text-base text-foreground", className)}
			{...props}
		/>
	);
}

export function DialogDescription({
	className,
	...props
}: ComponentProps<typeof Dialog.Description>) {
	return (
		<Dialog.Description
			className={cn("-mt-3 text-muted text-sm leading-5", className)}
			{...props}
		/>
	);
}
