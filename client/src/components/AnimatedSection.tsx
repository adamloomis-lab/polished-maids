import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationType =
  | "fadeUp"
  | "fadeIn"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "stagger";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: AnimationType;
}

// Soft, premium easing — a gentle settle rather than a linear slide.
const EASE = [0.22, 1, 0.36, 1] as const;

const animations: Record<AnimationType, { initial: any; whileInView: any }> = {
  fadeUp: {
    initial: { opacity: 0, y: 48, filter: "blur(10px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeIn: {
    initial: { opacity: 0, filter: "blur(8px)" },
    whileInView: { opacity: 1, filter: "blur(0px)" },
  },
  slideLeft: {
    initial: { opacity: 0, x: -70, filter: "blur(8px)" },
    whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  slideRight: {
    initial: { opacity: 0, x: 70, filter: "blur(8px)" },
    whileInView: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scale: {
    initial: { opacity: 0, scale: 0.94, filter: "blur(10px)" },
    whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  stagger: {
    initial: { opacity: 0, y: 36, filter: "blur(8px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fadeUp",
}: AnimatedSectionProps) {
  const reduce = useReducedMotion();
  const anim = animations[animation];

  // Respect users who prefer reduced motion — fade only, no movement/blur.
  const initial = reduce ? { opacity: 0 } : anim.initial;
  const whileInView = reduce ? { opacity: 1 } : anim.whileInView;

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-90px" }}
      transition={{
        duration: reduce ? 0.4 : 0.9,
        delay,
        ease: EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerGroup / StaggerItem — wrap a list so children reveal in sequence.
 * Children must be <StaggerItem> elements.
 */
const groupVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

export function StaggerGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      variants={
        reduce
          ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
          : itemVariants
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
