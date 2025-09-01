import { Card } from "@/components/ui/card";

const Bonuses = () => {
  return (
    <section className="py-16 px-6 bg-gradient-warm">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
          🎁 Bônus Exclusivos <span className="text-primary">(Grátis!)</span>
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-4">📋</div>
            <h4 className="font-bold text-lg mb-2 text-primary">Bônus #1</h4>
            <p className="text-sm text-muted-foreground">Checklist Barriga Chapada em Casa</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-4">🫖</div>
            <h4 className="font-bold text-lg mb-2 text-primary">Bônus #2</h4>
            <p className="text-sm text-muted-foreground">Guia de Chás Caseiros para Acelerar o Metabolismo</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-4xl mb-4">🥤</div>
            <h4 className="font-bold text-lg mb-2 text-primary">Bônus #3</h4>
            <p className="text-sm text-muted-foreground">Guia Definitivo para Acelerar Seu Metabolismo Bebendo</p>
          </Card>
        </div>
        
        <Card className="p-6 text-center bg-card border-primary border-2">
          <p className="text-lg text-muted-foreground">
            Esses bônus juntos poderiam custar mais de{" "}
            <span className="font-bold text-foreground">R$ 97,00</span>, mas hoje são{" "}
            <span className="font-bold text-primary text-xl">seus de graça!</span>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Bonuses;