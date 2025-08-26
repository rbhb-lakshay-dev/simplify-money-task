import React from "react";
import { Stack } from "expo-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name="home" options={{ title: "Home" }} />
        <Stack.Screen name="details" options={{ title: "Details" }} />
      </Stack>
    </QueryClientProvider>
  );
}
