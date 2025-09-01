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
      
      {/* Load first section immediately */}
      <Suspense fallback={<div className="h-16" />}>
        <EmotionalConnection />
      </Suspense>
      
      {/* Load product info when needed */}
      <Suspense fallback={<div className="h-16" />}>
        <ProductDescription />
      </Suspense>
      
      {/* Load bonuses and offer together */}
      <Suspense fallback={<div className="h-16" />}>
        <Bonuses />
        <Offer />
      </Suspense>
      
      {/* Load final sections */}
      <Suspense fallback={<div className="h-16" />}>
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </Suspense>
    </div>
  );
};

export default Index;
