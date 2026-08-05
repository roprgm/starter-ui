"use client";

import type { SelectRootProps } from "@base-ui/react/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/styles";

type MinuteStep = 1 | 5 | 10 | 15 | 30;

type TimePickerProps = Pick<
	SelectRootProps<string>,
	| "defaultValue"
	| "disabled"
	| "form"
	| "name"
	| "onValueChange"
	| "required"
	| "value"
> & {
	className?: string;
	minuteStep?: MinuteStep;
	placeholder?: string;
};

function padTimePart(value: number) {
	return value.toString().padStart(2, "0");
}

function createTimeOptions(minuteStep: MinuteStep) {
	const optionsPerHour = 60 / minuteStep;

	return Array.from({ length: 24 * optionsPerHour }, (_, index) => {
		const hour = Math.floor(index / optionsPerHour);
		const minute = (index % optionsPerHour) * minuteStep;
		const value = `${padTimePart(hour)}:${padTimePart(minute)}`;

		return { label: value, value };
	});
}

export function TimePicker({
	className,
	minuteStep = 15,
	placeholder = "Pick a time",
	...props
}: TimePickerProps) {
	const options = createTimeOptions(minuteStep);

	return (
		<SelectRoot items={options} {...props}>
			<SelectTrigger
				aria-label={placeholder}
				className={cn("min-w-36 font-normal", className)}
			>
				<SelectValue placeholder={placeholder} />
			</SelectTrigger>
			<SelectContent className="overflow-hidden py-0">
				<ScrollArea viewportClassName="max-h-64 py-1 overflow-x-hidden">
					{options.map((option) => (
						<SelectItem key={option.value} value={option.value}>
							{option.label}
						</SelectItem>
					))}
				</ScrollArea>
			</SelectContent>
		</SelectRoot>
	);
}
