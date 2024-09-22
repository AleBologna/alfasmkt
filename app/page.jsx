"use client";
import Header from "./components/Header";
import InitialSection from "./components/InitialSection";
import OurServices from "./components/OurServices";
import ContactUsSection from "./components/ContactUsSection";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <InitialSection />
      <OurServices />
      {/* <AboutUsSection /> */}
      <ContactUsSection />
      <Footer />
    </main>
  );
}
