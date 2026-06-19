export type Course = {
  label: "Starter" | "Main" | "Dessert";
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

export const menus: Menu[] = [
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
        name: "Fresh Tagliatelle with Ragù",
        description:
          "Handmade egg pasta, cut into tagliatelle and served with a slow-cooked meat ragù, tomato, carrot, wine and aromatic herbs."
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
];

export const additionalDishes: AdditionalDish[] = [
  {
    name: "Wild Mushroom Risotto",
    description: "Creamy arborio rice with sautéed mushrooms, parmesan, butter and fresh herbs."
  },
  {
    name: "Saffron Risotto, Almonds & Duck Magret",
    description:
      "Creamy arborio rice with saffron, toasted almonds and pink duck magret with golden, crisp skin."
  }
];
