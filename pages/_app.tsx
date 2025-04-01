import { FavoritesProvider } from "@/context/FavoritesContext";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <Navbar />
      <Component {...pageProps} />
    </FavoritesProvider>
  );
}
