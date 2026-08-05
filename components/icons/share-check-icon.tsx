"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckIcon } from "@/components/icons/check-icon";
import { cn } from "@/lib/styles";

const ICON_VARIANTS = {
	hidden: { opacity: 0, scale: 0.5 },
	visible: { opacity: 1, scale: 1 },
};
const ICON_TRANSITION = {
	duration: 0.13,
	ease: [0.215, 0.61, 0.355, 1],
} as const;
const INSTANT_TRANSITION = { duration: 0 } as const;

function ShareIcon() {
	return (
		<svg
			aria-hidden="true"
			className="size-full"
			fill="none"
			focusable="false"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			viewBox="0 0 24 24"
		>
			<circle cx="18" cy="5" r="3" />
			<circle cx="6" cy="12" r="3" />
			<circle cx="18" cy="19" r="3" />
			<path d="m8.6 10.5 6.8-4" />
			<path d="m8.6 13.5 6.8 4" />
		</svg>
	);
}

export type ShareCheckIconState = "share" | "check";

type ShareCheckIconProps = {
	state: ShareCheckIconState;
	className?: string;
};

function StateIcon({ state }: { state: ShareCheckIconState }) {
	if (state === "check") {
		return <CheckIcon className="size-full" />;
	}

	return <ShareIcon />;
}

export function ShareCheckIcon({ state, className }: ShareCheckIconProps) {
	const reducedMotion = useReducedMotion();
	const transition = reducedMotion ? INSTANT_TRANSITION : ICON_TRANSITION;

	return (
		<span className={cn("inline-flex size-4 shrink-0", className)}>
			<AnimatePresence initial={false} mode="wait">
				<motion.span
					animate="visible"
					className="inline-flex size-full"
					exit="hidden"
					initial="hidden"
					key={state}
					transition={transition}
					variants={ICON_VARIANTS}
				>
					<StateIcon state={state} />
				</motion.span>
			</AnimatePresence>
		</span>
	);
}
