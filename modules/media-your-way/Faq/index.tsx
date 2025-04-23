import { Accordion } from "@mantine/core";

const faqDigitalMarketer = {
  title: "Foire Aux Questions - Marketing Digital",
  faqs: [
    {
      question: "Qu'est-ce que le marketing digital ?",
      answer:
        "Le marketing digital désigne l'ensemble des techniques de marketing utilisées sur les supports et canaux digitaux pour promouvoir un produit ou un service.",
    },
    {
      question:
        "Pourquoi mon entreprise a-t-elle besoin du marketing digital ?",
      answer:
        "Le marketing digital vous permet d'atteindre plus facilement vos clients, d'améliorer votre visibilité en ligne et d'augmenter vos ventes grâce à des stratégies ciblées.",
    },
    {
      question: "Quels sont les services que vous proposez ?",
      answer:
        "Nous proposons le SEO, la gestion des réseaux sociaux, la publicité en ligne (Google Ads, Facebook Ads), le content marketing et l’email marketing.",
    },
    {
      question: "Combien de temps faut-il pour voir les résultats ?",
      answer:
        "Cela dépend de la stratégie mise en place. Par exemple, le SEO peut prendre 3 à 6 mois, tandis que les publicités payantes donnent souvent des résultats en quelques jours.",
    },
    {
      question: "Avez-vous besoin d’accès à mes comptes ?",
      answer:
        "Oui, pour gérer efficacement vos campagnes et vos canaux, nous aurons besoin d’un accès sécurisé à vos comptes publicitaires et réseaux sociaux.",
    },
    {
      question: "Quel budget faut-il prévoir ?",
      answer:
        "Le budget dépend de vos objectifs, de la concurrence dans votre secteur, et du canal utilisé. Nous pouvons travailler avec différents budgets, à partir de 200€ par mois.",
    },
    {
      question: "Est-ce que vous garantissez des résultats ?",
      answer:
        "Nous ne garantissons pas des résultats spécifiques car cela dépend de nombreux facteurs externes, mais nous nous engageons à optimiser votre retour sur investissement.",
    },
    {
      question: "Comment suivre les performances de mes campagnes ?",
      answer:
        "Nous vous fournissons des rapports réguliers avec des KPIs clairs (clics, impressions, conversions, etc.), et nous faisons des réunions de suivi chaque mois.",
    },
  ],
};

const Faq = () => {
  return (
    <div className="max-w-6xl px-6 py-16 mx-auto md:px-0">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#568ed9] bg-[#edf4fc] rounded-full shadow-sm">
          FAQ
        </span>
        <h2 className="mb-6 text-3xl font-bold text-gray-800 md:text-4xl">
          Toutes les réponses à vos questions les plus fréquentes.
        </h2>
        <div className="w-20 h-1.5 mx-auto mb-8 bg-gradient-to-r from-[#7daae6] to-[#568ed9] rounded-full"></div>
      </div>
      <Accordion variant="contained" defaultValue="customization">
        {faqDigitalMarketer.faqs.map((faq) => (
          <Accordion.Item value={faq.question}>
            <Accordion.Control>{faq.question}</Accordion.Control>
            <Accordion.Panel>{faq.answer}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
