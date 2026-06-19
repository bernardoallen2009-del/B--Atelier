import type { Menu } from "../data/menus";

type MenuCardProps = {
  menu: Menu;
};

export default function MenuCard({ menu }: MenuCardProps) {
  return (
    <article className="fine-border flex h-full flex-col bg-ivory/70 p-6 sm:p-8">
      <div className="border-b border-charcoal/10 pb-6">
        <h3 className="font-serif text-3xl font-semibold text-charcoal">{menu.name}</h3>
        <p className="mt-3 text-sm leading-6 text-warmgray">{menu.tone}</p>
      </div>
      <div className="flex flex-1 flex-col gap-6 pt-6">
        {menu.courses.map((course) => (
          <div key={`${menu.name}-${course.label}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-clay">
              {course.label}
            </p>
            <h4 className="mt-2 text-base font-semibold text-charcoal">{course.name}</h4>
            <p className="mt-2 text-sm leading-6 text-warmgray">{course.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
