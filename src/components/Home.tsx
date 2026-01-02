import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="relative min-h-screen h-full bg-gradient-to-b from-[#1E3AD9] to-black text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="absolute h-full bottom-0 flex left-10 flex-col text-[#FFFFFF]/90 text-2xl font-bold tracking-tighter gap-[30px] infinite-scroll z-50"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {/* Primera copia */}
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            key={`left-1-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            aria-hidden="true"
            key={`left-2-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + (index + 6) * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}
      </motion.div>

      {/* Texto rotado en la esquina inferior derecha */}
      <motion.div
        className="absolute h-full bottom-0 flex right-10 flex-col text-[#FFFFFF]/90 text-2xl font-bold tracking-tighter gap-[30px] infinite-scroll"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        {/* Primera copia */}
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            key={`right-1-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}

        {Array.from({ length: 6 }).map((_, index) => (
          <motion.p
            aria-hidden="true"
            key={`right-2-${index}`}
            className="writing-mode-vertical"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + (index + 6) * 0.1 }}
          >
            Neko Swag
          </motion.p>
        ))}
      </motion.div>

      {/* Contenedor para la imagen y decoraciones */}
      <motion.div
        className="absolute inset-0 pt-10 flex items-end justify-center h-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
      >
        {/* Imagen principal como elemento de referencia */}
        <div className="relative h-full w-fit">
          {/* Decoración superior - se posiciona por debajo de la imagen usando order */}
          <motion.div
            className="absolute top-15 left-0 bg-white/30 w-[300px] h-3/2 z-0 pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          ></motion.div>

          <motion.img
            src="/neko.png"
            alt="neko"
            className="h-full object-cover relative z-20 -bottom-1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          />

          {/* Decoración inferior - se posiciona por debajo de la imagen */}
          <motion.div
            className="absolute bottom-0 right-0 bg-[#F21D2F]/50 w-[300px] h-1/2 z-20 pointer-events-none"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            style={{ transformOrigin: "right" }}
          ></motion.div>
        </div>
      </motion.div>

      {/* Texto con efecto de superposición */}
      <motion.div
        className="w-full relative top-10 z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[19rem] text-white font-bold uppercase tracking-tighter text-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Neko Swag
        </motion.h1>
      </motion.div>
    </motion.div>
  );
}
