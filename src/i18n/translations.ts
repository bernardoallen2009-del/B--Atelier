import type { Lang } from "./types";

export type Translation = {
  meta: {
    title: string;
  };
  nav: {
    about: string;
    menus: string;
    familyNight: string;
    gallery: string;
    pricing: string;
    book: string;
  };
  hero: {
    location: string;
    title: string;
    subtitle: string;
    description: string;
    bookCta: string;
    menusCta: string;
    imageAlt: string;
    imageCaption: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph: string;
    quote: string;
    points: string[];
  };
  menusSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
    adaptNote: string;
    rawNote: string;
    fromAtelierEyebrow: string;
    fromAtelierTitle: string;
  };
  familyNight: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    paragraph: string;
    quoteNote: string;
    includesEyebrow: string;
    includes: string[];
    stepsEyebrow: string;
    steps: string[];
    disclaimer: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    closeButton: string;
    openImageLabel: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tiers: { guests: string; price: string; note: string }[];
    included: string;
    giftEyebrow: string;
    giftDescription: string;
    notes: string[];
  };
  booking: {
    eyebrow: string;
    title: string;
    subtitle: string;
    instagramCta: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      date: string;
      guests: string;
      location: string;
      menuPreference: string;
      familyNightQuestion: string;
      childrenCount: string;
      childrenAges: string;
      childrenAllergies: string;
      childrenActivities: string;
      childrenRoutine: string;
      allergies: string;
      message: string;
    };
    menuOptions: string[];
    familyNightOptions: string[];
    submit: string;
    mail: {
      subject: string;
      heading: string;
      name: string;
      email: string;
      phone: string;
      date: string;
      guests: string;
      location: string;
      menuPreference: string;
      familyNightSupport: string;
      familyNightDetailsHeading: string;
      childrenCount: string;
      childrenAges: string;
      childrenAllergies: string;
      childrenActivities: string;
      childrenRoutine: string;
      allergiesHeading: string;
      messageHeading: string;
      notShared: string;
      noneShared: string;
      noExtraMessage: string;
    };
  };
  footer: {
    tagline: string;
    location: string;
    linkInstagram: string;
    linkEmail: string;
    linkMenus: string;
    linkBook: string;
    copyright: string;
  };
};

export const translations: Record<Lang, Translation> = {
  en: {
    meta: {
      title: "Bé Atelier | Private Dining at Home in Lisbon"
    },
    nav: {
      about: "About",
      menus: "Menus",
      familyNight: "Family Night",
      gallery: "Gallery",
      pricing: "Pricing",
      book: "Book"
    },
    hero: {
      location: "Lisbon | 4-14 guests",
      title: "Bé Atelier",
      subtitle: "Private dining at home",
      description:
        "Intimate dinners, handmade food and careful plating - brought to your table at home.",
      bookCta: "Book a dinner",
      menusCta: "View menus",
      imageAlt: "Coriander risotto with duck magret and orange gel",
      imageCaption: "Handmade menus, quiet details and a restaurant-style rhythm at home."
    },
    about: {
      eyebrow: "About",
      title: "A restaurant-style experience, at home.",
      paragraph:
        "Bé Atelier creates private dinners for small groups, combining handmade food, thoughtful menus and careful presentation. Each dinner is designed to feel personal, intimate and memorable - without leaving home.",
      quote: "Not catering. A private dining experience.",
      points: ["Handmade menus", "Careful plating", "Intimate dinners for 4-14 guests"]
    },
    menusSection: {
      eyebrow: "Menus",
      title: "Menus",
      subtitle: "Choose one of the launch menus or request a tailored experience.",
      adaptNote: "Menus may be adapted depending on seasonality, allergies and dietary preferences.",
      rawNote: "Raw dishes are available only when ingredient quality and service conditions allow it.",
      fromAtelierEyebrow: "From the atelier",
      fromAtelierTitle: "Other dishes from the atelier"
    },
    familyNight: {
      eyebrow: "Family support",
      title: "Family Night",
      subtitle: "A restaurant-style dinner at home, while your children are looked after nearby.",
      cta: "Ask about Family Night",
      paragraph:
        "Created for young parents who want to enjoy a special dinner without leaving home. While Bé Atelier prepares and serves the meal, an additional team member can stay in a nearby room with the children, offering calm supervision and simple activities, always with the parents at home and available.",
      quoteNote: "Family support counts as one additional guest in the final quote.",
      includesEyebrow: "Includes",
      includes: [
        "Calm activities in a nearby room",
        "Parents always at home and available",
        "Ideal for young families",
        "Available as an add-on to private dinners",
        "Priced as one additional guest"
      ],
      stepsEyebrow: "How it works",
      steps: [
        "Book your private dinner",
        "Tell us the number and ages of the children",
        "We bring one additional team member for family support",
        "Adults enjoy dinner while children are accompanied nearby"
      ],
      disclaimer:
        "Family support is always provided inside the home, with parents present and available. It does not include medical care, bathing, leaving the house with children, or care for sick children."
    },
    gallery: {
      eyebrow: "Gallery",
      title: "Gallery",
      subtitle: "Food, details and moments from previous dinners.",
      closeButton: "Close",
      openImageLabel: "Open image"
    },
    pricing: {
      eyebrow: "Launch pricing",
      title: "Pricing",
      subtitle: "Launch pricing for private dinners.",
      tiers: [
        { guests: "4-8 guests", price: "EUR 40", note: "per person" },
        { guests: "9-14 guests", price: "EUR 35", note: "per person" }
      ],
      included:
        "Each dinner includes a three-course menu, preparation, finishing, careful plating, a personalised digital menu and a small jar of homemade Bé Granola as a thank-you gift.",
      giftEyebrow: "Included gift - Bé Granola",
      giftDescription:
        "A small jar of homemade granola with oats, nuts, honey and warm spices, prepared as a thank-you gift for the next morning.",
      notes: [
        "Drinks, tableware rental and special premium ingredients are not included unless agreed in advance.",
        "Family Night support is charged as one additional guest in the final quote.",
        "Final price may vary for highly customised menus or locations outside Lisbon."
      ]
    },
    booking: {
      eyebrow: "Book",
      title: "Book a private dinner",
      subtitle: "Tell us a little about your dinner and we'll get back to you.",
      instagramCta: "Contact on Instagram",
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone / WhatsApp",
        date: "Preferred date",
        guests: "Number of guests",
        location: "Location",
        menuPreference: "Menu preference",
        familyNightQuestion: "Would you like to add Family Night support?",
        childrenCount: "Number of children",
        childrenAges: "Ages of children",
        childrenAllergies: "Any allergies or important information?",
        childrenActivities: "Preferred activities / screen time allowed?",
        childrenRoutine: "Bedtime routine or special notes?",
        allergies: "Allergies or dietary restrictions",
        message: "Message"
      },
      menuOptions: ["Bé Signature", "Italian Comfort", "Atelier Menu", "Custom / Not sure yet"],
      familyNightOptions: ["No", "Yes, family support for children"],
      submit: "Send request",
      mail: {
        subject: "Private dinner request - Bé Atelier",
        heading: "New private dinner request",
        name: "Name",
        email: "Email",
        phone: "Phone / WhatsApp",
        date: "Preferred date",
        guests: "Number of guests",
        location: "Location",
        menuPreference: "Menu preference",
        familyNightSupport: "Family Night support",
        familyNightDetailsHeading: "Family Night details:",
        childrenCount: "Number of children",
        childrenAges: "Ages of children",
        childrenAllergies: "Allergies or important information",
        childrenActivities: "Preferred activities / screen time allowed",
        childrenRoutine: "Bedtime routine or special notes",
        allergiesHeading: "Allergies or dietary restrictions:",
        messageHeading: "Message:",
        notShared: "Not shared",
        noneShared: "None shared",
        noExtraMessage: "No extra message"
      }
    },
    footer: {
      tagline: "Private dining at home",
      location: "Lisbon, Portugal",
      linkInstagram: "Instagram",
      linkEmail: "Email",
      linkMenus: "Menus",
      linkBook: "Book",
      copyright: "© 2026 Bé Atelier. All rights reserved."
    }
  },
  pt: {
    meta: {
      title: "Bé Atelier | Jantares Privados em Casa, em Lisboa"
    },
    nav: {
      about: "Sobre",
      menus: "Menus",
      familyNight: "Noite em Família",
      gallery: "Galeria",
      pricing: "Preços",
      book: "Reservar"
    },
    hero: {
      location: "Lisboa | 4 a 14 convidados",
      title: "Bé Atelier",
      subtitle: "Jantares privados em casa",
      description:
        "Jantares íntimos, comida feita à mão e um empratamento cuidado - à sua mesa, em casa.",
      bookCta: "Reservar um jantar",
      menusCta: "Ver menus",
      imageAlt: "Risotto de coentros com magret de pato e gel de laranja",
      imageCaption: "Menus feitos à mão, detalhes discretos e um ritmo de restaurante em casa."
    },
    about: {
      eyebrow: "Sobre",
      title: "Uma experiência de restaurante, em casa.",
      paragraph:
        "A Bé Atelier cria jantares privados para grupos pequenos, combinando comida feita à mão, menus cuidados e uma apresentação cuidada. Cada jantar é pensado para ser pessoal, íntimo e memorável - sem sair de casa.",
      quote: "Não é catering. É uma experiência de jantar privado.",
      points: ["Menus feitos à mão", "Empratamento cuidado", "Jantares íntimos para 4 a 14 convidados"]
    },
    menusSection: {
      eyebrow: "Menus",
      title: "Menus",
      subtitle: "Escolha um dos menus de lançamento ou peça uma experiência à medida.",
      adaptNote: "Os menus podem ser adaptados consoante a sazonalidade, alergias e preferências alimentares.",
      rawNote: "Os pratos crus estão disponíveis apenas quando a qualidade dos ingredientes e as condições de serviço o permitem.",
      fromAtelierEyebrow: "Do atelier",
      fromAtelierTitle: "Outros pratos do atelier"
    },
    familyNight: {
      eyebrow: "Apoio à família",
      title: "Noite em Família",
      subtitle: "Um jantar com ritmo de restaurante em casa, enquanto os seus filhos são acompanhados por perto.",
      cta: "Perguntar sobre a Noite em Família",
      paragraph:
        "Pensada para pais jovens que querem desfrutar de um jantar especial sem sair de casa. Enquanto a Bé Atelier prepara e serve a refeição, um elemento adicional da equipa pode ficar numa divisão próxima com as crianças, oferecendo supervisão tranquila e atividades simples, sempre com os pais em casa e disponíveis.",
      quoteNote: "O apoio à família conta como um convidado adicional no orçamento final.",
      includesEyebrow: "Inclui",
      includes: [
        "Atividades tranquilas numa divisão próxima",
        "Pais sempre em casa e disponíveis",
        "Ideal para famílias jovens",
        "Disponível como extra aos jantares privados",
        "Cobrado como um convidado adicional"
      ],
      stepsEyebrow: "Como funciona",
      steps: [
        "Reserve o seu jantar privado",
        "Diga-nos o número e as idades das crianças",
        "Trazemos um elemento adicional da equipa para o apoio à família",
        "Os adultos desfrutam do jantar enquanto as crianças são acompanhadas por perto"
      ],
      disclaimer:
        "O apoio à família é sempre prestado dentro de casa, com os pais presentes e disponíveis. Não inclui cuidados médicos, banho, sair de casa com as crianças, ou cuidar de crianças doentes."
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Galeria",
      subtitle: "Comida, detalhes e momentos de jantares anteriores.",
      closeButton: "Fechar",
      openImageLabel: "Abrir imagem"
    },
    pricing: {
      eyebrow: "Preços de lançamento",
      title: "Preços",
      subtitle: "Preços de lançamento para jantares privados.",
      tiers: [
        { guests: "4 a 8 convidados", price: "40 EUR", note: "por pessoa" },
        { guests: "9 a 14 convidados", price: "35 EUR", note: "por pessoa" }
      ],
      included:
        "Cada jantar inclui um menu de três pratos, preparação, finalização, empratamento cuidado, um menu digital personalizado e um pequeno frasco de Bé Granola caseira como prenda de agradecimento.",
      giftEyebrow: "Prenda incluída - Bé Granola",
      giftDescription:
        "Um pequeno frasco de granola caseira com aveia, frutos secos, mel e especiarias quentes, preparado como prenda de agradecimento para a manhã seguinte.",
      notes: [
        "Bebidas, aluguer de loiça e ingredientes premium especiais não estão incluídos, salvo acordo prévio.",
        "O apoio da Noite em Família é cobrado como um convidado adicional no orçamento final.",
        "O preço final pode variar para menus muito personalizados ou localizações fora de Lisboa."
      ]
    },
    booking: {
      eyebrow: "Reservar",
      title: "Reserve um jantar privado",
      subtitle: "Conte-nos um pouco sobre o seu jantar e entraremos em contacto.",
      instagramCta: "Contactar pelo Instagram",
      fields: {
        name: "Nome",
        email: "Email",
        phone: "Telefone / WhatsApp",
        date: "Data preferida",
        guests: "Número de convidados",
        location: "Localização",
        menuPreference: "Preferência de menu",
        familyNightQuestion: "Deseja adicionar o apoio da Noite em Família?",
        childrenCount: "Número de crianças",
        childrenAges: "Idades das crianças",
        childrenAllergies: "Alguma alergia ou informação importante?",
        childrenActivities: "Atividades preferidas / tempo de ecrã permitido?",
        childrenRoutine: "Rotina de deitar ou notas especiais?",
        allergies: "Alergias ou restrições alimentares",
        message: "Mensagem"
      },
      menuOptions: ["Bé Signature", "Conforto Italiano", "Menu Atelier", "Personalizado / Ainda não sei"],
      familyNightOptions: ["Não", "Sim, apoio à família para crianças"],
      submit: "Enviar pedido",
      mail: {
        subject: "Pedido de jantar privado - Bé Atelier",
        heading: "Novo pedido de jantar privado",
        name: "Nome",
        email: "Email",
        phone: "Telefone / WhatsApp",
        date: "Data preferida",
        guests: "Número de convidados",
        location: "Localização",
        menuPreference: "Preferência de menu",
        familyNightSupport: "Apoio da Noite em Família",
        familyNightDetailsHeading: "Detalhes da Noite em Família:",
        childrenCount: "Número de crianças",
        childrenAges: "Idades das crianças",
        childrenAllergies: "Alergias ou informação importante",
        childrenActivities: "Atividades preferidas / tempo de ecrã permitido",
        childrenRoutine: "Rotina de deitar ou notas especiais",
        allergiesHeading: "Alergias ou restrições alimentares:",
        messageHeading: "Mensagem:",
        notShared: "Não indicado",
        noneShared: "Nenhuma partilhada",
        noExtraMessage: "Sem mensagem adicional"
      }
    },
    footer: {
      tagline: "Jantares privados em casa",
      location: "Lisboa, Portugal",
      linkInstagram: "Instagram",
      linkEmail: "E-mail",
      linkMenus: "Menus",
      linkBook: "Reservar",
      copyright: "© 2026 Bé Atelier. Todos os direitos reservados."
    }
  }
};
