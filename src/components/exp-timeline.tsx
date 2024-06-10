import { cn } from "@nextui-org/theme";
import { motion } from "framer-motion";

const ExpNode = (
  { position }: { position: "left" | "right" } = { position: "right" }
) => {
  console.log(position);
  return (
    <div className="relative ">
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
          Year
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
          Position
        </h4>
        <p className={cn(position === "left" && "text-end")}>description</p>
      </div>
    </div>
  );
};

const ExpLine = () => {
  return <div className="w-2 h-[200px] bg-green-500"></div>;
};

const ExpTimeline = () => {
  const renderExpNode = () => {
    const nodes: React.ReactNode[] = [];

    for (let i = 0; i < 5; i++) {
      nodes.push(<ExpNode position={i % 2 === 0 ? "right" : "left"} />);
      if (i < 4) {
        nodes.push(<ExpLine />);
      }
    }

    return nodes;
  };

  return (
    <motion.section
      className="flex flex-col items-center"
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
      {renderExpNode()}
      {/* <ExpNode />
      <ExpLine />
      <ExpNode />
      <ExpLine />
      <ExpNode />
      <ExpLine />
      <ExpNode />
      <ExpLine />
      <ExpNode /> */}
    </motion.section>
  );
};

export default ExpTimeline;
