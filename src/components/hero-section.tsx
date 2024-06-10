import { motion } from "framer-motion";
import { title } from "./primitives";
import { cn } from "@nextui-org/theme";
import { ComponentProps } from "react";

export const HeroSection = ({
  className,
  ...rest
}: ComponentProps<"section">) => {
  return (
    <section
      className={cn(
        "py-24 md:py-36",
        className
      )}
      {...rest}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <motion.h1
          initial={{
            opacity: 0,
            marginTop: "-1rem",
          }}
          className={title()}
          animate={{ opacity: 1, scale: 1, marginTop: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="animate-wave"> 🖖🏽 &nbsp;</span>Hi there!&nbsp;
        </motion.h1>
        <motion.h1
          initial={{
            opacity: 0,
            marginTop: "-1rem",
          }}
          animate={{ opacity: 1, scale: 1, marginTop: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={cn(title())}
        >
          {"I'm "}&nbsp;
          <span className={cn(title({ color: "yellow" }), "drop-shadow-xl")}>
            {"Saharat Paynok"}
          </span>
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
            marginTop: "-1rem",
          }}
          animate={{ opacity: 1, scale: 1, marginTop: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className={title({
            size: "sm",
            fullWidth: true,
          })}
        >
          A software developer based in Thailand 🇹🇭
        </motion.h2>
      </div>
    </section>
  );
};
