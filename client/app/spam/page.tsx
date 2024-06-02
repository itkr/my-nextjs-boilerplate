"use client";
import { Suspense } from "react";
import LoadingComponent from "./loading";
import WaitComponent from "./wait";

export default function Page() {
  return (
    <div>
      <h1>This is a page</h1>
      <Suspense fallback={<LoadingComponent />}>
        <WaitComponent />
      </Suspense>
    </div>
  );
}
