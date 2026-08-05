"use client";

import { Button } from "@base-ui/react/button";
import { useState } from "react";
import { ChevronIcon } from "@/components/icons/chevron-icon";
import { cn } from "@/lib/styles";

const WEEKDAYS = [
	{ short: "S", label: "Sunday" },
	{ short: "M", label: "Monday" },
	{ short: "T", label: "Tuesday" },
	{ short: "W", label: "Wednesday" },
	{ short: "T", label: "Thursday" },
	{ short: "F", label: "Friday" },
	{ short: "S", label: "Saturday" },
];
const MONTH_FORMAT = new Intl.DateTimeFormat("en", {
	month: "long",
	year: "numeric",
});
const DAY_FORMAT = new Intl.DateTimeFormat("en", { dateStyle: "full" });

function monthDays(month: Date) {
	const year = month.getFullYear();
	const index = month.getMonth();
	const firstWeekday = new Date(year, index, 1).getDay();

	return Array.from(
		{ length: 42 },
		(_, day) => new Date(year, index, day - firstWeekday + 1),
	);
}

function isSameDay(left: Date, right: Date) {
	return (
		left.getFullYear() === right.getFullYear() &&
		left.getMonth() === right.getMonth() &&
		left.getDate() === right.getDate()
	);
}

type CalendarProps = {
	onSelect: (date: Date) => void;
	selected?: Date | null;
};

export function Calendar({ onSelect, selected }: CalendarProps) {
	const today = new Date();
	const [month, setMonth] = useState(
		() =>
			new Date(
				(selected ?? today).getFullYear(),
				(selected ?? today).getMonth(),
				1,
			),
	);

	function changeMonth(offset: number) {
		setMonth(
			(current) =>
				new Date(current.getFullYear(), current.getMonth() + offset, 1),
		);
	}

	return (
		<fieldset className="h-74 w-67">
			<legend className="sr-only">Calendar</legend>
			<header className="mb-2 flex h-9 items-center justify-between">
				<Button
					aria-label="Previous month"
					className="grid size-8 cursor-pointer place-items-center rounded-md text-muted outline-none transition-colors hover:bg-elevated hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
					onClick={() => changeMonth(-1)}
				>
					<ChevronIcon direction="left" />
				</Button>
				<span className="font-medium text-sm">
					{MONTH_FORMAT.format(month)}
				</span>
				<Button
					aria-label="Next month"
					className="grid size-8 cursor-pointer place-items-center rounded-md text-muted outline-none transition-colors hover:bg-elevated hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
					onClick={() => changeMonth(1)}
				>
					<ChevronIcon direction="right" />
				</Button>
			</header>

			<div className="grid grid-cols-7">
				{WEEKDAYS.map((day) => (
					<div
						className="grid size-9 place-items-center text-muted text-xs"
						key={day.label}
					>
						<abbr className="no-underline" title={day.label}>
							{day.short}
						</abbr>
					</div>
				))}
			</div>

			<div className="grid grid-cols-7">
				{monthDays(month).map((day) => {
					const outside = day.getMonth() !== month.getMonth();
					const active = selected ? isSameDay(day, selected) : false;
					const current = isSameDay(day, today);

					return (
						<div key={day.toISOString()}>
							<Button
								aria-label={DAY_FORMAT.format(day)}
								aria-pressed={active}
								className="size-9 cursor-pointer rounded-md text-sm outline-none transition-colors duration-150 hover:bg-elevated focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default aria-pressed:bg-primary aria-pressed:text-primary-foreground"
								disabled={outside}
								onClick={() => onSelect(day)}
							>
								<span className={cn(current && "underline underline-offset-4")}>
									{day.getDate()}
								</span>
							</Button>
						</div>
					);
				})}
			</div>
		</fieldset>
	);
}
