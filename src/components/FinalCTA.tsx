import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToCheckout = () => {
    requestAnimationFrame(() => {
      const element = document.getElementById('checkout');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
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
        
        <a 
          href="https://pay.cakto.com.br/zzmojm5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            variant="secondary"
            size="lg"
            className="text-sm md:text-base lg:text-xl px-4 md:px-6 lg:px-12 py-3 md:py-4 lg:py-6 h-auto rounded-xl font-bold hover:scale-105 transition-all duration-300 w-full max-w-sm mx-auto md:max-w-md lg:w-auto whitespace-normal leading-relaxed"
          >
            Quero minha barriga mais sequinha agora!
          </Button>
        </a>
        
        <p className="text-white/80 mt-6 text-sm">
          ⏰ Oferta por tempo limitado • 🔒 Pagamento seguro • ✅ Garantia 7 dias
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;