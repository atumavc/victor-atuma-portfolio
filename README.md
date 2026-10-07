# Victor ATUMA — Personal Portfolio

Premium interactive portfolio for **Victor ATUMA** — Information & Communication Engineer, Software Developer, DevOps Engineer, and 3D Animator.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Run locally

```bash
npm install
npm run dev -- --port 43123 --hostname 127.0.0.1
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm start
```

## Edit your content

| What | File |
| --- | --- |
| Name, headline, contact links, hero copy | `src/data/site.ts` |
| Projects / selected work | `src/data/projects.ts` |
| Experience & education | `src/data/experience.ts` |
| Skills categories | `src/data/skills.ts` |
| 3D portrait asset | `public/images/victor-atuma-portrait.webp` (+ `.jpg` fallback) |

Placeholder entries are marked with **Edit** / **Placeholder** tags in the UI so you can find them quickly.

## Portrait & cursor tracking

The hero uses CSS 3D transforms + a `requestAnimationFrame` lerp loop (`~0.08`) so the portrait subtly follows the cursor (rotation, translation, lighting overlay). Hovering the portrait strengthens the effect and glow. Touch devices and `prefers-reduced-motion` disable or reduce the interaction.

## Stack

- Next.js App Router
- Tailwind CSS v4
- Framer Motion
- Space Grotesk + DM Sans
