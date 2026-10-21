import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import styles from "./style.module.scss";
import { opacity } from "../../anim";

interface IndexProps {
  src?: string;
  isActive: boolean;
}

const Index: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive && src ? "open" : "closed"}
      className={styles.imageContainer}
    >
      <div className="relative w-[440px] h-[300px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-neutral-900">
        {src && (
          <Image
            src={src}
            alt="Navigation preview"
            fill
            sizes="440px"
            className="object-cover object-top transition-transform duration-500 hover:scale-105"
            priority
          />
        )}
      </div>
    </motion.div>
  );
};

export default Index;
