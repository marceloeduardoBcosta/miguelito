import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";
import { highlight } from "@/data/menuData";

const MenuHero = () => {
  return (
    <section className="relative w-full overflow-hidden pb-8">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Espetinhos na brasa"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
      </div>

      <div className="relative flex flex-col items-center justify-center px-4 pb-6 pt-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-6"
        >
          {/* Outer glow */}
          <div className="absolute -inset-6 rounded-full bg-primary/15 blur-3xl animate-pulse" />
          {/* Gold ring */}
          <div className="absolute -inset-3 rounded-full border border-primary/25" />
          <div className="absolute -inset-1.5 rounded-full border-2 border-primary/40" />
          <div className="overflow-hidden rounded-full border-4 border-primary/50 shadow-[0_0_60px_hsl(36,80%,50%,0.3)]">
            <img
              src={logo}
              alt="Miguelito Espetos"
              className="h-48 w-48 object-cover sm:h-56 sm:w-56"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="rounded-2xl bg-card/80 px-8 py-4 backdrop-blur-md border border-primary/20 shadow-warm"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-1">
            ⭐ Destaque do dia
          </p>
          <p className="text-base font-medium text-foreground">{highlight.title}</p>
          <p className="text-3xl font-extrabold text-gradient-warm mt-1" style={{ fontFamily: 'var(--font-display)' }}>
            R$ {highlight.price.toFixed(2).replace(".", ",")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHero;
