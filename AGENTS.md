# AGENTS.md

## 1. Project Overview

Recreate the frontend of a **mining company website** using React, TypeScript, Vite, and Tailwind CSS.

The repository contains a static copy of the original website downloaded with SiteOne Crawler. Use it as the primary reference for the design, content, pages, assets, and interactions.

The objective is to build a professional, responsive, maintainable website that closely matches the original.

## 2. Reference Website

Before coding, inspect the repository and locate the SiteOne Crawler download.

Identify:
- HTML pages and website routes.
- Images, logos, icons, fonts, and videos.
- CSS styles and JavaScript files.
- Page sections, shared components, and interactions.
- Available screenshots and crawler reports.

**Rules:**
- Preserve the original reference files; never modify or delete them.
- Reuse original assets and content whenever possible.
- Do not copy the entire HTML into a single React component.
- Do not invent company information, certifications, statistics, or operational claims.
- If resources or behaviors are unavailable, document the limitations.


## 3. Technology and Architecture

### Technology Stack

Use:
- React and TypeScript.
- Vite.
- Tailwind CSS, following the version already installed.
- React Router when multiple pages require routing.
- Lucide React when suitable original icons are unavailable.

Avoid unnecessary dependencies and duplicated code.

### Project Structure

Follow this modular structure, adapting it to the actual project size:

```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── layout/       # Navbar, Footer, shared layout components
│   ├── ui/           # Reusable buttons, cards, and UI elements
│   └── sections/     # Reusable page sections
├── layouts/          # Shared page layouts
├── pages/            # Individual pages for each route
├── data/             # Static content and configuration
├── hooks/            # Custom React hooks, when needed
├── types/            # Shared TypeScript types, when needed
├── App.tsx
├── main.tsx
└── index.css
```

- Use `src/assets/` for images, icons, and fonts imported through TypeScript.
- Use `public/` for static files that require stable public URLs.
- Keep components focused, reusable, and consistent with the original website.
- Create files and folders only when needed; avoid unnecessary abstraction.

### Reference Website

The original website downloaded with SiteOne Crawler is stored in `www.minera.com/`.

- Treat this directory as the primary visual and content reference.
- Inspect its HTML, CSS, images, fonts, icons, and other assets before implementing each page.
- Preserve the reference copy unchanged.
- Do not import the downloaded website's HTML pages directly as the React application's pages.
- Reuse relevant assets when appropriate and preserve their original quality.
- Never include the reference directory in the production build or deployment.

### Architecture Guidelines

- Create reusable components for navigation, footer, buttons, cards, and repeated sections.
- Use React Router when the website requires multiple routes.
- Keep page-specific content in `pages/` and shared static content in `data/` when appropriate.
- Maintain clear separation between presentation, content, and application logic.
- Follow the existing project conventions and installed package versions.
- Do not invent company information, services, certifications, or claims that are not supported by the reference website.



## 4. Design and Functionality

Prioritize visual fidelity to the original website:

- Layout, section order, spacing, and typography.
- Corporate colors, logos, images, and backgrounds.
- Navigation, buttons, forms, and visible interactions.
- Responsive behavior on desktop, tablet, and mobile.
- Hover states, transitions, and animations.

Recreate only the sections present in the reference. Use semantic HTML, accessible controls, meaningful image alt text, and consistent styling.

Do not claim that backend-dependent functionality works unless it has actually been implemented.

## 5. Workflow

Work incrementally:

1. Inspect the project and inventory the reference pages, sections, assets, and interactions.
2. Propose the React architecture before major implementation.
3. Implement the shared layout and homepage.
4. Recreate the remaining pages and interactions.
5. Compare screenshots and refine the visual differences.
6. Run available type checks, linting, tests, and production builds.

Use the existing scripts in `package.json`. Report errors and limitations honestly.

## 6. Git and Professional Commits

Use **Conventional Commits**:

`type(scope): description`

Examples:
- `feat(home): implement mining company homepage`
- `feat(navigation): add responsive mobile menu`
- `style(home): match original hero design`
- `fix(assets): correct broken image paths`
- `refactor(components): extract shared sections`
- `docs(project): document website structure`

Rules:
- Never commit automatically unless explicitly requested.
- Never push without explicit authorization.
- Review `git status` and `git diff` before committing.
- Stage only intended files; do not blindly run `git add .`.
- Never commit secrets, credentials, or sensitive `.env` files.
- Do not overwrite user changes or modify existing commits without permission.
- Run relevant checks before committing when practical.

When asked to commit, report the commit hash, message, and checks performed.

## 7. Completion Criteria

The implementation should have:
- All required pages and routes.
- A design closely matching the reference.
- Correctly reused assets and working navigation.
- Responsive layouts and functional visible interactions.
- No obvious broken links or missing assets.
- A successful production build.

Before reporting completion, summarize the implemented pages, important changes, verification results, and remaining limitations.

## 8. Communication

Start by inspecting the project and presenting an inventory and implementation plan.

If the reference directory cannot be located, ask the user instead of guessing. Do not modify the original reference files or begin a large implementation before understanding the project structure.