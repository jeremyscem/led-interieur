import Footer from "./components/Footer";
import FormScript from "./components/FormScript";
import Header from "./components/Header";
import ProductFeatures from "./components/ProductFeatures";
import StepsSection from "./components/StepsSection";
import StickyCTA from "./components/StickyCta";
import TopSection from "./components/TopSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TopSection />
        <StepsSection />
        <StickyCTA />
        <FormScript />
        <ProductFeatures />
      </main>
      <Footer />
    </div>
  );
}
