"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-8 bg-yellow-500 text-black px-5 py-3 rounded-lg font-bold hover:bg-yellow-400"
    >
      ← Back to Movies
    </button>
  );
}
