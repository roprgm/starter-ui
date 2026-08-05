# Starter UI

A compact, dark interface starter built with Next.js, Base UI, Tailwind CSS,
and Motion. Components favor semantic tokens, accessible behavior, and small
APIs over broad configuration.

## Start

```bash
bun install
bun dev
```

Open `http://localhost:3000` for the component gallery. The same gallery remains
available at `/ui` for direct linking.

## Structure

- `app/globals.css` defines the visual tokens.
- `components/ui` contains reusable interface primitives.
- `components/actions` wraps browser capabilities such as copy and share.
- `components/icons` owns icon geometry and transitions.
- `DESIGN.md` records visual and interaction decisions.

Import components directly from their modules:

```tsx
import { Button } from "@/components/ui/button";
import {
	DialogContent,
	DialogRoot,
	DialogTrigger,
} from "@/components/ui/dialog";
```

## Checks

```bash
bun run check
bun run typecheck
bun run build
```
