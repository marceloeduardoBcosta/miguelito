import { useState } from "react";
import { menuCategories } from "@/data/menuData";

const uniqueCategories = menuCategories.reduce((acc, cat) => {
  if (!acc.find(c => c.title === cat.title)) acc.push(cat);
  return acc;
}, [] as typeof menuCategories);

const CategoryNav = () => {
  const [active, setActive] = useState(uniqueCategories[0]?.title);

  const scrollTo = (title: string) => {
    setActive(title);
    const el = document.getElementById(`cat-${title}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-lg gap-2 overflow-x-auto px-4 py-3 no-scrollbar">
        {uniqueCategories.map((cat) => (
          <button
            key={cat.title}
            onClick={() => scrollTo(cat.title)}
            className={`flex-shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${
              active === cat.title
                ? "bg-gradient-warm text-primary-foreground shadow-warm"
                : "border border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {cat.icon} {cat.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
