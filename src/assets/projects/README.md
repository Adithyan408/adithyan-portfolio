# Project Images Directory

Place all screenshot and preview images for your portfolio projects in this folder.

### Supported formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`

### Current Project Images
- `pulse-analytics.jpg` - Pulse Analytics screenshot preview
- `devdock-cloud.jpg` - DevDock Cloud screenshot preview
- `aura-commerce.jpg` - Aura Commerce storefront screenshot preview
- `markdown-flow.jpg` - MarkdownFlow editor screenshot preview

### How to use a new image
1. Save your screenshot here (e.g. `src/assets/projects/my-new-project.jpg`).
2. In `src/data/projects.ts`, import the image:
   ```ts
   import myNewProjectImg from '../assets/projects/my-new-project.jpg'
   ```
3. Assign it to the project:
   ```ts
   image: myNewProjectImg
   ```
Vite will automatically optimize, hash, and bundle the image for both development and production.
