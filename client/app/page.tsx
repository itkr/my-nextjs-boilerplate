"use client";
import React from "react";

import {
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Container,
  Heading,
} from '@chakra-ui/react';

export default function PageComponent() {
  return (
    <Container backgroundColor="gray.100" padding="4" borderRadius="md">
      <Heading>Page title</Heading>
      <Text>Page content</Text>
      <UnorderedList>
        <ListItem>
          <Link href="/spam">Spam</Link>
        </ListItem>
        <ListItem>
          <Link href="/list">List</Link>
        </ListItem>
      </UnorderedList>
    </Container>
  );
}
