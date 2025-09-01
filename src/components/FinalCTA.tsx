import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById('checkout');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 px-6 bg-gradient-fire text-center">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          🔥 Sua nova vida começa AGORA!
        </h3>
        
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Não deixe mais um dia passar sem cuidar da sua saúde e autoestima. 
          Transforme seu metabolismo e conquiste a barriga dos seus sonhos!
        </p>
        
        <Button 
          onClick={scrollToCheckout}
          variant="secondary"
          size="lg"
          className="text-xl px-12 py-6 h-auto rounded-xl font-bold hover:scale-105 transition-all duration-300"
        >
          Quero minha barriga mais sequinha agora!
        </Button>
        
        <p className="text-white/80 mt-6 text-sm">
          ⏰ Oferta por tempo limitado • 🔒 Pagamento seguro • ✅ Garantia 7 dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;