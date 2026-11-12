import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Data stays "fresh" for 1 min → no refetch on remount / window focus
      staleTime: 60_000,
    },
  },
});
