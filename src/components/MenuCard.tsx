import type { Menu } from "../data/menus";

type MenuCardProps = {
  menu: Menu;
};

export default function MenuCard({ menu }: MenuCardProps) {
  return (
    <article className="fine-border flex h-full flex-col bg-ivory/70 p-5 sm:p-8">
      <div className="border-b border-charcoal/10 pb-5 sm:pb-6">
        <h3 className="font-serif text-2xl font-semibold text-charcoal sm:text-3xl">{menu.name}</h3>
        <p className="mt-2 text-sm leading-6 text-warmgray sm:mt-3">{menu.tone}</p>
      </div>
      <div className="flex flex-1 flex-col gap-5 pt-5 sm:gap-6 sm:pt-6">
        {menu.courses.map((course) => (
          <div key={`${menu.name}-${course.label}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              {course.label}
            </p>
            <h4 className="mt-2 text-base font-semibold text-charcoal">{course.name}</h4>
            <p className="mt-2 text-sm leading-5 text-warmgray sm:leading-6">{course.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
