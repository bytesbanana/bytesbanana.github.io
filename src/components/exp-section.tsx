import { motion } from "framer-motion";
import { title } from "./primitives";
import { cn } from "@nextui-org/theme";
import ExpTimeline from "./exp-timeline";

export const ExpSection = () => {
  return (
    <section>
      <motion.h1
        initial={{
          opacity: 0,
          marginTop: "-1rem",
        }}
        className={cn(title())}
        animate={{ opacity: 1, scale: 1, marginTop: 0 }}
        transition={{ duration: 0.5, delay: 1.7 }}
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        Experiences
      </motion.h1>

      <ExpTimeline />
    </section>
  );
};
