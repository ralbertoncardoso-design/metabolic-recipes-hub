import Hero from "@/components/Hero";
import EmotionalConnection from "@/components/EmotionalConnection";
import ProductDescription from "@/components/ProductDescription";
import Bonuses from "@/components/Bonuses";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <EmotionalConnection />
      <ProductDescription />
      <Bonuses />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
