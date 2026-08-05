"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	PopoverContent,
	PopoverRoot,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/styles";

const DATE_FORMAT = new Intl.DateTimeFormat("en", {
	dateStyle: "medium",
});

const BUTTON_VARIANT_BY_APPEARANCE = {
	field: "secondary",
	text: "ghost",
} as const;

type DatePickerProps = {
	appearance?: "field" | "text";
	className?: string;
	defaultValue?: Date;
	disabled?: boolean;
	onValueChange?: (date: Date) => void;
	placeholder?: string;
	value?: Date | null;
};

export function DatePicker({
	appearance = "field",
	className,
	defaultValue,
	disabled,
	onValueChange,
	placeholder = "Pick a date",
	value,
}: DatePickerProps) {
	const [internalValue, setInternalValue] = useState<Date | null>(
		defaultValue ?? null,
	);
	const [open, setOpen] = useState(false);
	const selected = value === undefined ? internalValue : value;
	const empty = selected === null;
	const label = selected ? DATE_FORMAT.format(selected) : placeholder;

	function selectDate(date: Date) {
		if (value === undefined) {
			setInternalValue(date);
		}

		onValueChange?.(date);
		setOpen(false);
	}

	return (
		<PopoverRoot onOpenChange={setOpen} open={open}>
			<PopoverTrigger
				disabled={disabled}
				render={
					<Button
						className={cn(
							appearance === "field" &&
								"min-w-44 justify-start font-normal data-[empty=true]:text-muted",
							appearance === "text" &&
								"h-auto px-0 font-normal text-foreground underline decoration-border underline-offset-4 hover:bg-transparent hover:decoration-muted",
							className,
						)}
						data-empty={empty}
						variant={BUTTON_VARIANT_BY_APPEARANCE[appearance]}
					/>
				}
			>
				{label}
			</PopoverTrigger>
			<PopoverContent align="start" className="w-auto p-2">
				<Calendar onSelect={selectDate} selected={selected} />
			</PopoverContent>
		</PopoverRoot>
	);
}
