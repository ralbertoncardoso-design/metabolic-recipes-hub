import { Button } from "@/components/ui/button";
import ebookCover from "@/assets/ebook-cover.jpg";

const Hero = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById('checkout');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-warm py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-primary">🔥 Descubra Como Acelerar Seu Metabolismo</span>
          <br />
          <span className="text-foreground">e Secar a Barriga Naturalmente!</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-bold text-muted-foreground mb-4 max-w-4xl mx-auto">
          Transforme sua alimentação em um verdadeiro queimador de gordura — sem dietas malucas ou sacrifícios impossíveis.
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Um guia prático com receitas rápidas, deliciosas e acessíveis que ativam o metabolismo, 
          aumentam a energia e ajudam você a conquistar a barriga dos seus sonhos.
        </p>
        
        <div className="mb-8">
          <img 
            src={ebookCover} 
            alt="Capa do Ebook Receitas Termogênicas" 
            className="mx-auto w-64 md:w-80 rounded-lg shadow-warm hover:shadow-glow transition-all duration-300 hover:scale-105"
          />
        </div>
        
        <Button 
          onClick={scrollToCheckout}
          variant="fire"
          size="lg"
          className="text-lg px-8 py-6 h-auto rounded-xl"
        >
          Quero minha barriga mais sequinha agora!
        </Button>
      </div>
    </section>
  );
};

export default Hero;