import { useEffect, useRef } from "react";
import React from "react";
import Slider from "./Slider.jsx";
import { motion, useInView, useAnimation } from "framer-motion";
import ExpertiseBox from "./ExpertiseBox.jsx";

function My_expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
    }
  }, [isInView, mainControl]);

  return (
    <div
      ref={ref}
      className="bg-custom-radial-gradient flex flex-col h-[1100px] sm:h-[800px] sm:px-48 px-8   "
    >
      <div
      style={{fontFamily:"Anton"}}
      className="text-green-400 text-4xl mt-28 sm:mt-6   shadow-2xl w-52 shadow-indigo-500/50">
        MY Expertise
      </div>
      <motion.div
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        className="grid lg:grid-cols-12 md:grid-cols-8  grid-cols-8 gap-3 mt-28"
      >
        <ExpertiseBox
          image={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-white w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </>
          }
          Title={"Front-End Dev"}
          skills={
            <>
              Experience with front-end frameworks/libraries like
              <span className="text-purple-500"> React</span>, Proficiency in
              using <span className="text-purple-500"> Tailwind</span> CSS for
              utility-first styling
            </>
          }
        />

        <ExpertiseBox
          image={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-white w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </>
          }
          Title={"Back-End Dev"}
          skills={
            <>
              <span className="text-purple-500"> Nodejs</span>, leveraging{" "}
              <span className="text-purple-500"> Zod</span> for robust
              validation, and also{" "}
              <span className="text-purple-500"> Honojs</span> for efficient
              serverless applications, and
              <span className="text-purple-500"> Cloudflare</span> for reliable
              deployment.
            </>
          }
        />
        <ExpertiseBox
          image={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-white w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                />
              </svg>
            </>
          }
          Title={"Database Management"}
          skills={
            <>
              Database manager leveraging{" "}
              <span className="text-purple-500">MongoDB</span> for NoSQL,{" "}
              <span className="text-purple-500">Prisma ORM</span> for seamless
              interaction with PostgreSQL, and more.
            </>
          }
        />
        <ExpertiseBox
          image={
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-white  w-8  h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                />
              </svg>
            </>
          }
          Title={" Version Control and Collaboration"}
          skills={
            <>
              Proficient in version control using{" "}
              <span className="text-purple-500">GitHub</span> for efficient code
              management, collaboration
            </>
          }
        />
      </motion.div>
      <Slider />
    </div>
  );
}

export default My_expertise;
