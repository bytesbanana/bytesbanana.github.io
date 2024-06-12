import { cn } from "@nextui-org/theme";
import { motion } from "framer-motion";
import { ComponentProps } from "react";
import Markdown from "markdown-to-jsx";

type ExpInfo = {
  year: string;
  position: string;
  description: string;
  companyName: string;
};

interface ExpTimelineProps extends ComponentProps<"section"> {
  expInfos: Array<ExpInfo>;
}

interface ExpNodeProps extends ComponentProps<"div"> {
  position: "left" | "right";
  expInfo: ExpInfo;
}

const ExpNode = ({ expInfo, position }: ExpNodeProps) => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-full shadow-sm">
        <div className="w-5 h-5 bg-white rounded-full shadow-md animate-pulse"></div>
      </div>
      <div
        className={cn(
          "absolute top-[-8px] min-w-72",
          (!position || position === "right") && "left-full",
          position === "left" && "right-full"
        )}
      >
        <h3
          className={cn(
            "text-xl font-semibold",
            position === "left" && "text-end"
          )}
        >
          {expInfo.year}
        </h3>
        <div className="relative">
          <div
            className={cn(
              "h-1 border-b-[4px] border-dashed hidden md:block w-full"
            )}
          />
          <div
            className={cn(
              "absolute w-20 h-20 bg-slate-500 rounded-full top-[-40px]",
              position === "left" && "right-full",
              position === "right" && "left-full"
            )}
          ></div>
        </div>

        <h4
          className={cn(
            "font-semibold text-large",
            position === "left" && "text-end"
          )}
        >
          {expInfo.position}
        </h4>
        <Markdown options={{
          overrides: {
            ul: {
              props: {
                className: 'flex flex-col gap-2'
              }
            },
            li: {
              props: {
                className: 'list-disc ml-6'
              }
            }
          }
        }}>{expInfo.description.trim()}</Markdown>
        <p className={cn(position === "left" && "text-end")}></p>
      </div>
    </div>
  );
};

const ExpLine = () => {
  return <div className="w-2 h-[250px] bg-green-500" />;
};

const ExpTimeline = ({ expInfos, className }: ExpTimelineProps) => {
  return (
    <motion.section
      className={cn("flex flex-col items-center", className)}
      initial={{
        opacity: 0,
        marginTop: "-1rem",
      }}
      animate={{ opacity: 1, scale: 1, marginTop: 0 }}
      transition={{ duration: 0.5, delay: 1.7 }}
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {expInfos.map((expInfo, i) => (
        <>
          <ExpNode
            expInfo={expInfo}
            position={i % 2 === 0 ? "right" : "left"}
          />
          {i < expInfos.length - 1 && <ExpLine />}
        </>
      ))}
    </motion.section>
  );
};

export default ExpTimeline;
