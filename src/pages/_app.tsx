import type { AppProps } from "next/app";
import "../../style/style.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Header from "../components/Header";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
