import { Card } from "@/components/ui/card";

const EmotionalConnection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl md:text-2xl mb-8 text-foreground leading-relaxed">
          Você já tentou várias dietas, se sacrificou cortando alimentos que ama, mas ainda não conquistou o corpo que deseja?
          <br />
          <span className="font-bold text-primary">O problema não é você.</span>
        </p>
        
        <Card className="p-8 mb-8 bg-gradient-warm border-0 shadow-warm">
          <p className="text-lg text-muted-foreground mb-6">
            A chave para queimar gordura está em{" "}
            <span className="font-bold text-primary">acelerar seu metabolismo de forma natural</span>{" "}
            — e é exatamente isso que este ebook vai te ensinar.
          </p>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Card className="p-6 text-center hover:shadow-warm transition-shadow duration-300 will-change-transform">
            <div className="text-3xl mb-3">💪</div>
            <p className="font-semibold text-foreground">Acordar com mais disposição</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-shadow duration-300 will-change-transform">
            <div className="text-3xl mb-3">👗</div>
            <p className="font-semibold text-foreground">Sentir suas roupas ficando mais folgadas</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-warm transition-shadow duration-300 will-change-transform">
            <div className="text-3xl mb-3">✨</div>
            <p className="font-semibold text-foreground">Olhar no espelho e ver a diferença na sua barriga</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmotionalConnection;