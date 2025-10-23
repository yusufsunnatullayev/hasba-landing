import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      type: "spring",
      stiffness: 60,
      damping: 15,
    },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeDownLeft: Variants = {
  hidden: { opacity: 0, x: 50, y: -50 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const fadeUpLeft: Variants = {
  hidden: { opacity: 0, x: 50, y: 50 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const flipX: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  show: {
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};
