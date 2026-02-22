import { MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/data/menuData";

const WhatsAppButton = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de fazer um pedido 🍢")}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,40%)] shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Pedir pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
    </a>
  );
};

export default WhatsAppButton;
