import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Em quanto tempo vou ver resultados?",
      answer: "Depende da sua constância, mas já na primeira semana você sentirá mais energia e leveza. Os resultados visuais começam a aparecer entre 2-4 semanas com o uso consistente das receitas."
    },
    {
      question: "Preciso fazer exercícios junto?",
      answer: "Não é obrigatório, mas atividades leves como caminhada potencializam os resultados. As receitas termogênicas já aceleram o metabolismo por si só."
    },
    {
      question: "Como recebo o material?",
      answer: "O ebook e os bônus são enviados imediatamente para o seu e-mail após a confirmação da compra. Você terá acesso instantâneo para começar hoje mesmo."
    },
    {
      question: "Preciso cortar os alimentos que gosto?",
      answer: "Não! O ebook mostra como incluir receitas equilibradas sem restrições radicais. O foco é acelerar o metabolismo, não restringir alimentos."
    },
    {
      question: "As receitas são difíceis de fazer?",
      answer: "Todas as receitas são práticas e simples, pensadas para o dia a dia corrido. A maioria leva menos de 15 minutos para preparar."
    },
    {
      question: "Funciona para homens e mulheres?",
      answer: "Sim! Os ingredientes termogênicos funcionam da mesma forma para homens e mulheres, acelerando o metabolismo naturalmente."
    }
  ];

  return (
    <section className="bg-muted/30 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
          ❓ Perguntas Frequentes
        </h3>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;