import { Card } from "@/components/ui/card";

const ProductDescription = () => {
  return (
    <section className="bg-card py-16 px-6 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12">
          O que você vai encontrar no{" "}
          <span className="text-primary">Ebook Receitas Termogênicas</span>
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-warm transition-shadow duration-300 will-change-transform">
            <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
              ✅ Benefícios
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary">🔥</span>
                Acelere seu metabolismo naturalmente
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🎯</span>
                Queime gordura abdominal sem passar fome
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🍽️</span>
                Receitas práticas e acessíveis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">⚡</span>
                Mais energia e disposição no dia a dia
              </li>
            </ul>
            
            <h4 className="font-bold text-xl mt-8 mb-4 text-primary flex items-center gap-2">
              💡 Por que funciona?
            </h4>
            <p className="text-muted-foreground">
              As receitas usam ingredientes termogênicos que aumentam o gasto calórico do corpo, 
              acelerando a queima de gordura de forma natural e saudável.
            </p>
          </Card>
          
          <Card className="p-8 hover:shadow-warm transition-shadow duration-300 will-change-transform">
            <h4 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
              📖 O que tem no ebook?
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary">🫖</span>
                Chás e bebidas termogênicas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🥗</span>
                Refeições salgadas práticas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">🍰</span>
                Sobremesas saudáveis
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">📅</span>
                Plano de 3 dias para acelerar resultados
              </li>
            </ul>
            
            <h4 className="font-bold text-xl mt-8 mb-4 text-primary flex items-center gap-2">
              👩‍🦰 Para quem é indicado?
            </h4>
            <p className="text-muted-foreground">
              Para quem quer secar a barriga naturalmente, já tentou dietas sem sucesso e busca 
              mais saúde, autoestima e disposição no dia a dia.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;