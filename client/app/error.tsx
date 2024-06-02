"use client";

import { useEffect } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    if (error.digest) {
      // Send the error to the server
      console.error("Error digest:", error.digest);
    }
  }, [error]);

  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
