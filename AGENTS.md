# Engineering rules

## Scope

These rules apply to the entire repository.

## Implementation

- Build the smallest complete solution for the current requirement.
- Avoid speculative abstractions, configuration, compatibility layers, and unused extension points.
- Remove obsolete code when behavior changes. Preserve backward compatibility only when explicitly required.
- Prefer framework capabilities and existing dependencies before adding packages.
- Add a dependency only when it reduces total complexity.

## Structure

- Keep modules focused on one responsibility and one abstraction level.
- Keep dependencies one-way: `app` → `components` → `lib`.
- Put code in the lowest layer that can own it without creating upward dependencies.
- Keep helpers local until they represent a real shared concept or have a second consumer.
- Use the `@/` alias for cross-directory imports; avoid parent-relative imports (`../`).
- Use kebab-case filenames except where the framework requires another name.

## TypeScript and React

- Use precise types. Avoid `any`, assertions, and unnecessary explicit annotations.
- Prefer immutable data, guard clauses, linear control flow, and `const`.
- Keep one source of truth. Derive values instead of synchronizing duplicate state.
- Use effects only to synchronize with external systems.
- Keep side effects and external-data validation at explicit boundaries.
- Do not add memoization or abstractions without a demonstrated need.

## UI

- Follow `DESIGN.md` for visual, interaction, and motion decisions.
- Make loading, empty, error, disabled, keyboard, and reduced-motion behavior intentional.
- Do not share Tailwind class lists through constants or style-only TypeScript modules. Compose styles through reusable React components instead.
- When a genuinely low-level visual primitive must be shared without a component, define it in CSS with Tailwind's layer system. Reserve this for effects such as fades, shadows, or shimmers, not component styling or layout.

## Verification

- Format, type-check, lint, and test changed behavior before finishing.
- Run the narrowest relevant checks and fix issues introduced by the change.
