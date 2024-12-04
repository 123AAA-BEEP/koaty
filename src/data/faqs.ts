export const generalFAQs = [
  {
    question: "How long does a typical painting project take?",
    answer: "Project duration varies based on size and complexity. A typical interior room takes 1-2 days, while a whole house exterior might take 3-5 days. We'll provide a detailed timeline during consultation."
  },
  {
    question: "What type of paint do you use?",
    answer: "We use premium paints from trusted brands like Benjamin Moore, Sherwin-Williams, and ROMABIO. We select the best paint type based on your specific needs and surface requirements."
  },
  {
    question: "Do you offer a warranty?",
    answer: "Yes, we provide a 2-year warranty on all our work. This covers any defects in workmanship or materials under normal wear and tear conditions."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed and insured. We carry both liability insurance and workers' compensation to protect your property and our team."
  }
];

export function getServiceFAQs(service: string, city: string) {
  const baseFAQs = [
    {
      question: `How much does ${service} cost in ${city}?`,
      answer: `${service} costs in ${city} vary based on project size, surface condition, and materials chosen. We provide free, detailed quotes after an initial consultation.`
    },
    {
      question: `How long does ${service} take in ${city}?`,
      answer: `The duration of ${service} projects in ${city} depends on the scope of work. We'll provide a detailed timeline during our consultation.`
    },
    {
      question: `Why choose Koat Painters for ${service} in ${city}?`,
      answer: `We're a trusted ${city} painting contractor with years of experience, fully licensed and insured. We use premium materials, offer competitive pricing, and guarantee customer satisfaction.`
    }
  ];

  // Add service-specific FAQs
  switch (service.toLowerCase()) {
    case 'interior-painting':
      return [...baseFAQs, {
        question: "Do I need to move my furniture?",
        answer: "We'll help move and protect your furniture. Large pieces are covered or moved to the center of the room, while smaller items should be removed."
      }, {
        question: "What type of paint finish should I choose?",
        answer: "We recommend eggshell or satin for living areas, semi-gloss for kitchens and bathrooms, and flat for ceilings. We'll help you choose during consultation."
      }];

    case 'exterior-painting':
      return [...baseFAQs, {
        question: "What weather conditions are needed for exterior painting?",
        answer: "Ideal conditions are dry days with temperatures between 10-30°C. We carefully plan around weather forecasts to ensure optimal results."
      }, {
        question: "How do you prepare exterior surfaces?",
        answer: "We power wash, scrape loose paint, repair damaged areas, prime bare spots, and caulk gaps before painting to ensure long-lasting results."
      }];

    case 'cabinet-painting':
      return [...baseFAQs, {
        question: "Can all cabinet types be painted?",
        answer: "Most cabinet types can be painted, including wood, laminate, and MDF. We'll assess your cabinets and recommend the best approach."
      }, {
        question: "How long until I can use my kitchen?",
        answer: "While the full cure time is 7-14 days, you can typically use your kitchen within 24-48 hours after completion."
      }];

    case 'limewash':
      return [...baseFAQs, {
        question: "What surfaces can be limewashed?",
        answer: "Limewash works best on porous surfaces like brick, stone, and stucco. We'll assess your surface to ensure compatibility."
      }, {
        question: "How long does limewash last?",
        answer: "When properly applied, limewash can last 15-20 years on exterior surfaces and even longer on interior surfaces."
      }];

    default:
      return baseFAQs;
  }
} 