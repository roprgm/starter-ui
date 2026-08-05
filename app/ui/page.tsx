import { CopyButton } from "@/components/actions/copy-button";
import { ShareButton } from "@/components/actions/share-button";
import {
	AlertDialogClose,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogRoot,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/date-picker";
import {
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogRoot,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
	HoverCardContent,
	HoverCardRoot,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
	MenuContent,
	MenuItem,
	MenuRoot,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui/menu";
import {
	PopoverContent,
	PopoverDescription,
	PopoverRoot,
	PopoverTitle,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	SelectContent,
	SelectItem,
	SelectRoot,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { TimePicker } from "@/components/ui/time-picker";
import {
	TooltipContent,
	TooltipRoot,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
	{ value: "starter", label: "Starter" },
	{ value: "professional", label: "Professional" },
	{ value: "business", label: "Business" },
	{ value: "enterprise", label: "Enterprise" },
];
const shareContent = {
	title: "Component gallery",
	text: "A small dark interface built from reusable components.",
	url: "https://example.com",
};

export default function Home() {
	return (
		<main className="mx-auto max-w-5xl p-6">
			<header className="mb-12 max-w-xl">
				<p className="mb-2 text-muted text-sm">Nice UI Starter</p>
				<h1 className="font-medium text-3xl tracking-tight">
					Basic components
				</h1>
				<p className="mt-3 text-muted">
					A small dark interface built from semantic tokens and accessible
					primitives.
				</p>
			</header>

			<div className="grid gap-8 md:grid-cols-2">
				<section>
					<h2 className="mb-3 text-muted text-sm">Input</h2>
					<Card className="p-3">
						<Field>
							<FieldLabel>Project name</FieldLabel>
							<Input placeholder="Personal dashboard" />
							<FieldDescription>
								Used to identify the project across the interface.
							</FieldDescription>
						</Field>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Textarea</h2>
					<Card className="p-3">
						<Field>
							<FieldLabel>Notes</FieldLabel>
							<Textarea placeholder="Add context, ideas, or reminders" />
						</Field>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Buttons</h2>
					<Card className="flex flex-wrap gap-2.5">
						<Button>Primary</Button>
						<Button variant="secondary">Secondary</Button>
						<Button variant="ghost">Ghost</Button>
						<Button variant="danger">Delete</Button>
						<Button disabled>Disabled</Button>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Actions</h2>
					<Card className="flex min-h-32 items-center justify-center gap-3">
						<TooltipRoot>
							<TooltipTrigger
								render={
									<CopyButton value="Copied from the component gallery" />
								}
							/>
							<TooltipContent>Copy to clipboard</TooltipContent>
						</TooltipRoot>
						<TooltipRoot>
							<TooltipTrigger render={<ShareButton content={shareContent} />} />
							<TooltipContent>Share</TooltipContent>
						</TooltipRoot>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Menu</h2>
					<Card>
						<MenuRoot>
							<MenuTrigger render={<Button variant="secondary" />}>
								Actions
							</MenuTrigger>
							<MenuContent>
								<MenuItem>Open project</MenuItem>
								<MenuItem>Duplicate</MenuItem>
								<MenuSeparator />
								<MenuItem variant="danger">Delete</MenuItem>
							</MenuContent>
						</MenuRoot>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Select</h2>
					<Card>
						<SelectRoot defaultValue="starter" items={plans}>
							<SelectTrigger>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								{plans.map((plan) => (
									<SelectItem key={plan.value} value={plan.value}>
										{plan.label}
									</SelectItem>
								))}
							</SelectContent>
						</SelectRoot>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Popover</h2>
					<Card>
						<PopoverRoot>
							<PopoverTrigger render={<Button variant="secondary" />}>
								Show details
							</PopoverTrigger>
							<PopoverContent>
								<PopoverTitle>Project details</PopoverTitle>
								<PopoverDescription>
									Name and access settings can be edited later.
								</PopoverDescription>
							</PopoverContent>
						</PopoverRoot>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Hover card</h2>
					<Card className="p-3">
						<HoverCardRoot>
							<HoverCardTrigger href="/ui">Nice UI Starter</HoverCardTrigger>
							<HoverCardContent>
								<p className="font-medium text-sm">Component gallery</p>
								<p className="mt-1 text-muted text-sm leading-5">
									A quiet set of reusable interface primitives.
								</p>
							</HoverCardContent>
						</HoverCardRoot>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Dialogs</h2>
					<Card className="flex flex-wrap gap-2.5">
						<DialogRoot>
							<DialogTrigger render={<Button variant="secondary" />}>
								Open dialog
							</DialogTrigger>
							<DialogContent>
								<DialogTitle>Project settings</DialogTitle>
								<DialogDescription>
									Review the details before continuing.
								</DialogDescription>
								<div className="flex justify-end">
									<DialogClose render={<Button variant="secondary" />}>
										Close
									</DialogClose>
								</div>
							</DialogContent>
						</DialogRoot>

						<AlertDialogRoot>
							<AlertDialogTrigger render={<Button variant="danger" />}>
								Delete project
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogTitle>Delete project?</AlertDialogTitle>
								<AlertDialogDescription>
									This action cannot be undone.
								</AlertDialogDescription>
								<div className="flex justify-end gap-2">
									<AlertDialogClose render={<Button variant="secondary" />}>
										Cancel
									</AlertDialogClose>
									<AlertDialogClose render={<Button variant="danger" />}>
										Delete
									</AlertDialogClose>
								</div>
							</AlertDialogContent>
						</AlertDialogRoot>
					</Card>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Cards</h2>
					<div className="grid gap-3">
						<Card className="p-3">
							<CardTitle>Quiet surface</CardTitle>
							<CardDescription>Spacing creates the hierarchy.</CardDescription>
						</Card>
						<Card className="p-3" tone="raised">
							<CardTitle>Raised surface</CardTitle>
							<CardDescription>Reserved for focused content.</CardDescription>
						</Card>
					</div>
				</section>

				<section>
					<h2 className="mb-3 text-muted text-sm">Date and time</h2>
					<Card className="flex flex-wrap gap-3">
						<DatePicker aria-label="Date" />
						<TimePicker defaultValue="09:00" />
					</Card>
				</section>
			</div>
		</main>
	);
}
