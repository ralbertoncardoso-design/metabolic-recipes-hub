import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById('checkout');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-warm py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/f49b4e37-d96e-42de-8de0-643b6695a151.png" 
            alt="Capa do Ebook Receitas FIT" 
            width="320"
            height="400"
            className="mx-auto w-64 md:w-80 rounded-lg shadow-warm hover:shadow-glow transition-shadow duration-300"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-primary">🔥 Descubra Como Acelerar Seu Metabolismo</span>
          <br />
          <span className="text-foreground">e Secar a Barriga Naturalmente!</span>
        </h1>
        
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-muted-foreground mb-4 max-w-4xl mx-auto">
          Transforme sua alimentação em um verdadeiro queimador de gordura — sem dietas malucas ou sacrifícios impossíveis.
        </h2>
        
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Um guia prático com receitas rápidas, deliciosas e acessíveis que ativam o metabolismo, 
          aumentam a energia e ajudam você a conquistar a barriga dos seus sonhos.
        </p>
        
        <a 
          href="https://pay.cakto.com.br/zzmojm5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button 
            variant="fire"
            size="lg"
            className="text-sm md:text-base lg:text-lg px-4 md:px-6 lg:px-8 py-3 md:py-4 lg:py-6 h-auto rounded-xl w-full max-w-sm mx-auto md:max-w-md lg:w-auto whitespace-normal leading-relaxed"
          >
            Quero minha barriga mais sequinha agora!
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;