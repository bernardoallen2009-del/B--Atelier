import arrozDoceBrule from "../assets/images/arroz-doce-brule.jpg";
import chorizoCroquettes from "../assets/images/chorizo-croquettes.jpg";
import corianderDuckRisotto from "../assets/images/coriander-duck-risotto.jpg";
import focacciaRicotta from "../assets/images/focaccia-ricotta.jpg";
import freshTagliatelle from "../assets/images/fresh-tagliatelle.jpg";
import mushroomRisotto from "../assets/images/mushroom-risotto.jpg";
import mushroomRisottoHerbs from "../assets/images/mushroom-risotto-herbs.jpg";
import risottoPrawns from "../assets/images/risotto-prawns.jpg";
import saffronDuckRisotto from "../assets/images/saffron-duck-risotto.jpg";
import salmonTartare from "../assets/images/salmon-tartare.jpg";
import strawberriesDessert from "../assets/images/strawberries-dessert.jpg";
import tagliatelleRagu from "../assets/images/tagliatelle-ragu.jpg";
import tartareService from "../assets/images/tartare-service.jpg";
import tarteTatin from "../assets/images/tarte-tatin.jpg";
import tarteTatinIceCream from "../assets/images/tarte-tatin-ice-cream.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: risottoPrawns,
    alt: "Pumpkin risotto with prawns served on a ceramic plate",
    title: "Pumpkin Risotto & Prawns"
  },
  {
    src: focacciaRicotta,
    alt: "Homemade focaccia with whipped ricotta and honey",
    title: "Focaccia, Ricotta & Honey"
  },
  {
    src: strawberriesDessert,
    alt: "Strawberry dessert with vanilla cream and crumble",
    title: "Strawberries, Vanilla & Speculoos"
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
    src: tarteTatin,
    alt: "Apple tarte tatin with kiwi ice cream",
    title: "Tarte Tatin"
  },
  {
    src: chorizoCroquettes,
    alt: "Crisp chorizo and beef croquettes on a dark serving board",
    title: "Chorizo & Beef Croquettes"
  },
  {
    src: arrozDoceBrule,
    alt: "Portuguese rice pudding with caramelised brûlé top",
    title: "Arroz Doce Brûlé"
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
  {
    src: mushroomRisotto,
    alt: "Mushroom risotto served on a white plate",
    title: "Mushroom Risotto"
  },
  {
    src: salmonTartare,
    alt: "Salmon tartare with avocado and coriander on a white plate",
    title: "Salmon Tartare"
  },
  {
    src: tartareService,
    alt: "Several salmon tartare portions arranged on a dark serving board",
    title: "Tartare Service"
  },
  {
    src: tarteTatinIceCream,
    alt: "Apple tarte tatin served with homemade kiwi ice cream",
    title: "Tarte Tatin & Kiwi Ice Cream"
  }
];
