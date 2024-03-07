"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  return (
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen">
      <h2>Something went wrong!</h2>
      <button
        className="underline"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
