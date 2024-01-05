import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition 
    duration-500 bg-grey z-30 flex flex-col justify-center
    items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  // Define the links for each project
  const projectLinks = {
    "Project 1": {
      frontend: (
        <a href="https://github.com/Yashika24-U/SocialMedia-FE" target="_blank">
          frontend
        </a>
      ),
      backend: (
        <a href="https://github.com/Yashika24-U/SocialMedia-BE" target="_blank">
          backend
        </a>
      ),
      deployment: (
        <a href="https://stirring-kleicha-39fb7a.netlify.app" target="_blank">
          deployment
        </a>
      ),
    },
    "Project 2": {
      frontend: (
        <a
          href="https://github.com/Yashika24-U/YTclone-frontend"
          target="_blank"
        >
          frontend
        </a>
      ),
      backend: (
        <a
          href="https://github.com/Yashika24-U/YTclone-backend"
          target="_blank"
        >
          backend
        </a>
      ),
      deployment: (
        <a
          href="https://warm-palmier-85a57e.netlify.app/emails/inbox"
          target="_blank"
        >
          deployment
        </a>
      ),
    },
    "Project 3": {
      frontend: (
        <a
          href="https://github.com/Yashika24-U/Gmailclone-frontend"
          target="_blank"
        >
          frontend
        </a>
      ),
      backend: (
        <a
          href="https://github.com/Yashika24-U/Gmailclone-backend"
          target="_blank"
        >
          backend
        </a>
      ),
      deployment: (
        <a
          href="https://warm-palmier-85a57e.netlify.app/emails/inbox"
          target="_blank"
        >
          deployment
        </a>
      ),
    },
    "Project 4": {
      frontend: (
        <a
          href="https://github.com/Yashika24-U/CompleteAuthenticationFE"
          target="_blank"
        >
          frontend
        </a>
      ),
      backend: (
        <a
          href="https://github.com/Yashika24-U/CompleteAuthenticationBE"
          target="_blank"
        >
          backend
        </a>
      ),
      deployment: (
        <a
          href="https://symphonious-biscuit-22ff7b.netlify.app/"
          target="_blank"
        >
          deployment
        </a>
      ),
    },
    "Project 5": {
      frontend: (
        <a href="https://github.com/Yashika24-U/CrudFE" target="_blank">
          frontend
        </a>
      ),
      backend: (
        <a href="https://github.com/Yashika24-U/CRUDbE" target="_blank">
          backend
        </a>
      ),
      deployment: (
        <a href="https://symphonious-biscuit-22ff7b.netlify.app/" target="_blank">
          backend
        </a>
      ),
    }, 
    "Project 6": {
      frontend: (
        <a
          href="https://github.com/Yashika24-U/AdminDashboard-ReactJS"
          target="_blank"
        >
          frontend
        </a>
      ),
      deployment: (
        <a
          href="https://6504fb9525bea348979fd384--poetic-kashata-25b6e4.netlify.app/"
          target="_blank"
        >
          deployment
        </a>
      ),
    },
    "Project 7": {
      frontend: (
        <a
          href="https://github.com/Yashika24-U/muipractice"
          target="_blank"
        >
          frontend
        </a>
      ),
      deployment: (
        <a
          href="https://incredible-tapioca-642f43.netlify.app/"
          target="_blank"
        >
          deployment
        </a>
      ),
    },
     
   "Project 8": {
      frontend: (
        <a
          href="https://github.com/Yashika24-U/AN-AUTOMATED-E-PLACEMENT-PORTAL"
          target="_blank"
        >
          frontend
        </a>
      ),
      backend: (
        <a
          href="https://github.com/Yashika24-U/AN-AUTOMATED-E-PLACEMENT-PORTAL"
          target="_blank"
        >
          backend
        </a>
      ),
    },

    // Add links for other projects here
  };

  const links = projectLinks[title] || {};
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {
            /* Conditionally display the links when hovering over the project */
            links.frontend && (
              <a
                href={links.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue hover:underline"
              >
                {links.frontend}
              </a>
            )
          }

          {links.backend && (
            <a
              href={links.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue hover:underline"
            >
              {links.backend}
            </a>
          )}

          {links.deployment && (
            <a
              href={links.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue hover:underline"
            >
              {links.deployment}
            </a>
          )}
        </p>
      </div>
      <img
        src={`../assets/${projectTitle}.jpg`}
        alt={projectTitle}
        width="400"
        height="300"
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

        <p className="mt-10 mb-10">
          In my portfolio, you'll find a diverse collection of projects that
          showcase my passion for web development and design. These projects
          reflect my commitment to quality, my ability to adapt to different
          challenges, and my dedication to creating user-focused,
          high-performance solutions."
        </p>
      </motion.div>
      {/* PROJECTS */}

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red max-w-[400px]
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title="Project 1" />
          <Project title="Project 2" />

          {/* ROW 2 */}
          <Project title="Project 3" />
          <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 2 */}
          <Project title="Project 6" />
          <Project title="Project 7" />
          <Project title="Project 8" />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px]
          max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
