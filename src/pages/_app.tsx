import type { AppProps } from "next/app";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main>
        <div className="min-h-screen">
          <Component {...pageProps} />
        </div>
      </main>
    </ApolloProvider>
  );
}
