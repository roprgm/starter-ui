"use client";

import { type ComponentProps, useEffect, useRef, useState } from "react";
import {
	ShareCheckIcon,
	type ShareCheckIconState,
} from "@/components/icons/share-check-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/styles";

export type ShareContent = Readonly<{
	title?: string;
	text?: string;
	url?: string;
}>;

export type ShareMethod = "native" | "clipboard";

type ShareState =
	| { status: "idle" }
	| { status: "sharing" }
	| { status: "shared"; method: ShareMethod }
	| { status: "error" };

type ButtonProps = ComponentProps<typeof Button>;
type ButtonClickEvent = Parameters<NonNullable<ButtonProps["onClick"]>>[0];

export type ShareButtonProps = Omit<
	ButtonProps,
	"children" | "content" | "onShare"
> & {
	content: ShareContent;
	timeout?: number;
	onShare?: (method: ShareMethod) => void;
	onShareError?: (error: unknown) => void;
};

function canShareNatively(content: ShareContent) {
	if (typeof navigator.share !== "function") {
		return false;
	}

	if (typeof navigator.canShare !== "function") {
		return true;
	}

	return navigator.canShare(content);
}

function fallbackValue(content: ShareContent) {
	if (content.url) {
		return content.url;
	}

	if (content.text) {
		return content.text;
	}

	return null;
}

async function share(content: ShareContent): Promise<ShareMethod> {
	if (canShareNatively(content)) {
		await navigator.share(content);
		return "native";
	}

	const value = fallbackValue(content);
	if (!value || !navigator.clipboard) {
		throw new Error("Sharing is not supported in this browser");
	}

	await navigator.clipboard.writeText(value);
	return "clipboard";
}

function isCancellation(error: unknown) {
	return error instanceof DOMException && error.name === "AbortError";
}

function statusMessage(state: ShareState) {
	if (state.status === "sharing") {
		return "Opening share options";
	}

	if (state.status === "error") {
		return "Unable to share";
	}

	if (state.status === "shared") {
		if (state.method === "clipboard") {
			return "Share link copied to clipboard";
		}

		return "Shared";
	}

	return "";
}

export function ShareButton({
	content,
	timeout = 1200,
	onShare,
	onShareError,
	onClick,
	disabled,
	className,
	size = "icon",
	variant = "secondary",
	type = "button",
	"aria-label": ariaLabel = "Share",
	...props
}: ShareButtonProps) {
	const [state, setState] = useState<ShareState>({ status: "idle" });
	const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		return () => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
		};
	}, []);

	function clearReset() {
		if (timer.current) {
			clearTimeout(timer.current);
			timer.current = null;
		}
	}

	function scheduleReset() {
		clearReset();
		timer.current = setTimeout(() => {
			timer.current = null;
			setState({ status: "idle" });
		}, timeout);
	}

	async function handleShare(event: ButtonClickEvent) {
		onClick?.(event);
		if (event.defaultPrevented) {
			return;
		}

		clearReset();
		setState({ status: "sharing" });

		try {
			const method = await share(content);
			setState({ status: "shared", method });
			onShare?.(method);
			scheduleReset();
		} catch (error) {
			if (isCancellation(error)) {
				setState({ status: "idle" });
				return;
			}

			setState({ status: "error" });
			onShareError?.(error);
			scheduleReset();
		}
	}

	const sharing = state.status === "sharing";
	const buttonDisabled = disabled || sharing;
	const iconState: ShareCheckIconState =
		state.status === "shared" ? "check" : "share";
	const message = statusMessage(state);

	return (
		<Button
			aria-busy={sharing}
			aria-label={ariaLabel}
			className={cn("data-[status=error]:text-danger", className)}
			data-status={state.status}
			disabled={buttonDisabled}
			onClick={handleShare}
			size={size}
			type={type}
			variant={variant}
			{...props}
		>
			<ShareCheckIcon state={iconState} />
			<span aria-live="polite" className="sr-only" role="status">
				{message}
			</span>
		</Button>
	);
}
