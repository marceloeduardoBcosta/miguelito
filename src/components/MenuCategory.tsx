import { motion } from "framer-motion";
import type { MenuCategory as MenuCategoryType } from "@/data/menuData";

interface Props {
  category: MenuCategoryType;
  index: number;
}

const MenuCategory = ({ category, index }: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="mb-8"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-lg">
          {category.icon}
        </span>
        <h2 className="text-lg font-bold uppercase tracking-wider text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
          {category.title}
        </h2>
        <div className="flex-1 border-t border-border/50" />
      </div>

      <div className="space-y-1">
        {category.items.map((item, i) => (
          <div
            key={i}
            className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3 transition-all duration-200 hover:bg-card/80 hover:shadow-card"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {item.name}
              </p>
              {item.note && (
                <p className="mt-0.5 flex items-center gap-1 text-xs text-accent/80">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent/80" />
                  {item.note}
                </p>
              )}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-medium text-muted-foreground">R$</span>
              <span className="text-base font-bold text-primary">
                {item.price.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default MenuCategory;
