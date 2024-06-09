import { cn } from "@nextui-org/theme";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
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
    </DefaultLayout>
  );
}
