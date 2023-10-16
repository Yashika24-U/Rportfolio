import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion} from "framer-motion"





const MySkills = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
    return (
      // pt-0 ->6
      <section id="skills" className="pt-0 pb-24" >
        {/* HEADER AND IMAGE SECTION */}
        
        <div className="md:flex md:justify-between md:gap-16 mt-32" >
          <motion.div
            className="md:w-1/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-4xl mb-5">
              MY <span className="text-red">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
            <p className="mt-10 mb-7">
            As a fresher, I possess proficiency in C++ for developing efficient software applications, 
            SQL expertise in designing and managing relational databases, hands-on experience in MERN stack development
            for building full-stack web applications, 
            and a strong foundation in Data Structures and Algorithms, enabling effective problem-solving and algorithmic thinking.
            </p>
          </motion.div>
  
          <div className="mt-16 md:mt-0">
            {isAboveLarge ? (
              <div
                className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
              >
                <img
                  alt="skills"
                  className="z-10"
                  src="assets/skills-image.png"
                />
              </div>
            ) : (
              <img alt="skills" className="z-10" src="assets/skills-image.png" />
            )}
          </div>
        </div>
  
        {/* SKILLS */}
        <div className="md:flex md:justify-between mt-10 gap-32">
          {/* EXPERIENCE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">01</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                 DataStructures & <br/>Algorithms
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
            My experience in solving 200+  problems developed a deep understanding 
            of data structures and algorithms, enabling me to design efficient and scalable solutions. </p>
            <p><a
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            href="https://leetcode.com/Yashika_U/"
            target="_blank"
            rel="noopener noreferrer"
            >Leetcode</a></p>
           
          </motion.div>
  
          {/* INNOVATIVE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">02</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  UI/UX Designer
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
            I have substantial experience in UI/UX design with React, having successfully contributed to various projects.
            My work involves creating visually appealing and highly functional user interfaces using React components.
            </p>
          </motion.div>
          {/* IMAGINATIVE */}
          <motion.div
            className="md:w-1/3 mt-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative h-32">
              <div className="z-10">
                <p className="font-playfair font-semibold text-5xl">03</p>
                <p className="font-playfair font-semibold text-3xl mt-3">
                  MERNstack
                </p>
              </div>
              <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
            </div>
            <p className="mt-5">
            I also have extensive experience working with the MERN stack, a powerful technology stack for web development. 
            While my primary experience is from my personal project, it underscores my proficiency in MERN stack development.
            </p>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default MySkills;