"use client";

import { MorphIcon, type MorphIconPath } from "@/components/icons/morph-icon";

const MENU_PATHS = [
	{ key: "top", d: "M 4 7 L 20 7" },
	{ key: "middle", d: "M 4 12 L 20 12" },
	{ key: "bottom", d: "M 4 17 L 20 17" },
] satisfies readonly MorphIconPath[];
const CLOSE_PATHS = [
	{ key: "top", d: "M 6.5 6.5 L 17.5 17.5" },
	{
		key: "middle",
		d: "M 12 12 L 12 12",
		visible: false,
	},
	{ key: "bottom", d: "M 6.5 17.5 L 17.5 6.5" },
] satisfies readonly MorphIconPath[];

export type MenuCloseIconState = "menu" | "close";

type MenuCloseIconProps = {
	state: MenuCloseIconState;
	className?: string;
};

export function MenuCloseIcon({ state, className }: MenuCloseIconProps) {
	const closed = state === "close";
	const paths = closed ? CLOSE_PATHS : MENU_PATHS;
	const rotate = closed ? 90 : 0;

	return <MorphIcon className={className} paths={paths} rotate={rotate} />;
}
