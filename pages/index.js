import Head from "next/head";
import nftData from "../nft/main.js";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 10000,
    },
  },
});

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Head>
          <title>Test Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Test />
        </main>
      </>
    </QueryClientProvider>
  );
}

function Test() {
  const { status, error, data, isFetching } = useQuery(["data"], nftData);

  function handleClick() {
    for (let i = 0; i < 4; i++) {
      console.log(data[i]);
    }
  }

  return <button onClick={handleClick}>Testing</button>;
}
