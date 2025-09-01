import { Card } from "@/components/ui/card";

const Guarantee = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <Card className="p-8 bg-gradient-warm border-0 shadow-warm">
          <div className="mb-6">
            <img 
              src="/lovable-uploads/7a7e4181-4a73-4573-b4ca-1194e7a36757.png" 
              alt="Garantia 7 Dias" 
              className="mx-auto w-32 h-32 object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary">
            Garantia 7 Dias
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Você tem <span className="font-bold text-foreground">7 dias de garantia incondicional</span>.
            <br />
            Se não gostar do material, basta solicitar o reembolso e devolvemos{" "}
            <span className="font-bold text-primary">100% do seu investimento</span>.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default Guarantee;