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
          JinanTruck - layanan professional Spareparts Contract Support, Unit
          Purchase, dan VHS Spareparts Contract
        </title>
        <meta
          name="description"
          content="Jinan Truck Power Indonesia - menyediakan layanan profesional dalam bidang Spareparts Contract Support, Unit Purchase, dan VHS Spareparts Contract"
        />
        <meta property="og:title" content="JinanTruck" />
        <meta
          property="og:description"
          content="Jinan Truck Power Indonesia - menyediakan layanan profesional dalam bidang Spareparts Contract Support, Unit Purchase, dan VHS Spareparts Contract"
        />
        <meta
          property="og:image"
          content="https://jinan-truck-demo.vercel.app/opengraph-image.jpg"
        />
        <meta property="og:url" content="https://jinan-truck-demo.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
