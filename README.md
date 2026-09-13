# Abdullah Nishat Portfolio

A Vercel-ready personal portfolio built with **Next.js + React + TypeScript + Tailwind CSS**.


## Run locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build check

```bash
npm run build
```

## How to update your information

Open:

```text
data/portfolio.ts
```

All major portfolio content is stored there.

### Add a new project

Inside `projects`, copy an existing project object and change the values:

```ts
{
  title: "Project Name",
  subtitle: "Short project type",
  category: "Full Stack",
  description: "What the project does.",
  technologies: ["Next.js", "NestJS", "PostgreSQL"],
  liveUrl: "https://your-live-link.com",
  githubUrl: "https://github.com/your-repository",
  image: "/projects/your-project.svg",
  featured: true,
}
```

Then add the local image to:

```text
public/projects/
```

Do not use remote image URLs unless you intentionally configure them in Next.js.

## Replace profile image

Replace:

```text
public/profile.png
```

Keep the same filename, or update `profileImage` in `data/portfolio.ts`.

## Replace CV

Replace:

```text
public/Abdullah_Nishat_CV.pdf
```

The Download CV button will automatically use the replacement file if the name stays the same.

## Contact form

The contact form uses `mailto:`. It opens the visitor's configured email application with name, email and message pre-filled. This keeps the project backend-free.

If you later want messages to submit directly without opening the visitor's email app, use Formspree/Web3Forms or add a Next.js API route/email provider.

## Vercel deployment

1. Create a new GitHub repository.
2. Push this project.
3. Open Vercel and choose **Add New Project**.
4. Import the GitHub repository.
5. Framework should be detected as **Next.js**.
6. Click **Deploy**.
7. Every future push will automatically update the live portfolio.

## Main files

```text
app/page.tsx                Main page composition
app/globals.css             Global styling
components/                 Reusable site sections
data/portfolio.ts           All editable portfolio content
public/profile.png          Profile photo
public/linkedin-cover.png   Portfolio/LinkedIn cover image
public/Abdullah_Nishat_CV.pdf  Downloadable CV
public/projects/            Local project artwork
```
