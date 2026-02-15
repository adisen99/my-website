import Link from "next/link";

export default function CvPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-black dark:text-white">CV</h1>

      <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300">
        <p>
          Here is a link to my latest CV as of November 2025...{" "}
          <Link
            href="#"
            className="underline decoration-zinc-400 underline-offset-4 hover:text-blue-600 transition-colors"
          >
            Download file
          </Link>
        </p>

        <p>
          Please{" "}
          <a
            href="mailto:aditya.sengupta@student.unimelb.edu.au"
            className="underline decoration-zinc-400 underline-offset-4 hover:text-blue-600 transition-colors"
          >
            email me
          </a>{" "}
          if you would like a full copy of my most up-to-date CV.
        </p>
      </div>
    </main>
  );
}
