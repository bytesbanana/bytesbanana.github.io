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

      <ExpTimeline
        expInfos={[
          {
            year: "Jun 2018 - Mar 2020",
            position: "Programmer analyst",
            companyName: "ALPHAMETRICS CO., LTD., Saraburi, Thailand",
            description: `- Created an API for user licensing control using ASP.NET to assist the business in billing more than 25% of customers.
- Implement a Microsoft dynamic extension using AL language for Point of Sales that allows clients to interact with the system using a barcode scanner.
- Created a Java-based custom JIRA extension to make it simple for the team to get a custom report in an Excel-based format.
- Participate in research and proof of concepts to improve the company's products`,
          },
          {
            year: "Mar 2020 - Apr 2021",
            position: "Java Programmer (Contract)",
            companyName: "SOLUTION LINK, Bangkok, Thailand",
            description: `- Created a full-stack web application utilizing Java (1.6), Spring Framework MVC, JavaScript, Bootstrap CSS, and JSP to manage each customer's SMS.
- Developed a full-stack web application to automatically extract, transform, and load insurance data from the company's partner to simplify the insurance issue process.`,
          },
          {
            year: "Apr 2021 - Jun 2022",
            position: "Frontend Developer",
            companyName: "SOLUTION LINK, Bangkok, Thailand",
            description: `- Working closely with product owners while utilizing agile methodology
- Examine product problems and bug fixes.
- Implement the NDID feature with JavaScript and Kony to assist clients in simplifying
identification and permission without contacting any bank branches.
- Use Next.JS, ReduxJS, Axios, and Styled-Components to implement, test, debug,
and deploy web-view-based mobile banking capabilities such as international transfers, online account opening, and E-KYC.`,
          },
          {
            year: "Jul 2022 - Dec 2023",
            position: "Senior Programmer (Contract)",
            companyName: "ADI GROUP, Bangkok, Thailand",
            description: `- Worked with a small agile team to scope and prioritize features.
- Wrote technical design documents, including sequence diagrams and ER diagrams,
after analyzing and designing APIs from specifications.
- Utilized technical expertise to produce Rest API, unit test scripts using Spring Boot,
Postgres, and Redis, and Karate test automation scripts.
- Use JMeter to load tests and compile the results into a report.`,
          },
          {
            year: "Feb 2023 - Present",
            position: "Senior Software Engineer",
            companyName:
              "REFINITIV SOFTWARE (THAILAND) COMPANY LIMITED, Bangkok, Thailand",
            description: `- Implement and resolve the issue with the high-performance chart application, which is used by more than 10,000 customers per day, using VueJS, React, Redux, Redux- Saga, and Typescript.
- Collaborated with a global agile team of over 20 people to help with scope and feature prioritization.`,
          },
        ]}
      />
    </section>
  );
};
