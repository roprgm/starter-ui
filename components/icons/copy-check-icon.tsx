"use client";

import { MorphIcon, type MorphIconPath } from "@/components/icons/morph-icon";

const COPY_PATHS = [
	{
		key: "front",
		d: "M 9 9 L 20 9 L 20 20 L 9 20 L 9 9",
	},
	{
		key: "back",
		d: "M 15 5 L 5 5 L 5 15 L 9 15 L 9 15",
	},
] satisfies readonly MorphIconPath[];
const CHECK_PATHS = [
	{
		key: "front",
		d: "M 5 12 L 9 16 L 19 6 L 19 6 L 19 6",
	},
	{
		key: "back",
		d: "M 12 12 L 12 12 L 12 12 L 12 12 L 12 12",
		visible: false,
	},
] satisfies readonly MorphIconPath[];

export type CopyCheckIconState = "copy" | "check";

type CopyCheckIconProps = {
	state: CopyCheckIconState;
	className?: string;
};

export function CopyCheckIcon({ state, className }: CopyCheckIconProps) {
	const paths = state === "check" ? CHECK_PATHS : COPY_PATHS;

	return <MorphIcon className={className} paths={paths} />;
}
