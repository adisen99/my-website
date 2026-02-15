"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Post = dynamic(
  () => import("../../../content/blog/teaching-inclusive-design.mdx"),
  { ssr: false }
);

export default function TeachingInclusiveDesignWrapper() {
  return (
    <article className="prose dark:prose-invert max-w-4xl mx-auto px-6 py-20">
      <Suspense fallback={<p>Loading post…</p>}>
        <Post />
      </Suspense>
    </article>
  );
}
