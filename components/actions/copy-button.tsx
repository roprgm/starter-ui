"use client";

import { type ComponentProps, useEffect, useRef, useState } from "react";
import {
	CopyCheckIcon,
	type CopyCheckIconState,
} from "@/components/icons/copy-check-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/styles";

type CopyStatus = "idle" | "copied" | "error";

const STATUS_MESSAGES: Record<CopyStatus, string> = {
	idle: "",
	copied: "Copied to clipboard",
	error: "Unable to copy to clipboard",
};

type ButtonProps = ComponentProps<typeof Button>;
type ButtonClickEvent = Parameters<NonNullable<ButtonProps["onClick"]>>[0];

export type CopyButtonProps = Omit<
	ButtonProps,
	"children" | "onCopy" | "value"
> & {
	value: string;
	timeout?: number;
	onCopy?: (value: string) => void;
	onCopyError?: (error: unknown) => void;
};

export function CopyButton({
	value,
	timeout = 1000,
	onCopy,
	onCopyError,
	onClick,
	className,
	size = "icon",
	variant = "secondary",
	type = "button",
	"aria-label": ariaLabel = "Copy to clipboard",
	...props
}: CopyButtonProps) {
	const [status, setStatus] = useState<CopyStatus>("idle");
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
		};
	}, []);

	function scheduleReset() {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = setTimeout(() => {
			timer.current = null;
			setStatus("idle");
		}, timeout);
	}

	async function handleCopy(event: ButtonClickEvent) {
		onClick?.(event);
		if (event.defaultPrevented) {
			return;
		}

		try {
			await navigator.clipboard.writeText(value);
		} catch (error) {
			setStatus("error");
			onCopyError?.(error);
			scheduleReset();
			return;
		}

		onCopy?.(value);
		setStatus("copied");
		scheduleReset();
	}

	const iconState: CopyCheckIconState = status === "copied" ? "check" : "copy";
	const statusMessage = STATUS_MESSAGES[status];

	return (
		<Button
			aria-label={ariaLabel}
			className={cn("data-[status=error]:text-danger", className)}
			data-copied={status === "copied"}
			data-status={status}
			onClick={handleCopy}
			size={size}
			type={type}
			variant={variant}
			{...props}
		>
			<CopyCheckIcon state={iconState} />
			<span aria-live="polite" className="sr-only" role="status">
				{statusMessage}
			</span>
		</Button>
	);
}
