"use client";

import PropTypes from "prop-types";
import { ChakraProvider } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <title>My App</title>
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
