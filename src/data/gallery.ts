import duckRisotto from "../assets/images/duck-risotto.png";
import focacciaRicotta from "../assets/images/focaccia-ricotta.png";
import risottoPrawns from "../assets/images/risotto-prawns.png";
import strawberryDessert from "../assets/images/strawberry-dessert.png";
import tagliatelleRagu from "../assets/images/tagliatelle-ragu.png";
import tarteTatin from "../assets/images/tarte-tatin.png";

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

// Replace these imports with your own photography when the final Bé Atelier images are ready.
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
    src: strawberryDessert,
    alt: "Strawberry dessert with vanilla cream and crumble",
    title: "Strawberries, Vanilla & Speculoos"
  },
  {
    src: duckRisotto,
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
    title: "Tarte Tatin & Kiwi Ice Cream"
  }
];
