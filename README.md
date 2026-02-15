This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Creating a blog post

Follow these steps to add a new blog post using MDX (the project imports MDX from `src/content` and uses a client wrapper under `src/app/blog`):

- 1) Create the MDX content file

	- Path: `src/content/blog/<your-slug>.mdx`
	- Minimal example:

```md
# My New Post

_Published: 2026-02-15_

Here is the post body. You can include code blocks, images, blockquotes, etc.

```js
console.log('Hello world');
```

> A quote example.

![Alt text](/images/your-image.jpg)
```

- 2) Add a client wrapper route so the MDX file is the post content (this avoids treating MDX as an app route):

	- Path: `src/app/blog/<your-slug>/page.tsx`
	- Example wrapper (copy & paste and replace `<your-slug>`):

```tsx
"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Post = dynamic(
	() => import("../../../content/blog/<your-slug>.mdx"),
	{ ssr: false }
);

export default function PostWrapper() {
	return (
		<article className="prose dark:prose-invert max-w-4xl mx-auto px-6 py-20">
			<Suspense fallback={<p>Loading post…</p>}>
				<Post />
			</Suspense>
		</article>
	);
}
```

- 3) Add the post to the blog index so it appears on `/blog`

	- File: `src/app/blog/page.tsx`
	- Edit the `blogPosts` array and add an entry:

```ts
{
	slug: "your-slug",
	title: "My New Post",
	date: "February 15, 2026",
	description: "Short summary for the index",
	tag: "Category"
}
```

- 4) Add media (optional)

	- Put images under `public/images/...` and reference them in MDX with `/images/...` (absolute path from site root).

- 5) Restart dev server

```bash
npm run dev
# or
pnpm dev
```

Notes / advanced options

- If you want YAML frontmatter (title/date/tag) to be machine-readable (for automatic indexes, SEO, or RSS), I can add frontmatter parsing and automatic post discovery. Right now the project treats MDX as content modules (no automatic frontmatter parsing), so adding frontmatter may render as text unless configured.
- I can also add syntax highlighting and a custom MDX components map (for images, callouts, share buttons). Tell me which you'd like and I will implement it.

