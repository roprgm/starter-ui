# Design

## Direction

The starter is quiet, dark, and responsive. The interface should feel immediate
without drawing attention to its animation.

## Principles

- Show a useful response immediately after every action.
- Reserve space before content arrives; avoid layout shifts.
- Prefer clear hierarchy over decoration.
- Use one obvious primary action per view.
- Keep components accessible by keyboard and assistive technology.

## Motion

- Motion explains a change in state or spatial relationship.
- Use CSS for color, opacity, and simple transforms. Reach for Motion when an
  interaction needs path interpolation, layout animation, or interruptible
  spring movement.
- Small movements settle quickly; larger movements may feel softer.
- Entrances are subtle. Exits are faster than entrances.
- Animations remain interruptible and continue from their current position.
- Respect reduced motion by preserving the result and skipping the transition.
- Avoid decorative loops, exaggerated bounce, and simultaneous effects.

## Surfaces

- Dark mode is the only theme.
- Use a small hierarchy: canvas, surface, and raised surface.
- Prefer spacing and tone over borders.
- Use shadows sparingly; contrast should define most elevation.
- Choose radii from the fixed pixel scale according to component size.
- Cards are borderless and use `p-2.5` by default. Callers override spacing with
  `className` when their content needs it, such as `p-3` for text.
- Menu, select, popover, hover-card, and tooltip panels compose the same popup
  surface: control background, subtle border, one-pixel dark outer ring, and a
  soft shadow. Popup arrows continue both the border and outer ring.
- Dialogs reuse the card surface and add a dimmed backdrop, modal positioning,
  border, and stronger elevation.

## Color

Tokens live in `app/globals.css`. The system contains:

- Three layout surfaces: background, surface, and elevated.
- One recessed control surface and an intermediate control-hover surface for
  buttons, select triggers, inputs, and other interactive fields.
- Two text levels: foreground and muted.
- One high-contrast primary, one quiet accent, and distinct danger colors for
  text and filled surfaces.
- Four radius steps (`7px`, `10px`, `14px`, and `20px`). Component spacing stays
  local to the component that owns it.

Add a token only when an existing semantic role cannot represent the need.
Every foreground/background pair must meet accessible contrast.

## Components

- Separate behavior from visual styling when complexity justifies it.
- Keep state ownership explicit and APIs small.
- Every loading, empty, error, and disabled state is designed intentionally.
- Add animation only after the static interaction is correct.
- Fields compose their label, control, description, and validation message so
  the accessible relationships do not depend on manually coordinated IDs.

### Ownership

- `components/icons` owns SVG geometry and visual transitions between icon
  states. Icons do not perform actions or own accessible control labels.
- `components/ui` owns reusable interface primitives and may compose icons.
- `components/actions` composes UI and icons around a browser capability or a
  short-lived interaction lifecycle such as copy or share.
- Dependencies flow from actions to UI to icons. Icons never import their
  consumers, and UI primitives never import actions.
