// import { Typography, Container, Box, Paper } from "@mui/material";
// import { motion } from "framer-motion";

// function About() {
//   return (
//     <section
//       id="about"
//       style={{
//         padding: "120px 0",
//         position: "relative",
//         background: "#0f172a",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* TITLE */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Typography
//             variant="h3"
//             sx={{
//               textAlign: "center",
//               fontWeight: 700,
//               mb: 2,
//               color: "#fff",
//             }}
//           >
//             About Me
//           </Typography>

//           <Typography
//             sx={{
//               textAlign: "center",
//               color: "#94A3B8",
//               mb: 6,
//               maxWidth: "700px",
//               mx: "auto",
//             }}
//           >
//             Full Stack Engineer specializing in modern web technologies,
//             scalable backend systems, cloud solutions, and exceptional
//             user experiences.
//           </Typography>
//         </motion.div>

//         {/* CONTENT GRID */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               md: "1fr 1fr",
//             },
//             gap: 4,
//           }}
//         >
//           {/* LEFT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Paper
//               elevation={0}
//               sx={{
//                 p: 4,
//                 borderRadius: "20px",
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 backdropFilter: "blur(10px)",
//                 height: "100%",
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   color: "#38BDF8",
//                   fontWeight: 600,
//                   mb: 3,
//                 }}
//               >
//                 Who I Am
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "#fff",
//                   fontSize: "1rem",
//                   lineHeight: 2,
//                 }}
//               >
//                 Hi, I'm{" "}
//                 <Box
//                   component="span"
//                   sx={{
//                     color: "#38BDF8",
//                     fontWeight: 700,
//                   }}
//                 >
//                   Sivasakthi Paramasivam
//                 </Box>
//                 , a Full Stack Engineer with 3 years and 11 months of
//                 experience in designing and developing scalable web
//                 applications.
//                 <br />
//                 <br />
//                 I hold a Bachelor's degree in Electronics and Communication
//                 Engineering (2022).
//                 <br />
//                 <br />
//                 Throughout my career, I have worked on real-world
//                 applications involving logistics, computer vision,
//                 AI-powered systems, and enterprise software solutions.
//                 My focus is on building clean, maintainable, and
//                 scalable software that solves real business problems.
//               </Typography>
//             </Paper>
//           </motion.div>

//           {/* RIGHT SIDE */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//           >
//             <Paper
//               elevation={0}
//               sx={{
//                 p: 4,
//                 borderRadius: "20px",
//                 background: "rgba(255,255,255,0.03)",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 backdropFilter: "blur(10px)",
//                 height: "100%",
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 sx={{
//                   color: "#38BDF8",
//                   fontWeight: 600,
//                   mb: 3,
//                 }}
//               >
//                 What I Do
//               </Typography>

//               <Typography
//                 sx={{
//                   color: "#fff",
//                   fontSize: "1rem",
//                   lineHeight: 2,
//                 }}
//               >
//                 My technical expertise includes HTML, CSS, JavaScript,
//                 React.js, Node.js, Express.js, MySQL, MongoDB, AWS,
//                 and Google Cloud Platform (GCP).
//                 <br />
//                 <br />
//                 I have hands-on experience building responsive user
//                 interfaces, developing RESTful APIs, managing
//                 database-driven applications, and delivering
//                 cloud-enabled solutions.
//                 <br />
//                 <br />
//                 I am passionate about solving complex problems,
//                 learning emerging technologies, and delivering
//                 high-quality software that creates exceptional
//                 user experiences and meaningful business value.
//               </Typography>
//             </Paper>
//           </motion.div>
//         </Box>
//       </Container>
//     </section>
//   );
// }

// export default About;

import { Typography, Container, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 0",
        background: "#0f172a",
      }}
    >
      <Container maxWidth="lg">
        {/* SECTION TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              mb: 2,
              color: "#fff",
            }}
          >
            About Me
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#94A3B8",
              mb: 8,
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            Full Stack Engineer specializing in modern web technologies,
            scalable backend systems, cloud solutions, and AI-powered
            applications.
          </Typography>
        </motion.div>

        {/* CONTENT GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 4,
          }}
        >
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#38BDF8",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                Who I Am
              </Typography>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 2,
                }}
              >
                Hi, I'm{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#38BDF8",
                    fontWeight: 700,
                  }}
                >
                  Sivasakthi Paramasivam
                </Box>
                , a Full Stack Engineer with nearly 3 years 11 months of experience
                designing and developing scalable web applications.
                <br />
                <br />
                I hold a Bachelor's degree in Electronics and Communication
                Engineering and have worked on real-world software solutions
                across logistics, computer vision, automation, and AI-driven
                products.
                <br />
                <br />
                My focus is on building reliable, maintainable, and
                performance-oriented applications that solve business
                challenges and deliver exceptional user experiences.
              </Typography>
            </Paper>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#38BDF8",
                  fontWeight: 700,
                  mb: 3,
                }}
              >
                What I Do
              </Typography>

              <Typography
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 2,
                }}
              >
                My technical expertise includes React.js, Node.js,
                Express.js, JavaScript, TypeScript, MySQL, MongoDB,
                AWS, and Google Cloud Platform (GCP).
                <br />
                <br />
                I have hands-on experience building responsive user
                interfaces, designing RESTful APIs, developing
                database-driven applications, and deploying cloud-based
                solutions.
                <br />
                <br />
                I enjoy solving complex technical problems, learning
                emerging technologies, and creating software that
                delivers meaningful business value and long-term
                maintainability.
              </Typography>
            </Paper>
          </motion.div>
        </Box>
      </Container>
    </section>
  );
}

export default About;

