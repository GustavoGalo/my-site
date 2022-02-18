import type { AppProps } from "next/app";
import Head from "next/head";
import { Star } from "../styles";
import { GlobalStyles } from "../styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Gustavo Galo | WEB Developer</title>
        <link
          rel="icon"
          href="https://styles.redditmedia.com/t5_3lghn1/styles/communityIcon_r0qvuvdcmh661.png?width=256&s=d7dce24fd4fe33687d991c28a903528461f844b4"
          type="image/x-icon"
        />
      </Head>
      <GlobalStyles />
      <Star height={1} width={1} />
      {/* <Star height={2} width={2} /> */}
      {/* <Star height={3} width={3} /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
