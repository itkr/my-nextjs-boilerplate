"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";

export const StoreProvider: React.FC = ({ children }) => {
  const store = useRef<AppStore>(makeStore());
  if (!store.current) {
    store.current = makeStore();
  }

  return <Provider store={store.current}>{children}</Provider>;
};
