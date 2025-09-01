import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Offer = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById('checkout');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-card py-16 px-6 text-center shadow-sm">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-foreground">
          🔥 Oferta Especial
        </h3>
        
        <Card className="p-8 mb-8 bg-gradient-warm border-0 shadow-warm">
          <div className="mb-6">
            <p className="text-lg mb-2 text-muted-foreground">De</p>
            <span className="line-through text-2xl text-muted-foreground mr-4">R$ 97,00</span>
            <span className="text-4xl md:text-5xl font-extrabold text-primary">R$ 47,00</span>
          </div>
          
          <p className="text-muted-foreground mb-6 text-lg">
            ⏰ Oferta válida somente por tempo limitado!
          </p>
          
          <Button 
            id="checkout"
            onClick={scrollToCheckout}
            variant="fire"
            size="lg"
            className="text-xl px-10 py-6 h-auto rounded-xl w-full md:w-auto"
          >
            Quero garantir meu ebook agora!
          </Button>
        </Card>
        
        <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
          <span>🔒 Compra 100% Segura</span>
          <span>•</span>
          <span>📱 Acesso Imediato</span>
          <span>•</span>
          <span>✅ Garantia 7 Dias</span>
        </div>
      </div>
    </section>
  );
};

export default Offer;