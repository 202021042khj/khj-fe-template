# Architecture Conventions

## Purpose / provenance

This convention is inspired by `recruit-khj` (a prior take-home-test project) but deliberately improves on it rather than copying it verbatim:

- **Single shared props interface.** In the reference, `DesktopPage.tsx` and `MobilePage.tsx` each redefined their own copy of the same props interface. Here, the page-level hook exports one interface; both device components import it.
- **Consistent naming.** The reference had a `Mobilepage.tsx` casing typo. Here it's always `MobilePage.tsx`.
- **Real section composition.** The reference had no section layer — each device component was one large block with comment dividers. Here, pages compose named section components from a `sections/` folder.
- **Centralized constants.** The reference scattered constants inline inside hooks. Here, constant data lives in `constants/`.
- **Added shared infra.** `components/common/`, `types/`, and `lib/` folders didn't exist in the reference; they're part of the base layout here.

## Desktop/Mobile split

Per page-route, create a folder `components/<page-name>/` (kebab-case, matching the route) containing:

```
components/<page-name>/
├── DesktopPage.tsx
└── MobilePage.tsx
```

Rules:

- **All state/logic lives in one hook**, `hooks/use<PageName>Logic.ts`, called exactly once, in `app/.../page.tsx`.
- **The toggle always happens at the page level**, never inside a component's own root `<div>`:

  ```tsx
  "use client";

  export default function Page() {
    const logic = usePageLogic();

    return (
      <div className="flex flex-1 flex-col">
        <div className="hidden md:flex md:flex-1">
          <DesktopPage {...logic} />
        </div>
        <div className="flex flex-1 md:hidden">
          <MobilePage {...logic} />
        </div>
      </div>
    );
  }
  ```

  This is CSS-only (Tailwind `hidden md:flex` / `flex md:hidden`) — no JS media-query hooks, no user-agent sniffing. Both trees mount; the `md:` breakpoint (768px) decides what's visible.

- **The shared props type is the hook's exported return-type interface** (e.g. `UsePostsListLogicResult`), imported by both `DesktopPage.tsx` and `MobilePage.tsx`. Never redefine it per file.

Worked example: `components/posts-list/` + `hooks/usePostsListLogic.ts`, `components/post-detail/` + `hooks/usePostDetailLogic.ts`.

## Section-based modularization

Per page-route, sections live in `components/<page-name>/sections/`, one file per logical section, PascalCase, suffixed `Section`:

```
components/<page-name>/sections/
├── HeaderSection.tsx
└── ListSection.tsx
```

`DesktopPage.tsx` / `MobilePage.tsx` compose sections — they don't contain section-level markup themselves.

**Split rule:** default to a single shared section file using responsive Tailwind classes (`md:`, `lg:`) internally. Only split a section into `Desktop<Name>Section.tsx` / `Mobile<Name>Section.tsx` when the two variants have genuinely different DOM structure or composition — a different element hierarchy, different interactive components, or content reordering that can't be expressed by rearranging classes on one JSX tree. If you find yourself reaching for a JS viewport check, or the two versions' JSX no longer resemble each other line-for-line, split. Otherwise, keep one file.

Worked example:

| Section | Shared or split? | Why |
|---|---|---|
| `posts-list/sections/HeaderSection.tsx` | Shared | Only spacing/type-scale differs by breakpoint |
| `posts-list/sections/PostListSection.tsx` | Shared | Grid column count is the only difference (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) |
| `post-detail/sections/ContentSection.tsx` | Shared | Paragraph list, same structure at all sizes |
| `post-detail/sections/DesktopHeaderSection.tsx` + `MobileHeaderSection.tsx` | Split | Desktop uses a text back-link + breadcrumb-style block; mobile uses a sticky icon app-bar — genuinely different element hierarchy, not just styling |

## Naming conventions

- **Components**: PascalCase files (`HeaderSection.tsx`).
- **Hooks**: camelCase, `use`-prefixed (`usePostsListLogic.ts`), matching the exported hook name.
- **Page-route component folders**: kebab-case matching the route (`components/posts-list/`, `components/post-detail/`).
- **No barrel `index.ts` files** anywhere — import directly from the file.
- **Always use the `@/` alias** (`@/components/...`, `@/hooks/...`) — never relative `../../` imports.
- **Split-section files are prefixed** `Desktop`/`Mobile` (not suffixed), to visually match `DesktopPage`/`MobilePage`.

## Shared infra layout

- `components/common/` — shared UI primitives (e.g. `Badge.tsx`), domain-agnostic and reusable across pages.
- `hooks/` — flat; page-level hooks (`use<PageName>Logic.ts`) and any future cross-page hooks live together.
- `types/` — one file per domain concept (`types/post.ts`), not per-page.
- `constants/` — one file per domain concept holding actual constant data (`constants/posts.ts`), replacing the reference's pattern of inlining constants inside hooks.
- `lib/` — pure helper functions only, no React (`lib/formatDate.ts`).

## Note on page-level hooks and `"use client"`

A page-level hook only needs `"use client"` if it uses client-only APIs (`useState`, `useEffect`, browser globals). If it's pure derived-data logic (e.g. `usePostDetailLogic`, which just does an array `find`), it doesn't need the directive itself — it's fine as long as it's only ever called from an already-`"use client"` `page.tsx`. Don't add `"use client"` reflexively to every hook file.
