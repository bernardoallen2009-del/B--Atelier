import type { Lang } from "../i18n/types";

export type Course = {
  label: string;
  name: string;
  description: string;
};

export type Menu = {
  name: string;
  tone: string;
  courses: Course[];
};

export type AdditionalDish = {
  name: string;
  description: string;
};

export const menus: Record<Lang, Menu[]> = {
  en: [
    {
      name: "Bé Signature",
      tone: "Soft, seasonal and carefully plated.",
      courses: [
        {
          label: "Starter",
          name: "Focaccia, Whipped Ricotta & Honey",
          description:
            "Homemade focaccia, fresh ricotta whipped with lemon and olive oil, honey, black pepper and aromatic herbs."
        },
        {
          label: "Main",
          name: "Pumpkin Risotto & Prawns",
          description:
            "Creamy arborio rice, pumpkin purée, sautéed prawns, light prawn foam, toasted pumpkin seeds and lemon-thyme oil."
        },
        {
          label: "Dessert",
          name: "Strawberries, Vanilla & Speculoos",
          description:
            "Marinated strawberries with lemon, vanilla cream, strawberry syrup, speculoos crumble and fresh mint."
        }
      ]
    },
    {
      name: "Italian Comfort",
      tone: "Handmade pasta, slow cooking and familiar warmth.",
      courses: [
        {
          label: "Starter",
          name: "Chorizo & Beef Croquettes",
          description: "Crisp chorizo and beef croquettes, served with a light house sauce."
        },
        {
          label: "Main",
          name: "Wild Mushroom Risotto",
          description: "Creamy arborio rice with sautéed mushrooms, parmesan, butter and fresh herbs."
        },
        {
          label: "Dessert",
          name: "Arroz Doce Brûlé",
          description:
            "Portuguese rice pudding with lemon and cinnamon, finished with a thin layer of caramelised sugar."
        }
      ]
    },
    {
      name: "Atelier Menu",
      tone: "A little more composed, still intimate.",
      courses: [
        {
          label: "Starter",
          name: "Salmon Tartare",
          description:
            "Fresh salmon cut by hand, dressed with citrus, olive oil and herbs, served with crisp toast."
        },
        {
          label: "Main",
          name: "Coriander Risotto, Duck Magret & Orange Gel",
          description:
            "Creamy arborio rice infused with coriander, served with pink duck magret and crisp skin, finished with orange gel."
        },
        {
          label: "Dessert",
          name: "Apple Tarte Tatin & Kiwi Ice Cream",
          description:
            "Caramelised apple on puff pastry, served warm with homemade kiwi ice cream."
        }
      ]
    }
  ],
  pt: [
    {
      name: "Bé Signature",
      tone: "Suave, sazonal e cuidadosamente empratado.",
      courses: [
        {
          label: "Entrada",
          name: "Focaccia, Ricotta Batida & Mel",
          description:
            "Focaccia caseira, ricotta fresca batida com limão e azeite, mel, pimenta preta e ervas aromáticas."
        },
        {
          label: "Prato Principal",
          name: "Risotto de Abóbora & Camarão",
          description:
            "Arroz arbóreo cremoso, puré de abóbora, camarão salteado, espuma leve de camarão, sementes de abóbora tostadas e óleo de limão e tomilho."
        },
        {
          label: "Sobremesa",
          name: "Morangos, Baunilha & Speculoos",
          description:
            "Morangos marinados com limão, creme de baunilha, calda de morango, crumble de speculoos e hortelã fresca."
        }
      ]
    },
    {
      name: "Conforto Italiano",
      tone: "Massa feita à mão, cozinha lenta e um calor familiar.",
      courses: [
        {
          label: "Entrada",
          name: "Croquetes de Chouriço & Vaca",
          description: "Croquetes crocantes de chouriço e vaca, servidos com um molho leve da casa."
        },
        {
          label: "Prato Principal",
          name: "Risotto de Cogumelos Silvestres",
          description: "Arroz arbóreo cremoso com cogumelos salteados, parmesão, manteiga e ervas frescas."
        },
        {
          label: "Sobremesa",
          name: "Arroz Doce Brûlé",
          description:
            "Arroz doce português com limão e canela, finalizado com uma fina camada de açúcar caramelizado."
        }
      ]
    },
    {
      name: "Menu Atelier",
      tone: "Um pouco mais composto, mas ainda íntimo.",
      courses: [
        {
          label: "Entrada",
          name: "Tártaro de Salmão",
          description:
            "Salmão fresco cortado à mão, temperado com citrinos, azeite e ervas, servido com torrada estaladiça."
        },
        {
          label: "Prato Principal",
          name: "Risotto de Coentros, Magret de Pato & Gel de Laranja",
          description:
            "Arroz arbóreo cremoso infundido com coentros, servido com magret de pato rosado e pele estaladiça, finalizado com gel de laranja."
        },
        {
          label: "Sobremesa",
          name: "Tarte Tatin de Maçã & Gelado de Kiwi",
          description:
            "Maçã caramelizada sobre massa folhada, servida quente com gelado caseiro de kiwi."
        }
      ]
    }
  ]
};

export const additionalDishes: Record<Lang, AdditionalDish[]> = {
  en: [
    {
      name: "Fresh Tagliatelle with Ragù",
      description:
        "Handmade egg pasta, cut into tagliatelle and served with a slow-cooked meat ragù, tomato, carrot, wine and aromatic herbs."
    },
    {
      name: "Saffron Risotto, Almonds & Duck Magret",
      description:
        "Creamy arborio rice with saffron, toasted almonds and pink duck magret with golden, crisp skin."
    },
    {
      name: "Chilled Gazpacho",
      description:
        "Chilled tomato soup with cucumber, onion, pepper and basil, finished with homemade croutons."
    }
  ],
  pt: [
    {
      name: "Tagliatelle Fresca com Ragù",
      description:
        "Massa de ovo feita à mão, cortada em tagliatelle e servida com um ragù de carne cozinhado lentamente, tomate, cenoura, vinho e ervas aromáticas."
    },
    {
      name: "Risotto de Açafrão, Amêndoas & Magret de Pato",
      description:
        "Arroz arbóreo cremoso com açafrão, amêndoas tostadas e magret de pato rosado com pele dourada e estaladiça."
    },
    {
      name: "Gaspacho Fresco",
      description:
        "Sopa fria de tomate com pepino, cebola, pimento e manjericão, finalizada com crutons caseiros."
    }
  ]
};
