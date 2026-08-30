import arrozDoceBrule from "../assets/images/arroz-doce-brule.jpg";
import chorizoCroquettes from "../assets/images/chorizo-croquettes.jpg";
import corianderDuckRisotto from "../assets/images/coriander-duck-risotto.jpg";
import focacciaRicotta from "../assets/images/focaccia-ricotta.jpg";
import freshTagliatelle from "../assets/images/fresh-tagliatelle.jpg";
import gazpacho from "../assets/images/gazpacho.jpg";
import mushroomRisottoHerbs from "../assets/images/mushroom-risotto-herbs.jpg";
import risottoPrawns from "../assets/images/risotto-prawns.jpg";
import saffronDuckRisotto from "../assets/images/saffron-duck-risotto.jpg";
import salmonTartare from "../assets/images/salmon-tartare.jpg";
import strawberriesDessert from "../assets/images/strawberries-dessert.jpg";
import tagliatelleRagu from "../assets/images/tagliatelle-ragu.jpg";
import tarteTatin from "../assets/images/tarte-tatin.jpg";
import tarteTatinIceCream from "../assets/images/tarte-tatin-ice-cream.jpg";
import type { Lang } from "../i18n/types";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

export const galleryImages: Record<Lang, GalleryImage[]> = {
  en: [
    // Starters
    {
      src: focacciaRicotta,
      alt: "Homemade focaccia with whipped ricotta and honey",
      title: "Focaccia, Ricotta & Honey"
    },
    {
      src: chorizoCroquettes,
      alt: "Crisp chorizo and beef croquettes on a dark serving board",
      title: "Chorizo & Beef Croquettes"
    },
    {
      src: salmonTartare,
      alt: "Salmon tartare with avocado and coriander on a white plate",
      title: "Salmon Tartare"
    },
    {
      src: gazpacho,
      alt: "Chilled gazpacho garnished with basil and homemade croutons in a white bowl",
      title: "Chilled Gazpacho"
    },
    // Mains
    {
      src: risottoPrawns,
      alt: "Pumpkin risotto with prawns served on a ceramic plate",
      title: "Pumpkin Risotto & Prawns"
    },
    {
      src: saffronDuckRisotto,
      alt: "Saffron risotto with duck magret and toasted almonds",
      title: "Duck Magret & Saffron Risotto"
    },
    {
      src: tagliatelleRagu,
      alt: "Fresh tagliatelle with slow cooked meat ragù",
      title: "Tagliatelle with Ragù"
    },
    {
      src: freshTagliatelle,
      alt: "Fresh handmade tagliatelle cut on a dark work surface",
      title: "Fresh Tagliatelle"
    },
    {
      src: corianderDuckRisotto,
      alt: "Coriander risotto with duck magret and orange gel",
      title: "Coriander Risotto & Duck Magret"
    },
    {
      src: mushroomRisottoHerbs,
      alt: "Wild mushroom risotto finished with fresh herbs",
      title: "Wild Mushroom Risotto"
    },
    // Desserts
    {
      src: strawberriesDessert,
      alt: "Strawberry dessert with vanilla cream and crumble",
      title: "Strawberries, Vanilla & Speculoos"
    },
    {
      src: tarteTatin,
      alt: "Apple tarte tatin with kiwi ice cream",
      title: "Tarte Tatin"
    },
    {
      src: arrozDoceBrule,
      alt: "Portuguese rice pudding with caramelised brûlé top",
      title: "Arroz Doce Brûlé"
    },
    {
      src: tarteTatinIceCream,
      alt: "Apple tarte tatin served with homemade kiwi ice cream",
      title: "Tarte Tatin & Kiwi Ice Cream"
    }
  ],
  pt: [
    // Entradas
    {
      src: focacciaRicotta,
      alt: "Focaccia caseira com ricotta batida e mel",
      title: "Focaccia, Ricotta & Mel"
    },
    {
      src: chorizoCroquettes,
      alt: "Croquetes crocantes de chouriço e vaca numa tábua escura",
      title: "Croquetes de Chouriço & Vaca"
    },
    {
      src: salmonTartare,
      alt: "Tártaro de salmão com abacate e coentros num prato branco",
      title: "Tártaro de Salmão"
    },
    {
      src: gazpacho,
      alt: "Gaspacho fresco decorado com manjericão e crutons caseiros num prato branco",
      title: "Gaspacho Fresco"
    },
    // Pratos principais
    {
      src: risottoPrawns,
      alt: "Risotto de abóbora com camarão servido num prato de cerâmica",
      title: "Risotto de Abóbora & Camarão"
    },
    {
      src: saffronDuckRisotto,
      alt: "Risotto de açafrão com magret de pato e amêndoas tostadas",
      title: "Magret de Pato & Risotto de Açafrão"
    },
    {
      src: tagliatelleRagu,
      alt: "Tagliatelle fresca com ragù de carne cozinhado lentamente",
      title: "Tagliatelle com Ragù"
    },
    {
      src: freshTagliatelle,
      alt: "Tagliatelle fresca feita à mão, cortada numa bancada escura",
      title: "Tagliatelle Fresca"
    },
    {
      src: corianderDuckRisotto,
      alt: "Risotto de coentros com magret de pato e gel de laranja",
      title: "Risotto de Coentros & Magret de Pato"
    },
    {
      src: mushroomRisottoHerbs,
      alt: "Risotto de cogumelos silvestres finalizado com ervas frescas",
      title: "Risotto de Cogumelos Silvestres"
    },
    // Sobremesas
    {
      src: strawberriesDessert,
      alt: "Sobremesa de morango com creme de baunilha e crumble",
      title: "Morangos, Baunilha & Speculoos"
    },
    {
      src: tarteTatin,
      alt: "Tarte tatin de maçã com gelado de kiwi",
      title: "Tarte Tatin"
    },
    {
      src: arrozDoceBrule,
      alt: "Arroz doce português com o topo caramelizado",
      title: "Arroz Doce Brûlé"
    },
    {
      src: tarteTatinIceCream,
      alt: "Tarte tatin de maçã servida com gelado caseiro de kiwi",
      title: "Tarte Tatin & Gelado de Kiwi"
    }
  ]
};
