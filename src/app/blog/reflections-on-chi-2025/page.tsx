"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Post = dynamic(
  () => import("../../../content/blog/reflections-on-chi-2025.mdx"),
  { ssr: false }
);

export default function ReflectionsOnChi2025Wrapper() {
  return (
    <article className="prose dark:prose-invert max-w-4xl mx-auto px-6 py-20">
      <Suspense fallback={<p>Loading post…</p>}>
        <Post />
      </Suspense>
    </article>
  );
}
