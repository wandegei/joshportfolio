import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/256777829813"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-accent shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow duration-300"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={20} className="text-white" />
      <span className="text-white text-sm font-semibold hidden sm:block">WhatsApp</span>
    </motion.a>
  );
}