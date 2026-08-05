"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/styles";

const MORPH_SPRING = {
	type: "spring",
	stiffness: 520,
	damping: 34,
	mass: 0.45,
} as const;
const INSTANT_TRANSITION = { duration: 0 } as const;
const MODE_STYLES = {
	fill: { fill: "currentColor", stroke: "none" },
	stroke: { fill: "none", stroke: "currentColor" },
} as const;

export type MorphIconPath = Readonly<{
	key: string;
	d: string;
	visible?: boolean;
}>;

type MorphIconProps = {
	paths: readonly MorphIconPath[];
	rotate?: number;
	mode?: keyof typeof MODE_STYLES;
	strokeWidth?: number;
	className?: string;
};

export function MorphIcon({
	paths,
	rotate = 0,
	mode = "stroke",
	strokeWidth = 2,
	className,
}: MorphIconProps) {
	const reducedMotion = useReducedMotion();
	const transition = reducedMotion ? INSTANT_TRANSITION : MORPH_SPRING;
	const modeStyles = MODE_STYLES[mode];
	const resolvedStrokeWidth = mode === "stroke" ? strokeWidth : undefined;

	return (
		<motion.span
			animate={{ rotate }}
			aria-hidden="true"
			className={cn("inline-flex size-4 shrink-0", className)}
			data-slot="icon"
			initial={false}
			transition={transition}
		>
			<svg
				aria-hidden="true"
				className="block size-full"
				fill={modeStyles.fill}
				focusable="false"
				stroke={modeStyles.stroke}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={resolvedStrokeWidth}
				viewBox="0 0 24 24"
			>
				{paths.map((path) => {
					const opacity = path.visible === false ? 0 : 1;

					return (
						<motion.path
							animate={{ d: path.d, opacity }}
							initial={false}
							key={path.key}
							transition={transition}
						/>
					);
				})}
			</svg>
		</motion.span>
	);
}
