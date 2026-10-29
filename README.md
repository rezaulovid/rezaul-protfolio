# Rezaul Islam — Portfolio Website

Responsive personal portfolio built with Next.js App Router, React, TypeScript and Tailwind CSS v4. It uses a custom dark navy + purple design system and includes individual project detail routes.

## Included
- Responsive navbar and mobile menu
- Hero with professional-photo placeholder and clickable resume/CV CTA
- About Me, skills, education and professional experience
- Three project cards and dynamic detail pages at `/projects/[slug]`
- Project descriptions, stack, links, challenges and future improvements
- Contact section with email link
- SVG preview artwork and the seven Figma-ready SVG designs in `public/images/`
- SEO metadata, not-found page and deployment instructions

## Run locally
Requires Node.js 20.9+ (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check production build:

```bash
npm run build
npm run start
```

## Figma import
1. Open Figma and create a new Design file.
2. Unzip the separate `Rezaul_Islam_Figma_Ready_Portfolio.zip` package.
3. Drag each SVG into the Figma canvas. Ungroup imported vectors if you need to edit individual pieces.
4. The SVGs are importable vector layouts, not a native `.fig` file. Set up Auto Layout, responsive frames, component variants and prototype connections in Figma before treating it as a final handoff.

## Before submission — required personalization
1. Replace the hero placeholder with your professional photo.
2. Add a real resume PDF as `public/resume.pdf`; then change the resume CTA in `app/page.tsx` to `href="/resume.pdf" download`. Until then, the button intentionally links to Contact and says “coming soon” rather than linking to a missing file.
3. Verify the FitLog tech stack, feature list, challenge notes and add its public live URL when deployed.
4. Replace the generic LinkedIn URL with your actual profile link in `components/Footer.tsx` and `app/page.tsx`.
5. Add a phone number / WhatsApp only if you want it public.
6. Confirm role titles, employment dates and project details before submission. The older experience entries are intentionally flagged for confirmation.
7. Check the project live links and GitHub repositories from a signed-out browser.
8. Replace `https://example.com` in `app/layout.tsx` metadataBase with the final deployed domain.

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. Sign in to Vercel and select **Add New → Project**.
3. Import the repository. Vercel should detect Next.js automatically.
4. Keep the default build command (`npm run build`) and deploy.
5. Open the deployed URL and test desktop/mobile layouts, all three detail routes, project links, email CTA and resume button.
6. Add the final URL to your Programming Hero submission only after the deployment is live and verified.

## Notes
- No deployment has been performed from this package; a Vercel/GitHub account action is required to publish it.
- Project artwork is custom illustrative SVG artwork, not screenshots from the live apps.
- Skill bars are visual design indicators, not objective proficiency scores.
