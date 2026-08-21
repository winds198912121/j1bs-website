import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Message from "@/components/Message";
import Strengths from "@/components/Strengths";
import Services from "@/components/Services";
import GlobalDelivery from "@/components/GlobalDelivery";
import Cases from "@/components/Cases";
import Profile from "@/components/Profile";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Message />
        <Strengths />
        <Services />
        <GlobalDelivery />
        <Cases />
        <Profile />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
