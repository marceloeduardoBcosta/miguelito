import MenuHero from "@/components/MenuHero";
import CategoryNav from "@/components/CategoryNav";
import MenuCategory from "@/components/MenuCategory";
import PixInfo from "@/components/PixInfo";
import WhatsAppButton from "@/components/WhatsAppButton";
import { menuCategories } from "@/data/menuData";

const Index = () => {
  const grouped: { title: string; categories: typeof menuCategories }[] = [];
  menuCategories.forEach((cat) => {
    const last = grouped[grouped.length - 1];
    if (last && last.title === cat.title) {
      last.categories.push(cat);
    } else {
      grouped.push({ title: cat.title, categories: [cat] });
    }
  });

  let catIndex = 0;

  return (
    <div className="min-h-screen bg-background">
      <MenuHero />
      <CategoryNav />

      <main className="mx-auto max-w-lg px-4 py-8">
        {grouped.map((group) => (
          <div key={group.title} id={`cat-${group.title}`} className="scroll-mt-16">
            {group.categories.map((cat, i) => {
              const idx = catIndex++;
              return <MenuCategory key={`${cat.title}-${i}`} category={cat} index={idx} />;
            })}
          </div>
        ))}

        <PixInfo />
      </main>

      <footer className="border-t border-border/30 py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2026 <span className="font-semibold text-primary">Miguelito Espetos</span>. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
  Desenvolvido por{" "}
  <a
    href="https://startti.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-primary"
  >
    Start Soluções em Ti
  </a>{" "}
  - (62)98196-4849.
</p>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
