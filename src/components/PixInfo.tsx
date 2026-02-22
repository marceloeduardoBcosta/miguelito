import { motion } from "framer-motion";
import { pixInfo } from "@/data/menuData";

const PixInfo = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mx-auto mb-8 max-w-md overflow-hidden rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-warm"
    >
      <div className="bg-gradient-warm px-4 py-2 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
          💰 Pague via Pix
        </p>
      </div>
      <div className="p-5 text-center">
        <p className="text-xl font-bold text-foreground tracking-wide">{pixInfo.phone}</p>
        <p className="mt-1 text-sm text-muted-foreground">{pixInfo.name}</p>
      </div>
    </motion.section>
  );
};

export default PixInfo;
