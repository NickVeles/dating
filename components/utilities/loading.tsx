"use client";

export default function Loading() {
  return (
    <main className="flex min-h-(--header-screen-height)">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="w-12 h-12 border-4 border-pink-700 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-700 text-lg font-medium font-serif dyslexic:font-dyslexic">
          Loading, please wait...
        </p>
      </div>
    </main>
  );
}
