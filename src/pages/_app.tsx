import type { AppProps } from "next/app";
import { Arimo, Inter } from "@next/font/google";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import "../styles/globals.css";

const arimo = Arimo({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-arimo",
});

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main className={`${arimo.variable} ${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}
