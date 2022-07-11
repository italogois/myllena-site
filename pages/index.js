import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/header";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Myllena Atanazio - Fisioterapeuta</title>
      </Head>
      <Header />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
