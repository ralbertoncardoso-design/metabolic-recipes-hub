import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components
const EmotionalConnection = lazy(() => import("@/components/EmotionalConnection"));
const ProductDescription = lazy(() => import("@/components/ProductDescription"));
const Bonuses = lazy(() => import("@/components/Bonuses"));
const Offer = lazy(() => import("@/components/Offer"));
const Guarantee = lazy(() => import("@/components/Guarantee"));
const FAQ = lazy(() => import("@/components/FAQ"));
const FinalCTA = lazy(() => import("@/components/FinalCTA"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Suspense fallback={<div className="h-16" />}>
        <EmotionalConnection />
        <ProductDescription />
        <Bonuses />
        <Offer />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </Suspense>
    </div>
  );
};

export default Index;
