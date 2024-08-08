import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Jinan Truck - layanan sparepart truck, contract support, VHS
          sparepart, dan unit purchase
        </title>
        <meta
          name="google-site-verification"
          content="2mt9bPSXViwwrma9CFD92Y-YMIsC5g8S-9v5xCnzLRE"
        />
        <meta
          name="description"
          content="Layanan sparepart truck, contract support, VHS sparepart, unit purchase. Produk berkualitas dari SINOTRUK HOWO, SITRAK HOWO, WEICHAI, SANY"
        />
        <meta property="og:title" content="Jinan Truck" />
        <meta
          property="og:description"
          content="Layanan sparepart truck, contract support, VHS sparepart, unit purchase. Produk berkualitas dari SINOTRUK HOWO, SITRAK HOWO, WEICHAI, SANY"
        />
        <meta
          property="og:image"
          content="https://jinan-truck-demo.vercel.app/opengraph-image.jpg"
        />
        <meta property="og:url" content="https://jinan-truck-demo.vercel.app" />
        <meta
          name="google-site-verification"
          content="2mt9bPSXViwwrma9CFD92Y-YMIsC5g8S-9v5xCnzLRE"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
