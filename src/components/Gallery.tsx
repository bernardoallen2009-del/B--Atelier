import { useState } from "react";
import { galleryImages, type GalleryImage } from "../data/gallery";
import SectionTitle from "./SectionTitle";

const galleryAspectRatios = [
  "aspect-square sm:aspect-[4/5]",
  "aspect-square",
  "aspect-square",
  "aspect-square sm:aspect-[5/4]",
  "aspect-square sm:aspect-[5/4]",
  "aspect-square",
  "aspect-square sm:aspect-[4/5]",
  "aspect-square sm:aspect-[5/4]",
  "aspect-square sm:aspect-[4/5]",
  "aspect-square",
  "aspect-square",
  "aspect-square sm:aspect-[4/5]",
  "aspect-square",
  "aspect-square sm:aspect-[4/5]",
  "aspect-square"
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section id="gallery" className="anchor-section section-spacing bg-white/35">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Gallery"
          title="Gallery"
          subtitle="Food, details and moments from previous dinners."
        />

        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.title}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`group relative overflow-hidden rounded-sm bg-linen text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay/50 ${galleryAspectRatios[index] ?? "aspect-square"}`}
              aria-label={`Open image: ${image.title}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/55 to-transparent p-3 pt-10 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:p-4 sm:pt-16 sm:text-sm">
                {image.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-ivory px-4 py-2 text-sm font-semibold text-charcoal transition hover:bg-linen focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setSelectedImage(null)}
          >
            Close
          </button>
          <figure className="max-h-[88vh] max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[78vh] w-full rounded-sm object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-ivory">{selectedImage.title}</figcaption>
          </figure>
        </div>
      ) : null}
    </section>
  );
}
