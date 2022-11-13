import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../context/UserContext";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout<T = {}> = AppProps & {
  Component: NextPageWithLayout<T>;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}
export default MyApp;
