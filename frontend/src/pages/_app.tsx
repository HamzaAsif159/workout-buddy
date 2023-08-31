import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WorkoutsContextProvider } from "../context/WorkoutContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WorkoutsContextProvider>
        <Component {...pageProps} />;
      </WorkoutsContextProvider>
    </>
  );
}
