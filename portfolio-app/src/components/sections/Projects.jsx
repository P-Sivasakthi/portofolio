// import { useState } from "react";
// import {
//   Box,
//   Typography,
//   Paper,
//   Chip,
//   Button,
//   Container,
// } from "@mui/material";

// import {
//   FaGithub,
//   FaExternalLinkAlt,
// } from "react-icons/fa";

// const projects = [
//   {
//     title: "AI Parcel Measurement System",
//     image:
//       "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
//     description:
//       "Computer Vision and AI-powered parcel dimensioning solution for logistics and e-commerce operations.",
//     techStack: [
//       "React.js",
//       "Node.js",
//       "Electron.js",
//       "MySQL",
//       "AWS",
//       "Computer Vision",
//     ],
//     implementation: [
//       "Integrated depth camera hardware communication",
//       "Built real-time parcel measurement workflows",
//       "Designed REST APIs for measurement processing",
//       "Implemented image storage using AWS S3",
//     ],
//     liveDemo: "#",
//     github: "#",
//   },
//   {
//     title: "AI RAG Chatbot",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995",
//     description:
//       "Retrieval-Augmented Generation chatbot that answers questions using custom company documents.",
//     techStack: [
//       "React.js",
//       "Node.js",
//       "LLM",
//       "RAG",
//       "Vector DB",
//     ],
//     implementation: [
//       "Document ingestion pipeline",
//       "Embedding generation",
//       "Vector search implementation",
//       "LLM response generation",
//     ],
//     liveDemo: "#",
//     github: "#",
//   },
//   {
//     title: "Lighthouse Audit Platform",
//     image:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
//     description:
//       "Web application performance auditing platform built using Lighthouse automation.",
//     techStack: [
//       "React.js",
//       "Node.js",
//       "Playwright",
//       "Lighthouse",
//     ],
//     implementation: [
//       "Automated website audits",
//       "Generated performance reports",
//       "Stored historical reports",
//       "Dashboard analytics",
//     ],
//     liveDemo: "#",
//     github: "#",
//   },
// ];

// function Projects() {
//   const [expanded, setExpanded] = useState(null);

//   return (
//     <section
//       id="projects"
//       style={{
//         padding: "120px 0",
//         background: "#0f172a",
//       }}
//     >
//       <Container maxWidth="xl">
//         {/* TITLE */}
//         <Typography
//           variant="h3"
//           sx={{
//             textAlign: "center",
//             fontWeight: 700,
//             mb: 2,
//             color: "#fff",
//           }}
//         >
//           Projects
//         </Typography>

//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#94A3B8",
//             mb: 8,
//             maxWidth: "700px",
//             mx: "auto",
//           }}
//         >
//           A collection of real-world applications, AI solutions,
//           cloud-integrated systems, and full-stack projects built
//           using modern technologies.
//         </Typography>

//         {/* PROJECT GRID */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               md: "repeat(2, minmax(320px, 380px))",
//               lg: "repeat(3, minmax(320px, 380px))",
//             },
//             justifyContent: "center",
//             gap: 4,
//           }}
//         >
//           {projects.map((project, index) => {
//             const isExpanded = expanded === index;

//             return (
//               <Paper
//                 key={project.title}
//                 elevation={0}
//                 sx={{
//                   borderRadius: "20px",
//                   overflow: "hidden",
//                   background: "rgba(255,255,255,0.03)",
//                   border: "1px solid rgba(255,255,255,0.08)",
//                   backdropFilter: "blur(10px)",
//                   display: "flex",
//                   flexDirection: "column",
//                   height: "100%",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     transform: "translateY(-5px)",
//                     borderColor: "rgba(56,189,248,0.4)",
//                   },
//                 }}
//               >
//                 {/* IMAGE */}
//                 <Box
//                   component="img"
//                   src={project.image}
//                   alt={project.title}
//                   sx={{
//                     width: "100%",
//                     height: 220,
//                     objectFit: "cover",
//                   }}
//                 />

//                 {/* CONTENT */}
//                 <Box
//                   sx={{
//                     p: 3,
//                     display: "flex",
//                     flexDirection: "column",
//                     flex: 1,
//                   }}
//                 >
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: "#fff",
//                       fontWeight: 700,
//                       mb: 1,
//                     }}
//                   >
//                     {project.title}
//                   </Typography>

//                   <Typography
//                     sx={{
//                       color: "#94A3B8",
//                       fontSize: "0.95rem",
//                       mb: 2,
//                       lineHeight: 1.8,
//                     }}
//                   >
//                     {project.description}
//                   </Typography>

//                   {/* TECH STACK */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       gap: 1,
//                       mb: 2,
//                     }}
//                   >
//                     {project.techStack.map((tech) => (
//                       <Chip
//                         key={tech}
//                         label={tech}
//                         size="small"
//                         sx={{
//                           background:
//                             "rgba(56,189,248,0.15)",
//                           color: "#38BDF8",
//                           border:
//                             "1px solid rgba(56,189,248,0.25)",
//                         }}
//                       />
//                     ))}
//                   </Box>

//                   {/* IMPLEMENTATION */}
//                   <Box
//                     component="ul"
//                     sx={{
//                       pl: 2,
//                       mb: 2,
//                     }}
//                   >
//                     {(isExpanded
//                       ? project.implementation
//                       : project.implementation.slice(0, 3)
//                     ).map((item) => (
//                       <Typography
//                         key={item}
//                         component="li"
//                         sx={{
//                           color: "#CBD5E1",
//                           fontSize: "0.9rem",
//                           mb: 0.8,
//                         }}
//                       >
//                         {item}
//                       </Typography>
//                     ))}
//                   </Box>

//                   {/* VIEW DETAILS */}
//                   {project.implementation.length > 3 && (
//                     <Button
//                       size="small"
//                       onClick={() =>
//                         setExpanded(
//                           isExpanded ? null : index
//                         )
//                       }
//                       sx={{
//                         alignSelf: "flex-start",
//                         color: "#38BDF8",
//                         textTransform: "none",
//                         mb: 2,
//                       }}
//                     >
//                       {isExpanded
//                         ? "Show Less"
//                         : "View Details"}
//                     </Button>
//                   )}

//                   {/* ACTION BUTTONS */}
//                   <Box
//                     sx={{
//                       display: "flex",
//                       gap: 2,
//                       mt: "auto",
//                     }}
//                   >
//                     <Button
//                       variant="contained"
//                       startIcon={<FaExternalLinkAlt />}
//                       size="small"
//                       href={project.liveDemo}
//                       sx={{
//                         background: "#38BDF8",
//                         color: "#0f172a",
//                         fontWeight: 600,
//                         "&:hover": {
//                           background: "#0EA5E9",
//                         },
//                       }}
//                     >
//                       Live Demo
//                     </Button>

//                     <Button
//                       variant="outlined"
//                       startIcon={<FaGithub />}
//                       size="small"
//                       href={project.github}
//                       sx={{
//                         color: "#fff",
//                         borderColor:
//                           "rgba(255,255,255,0.2)",
//                         "&:hover": {
//                           borderColor: "#38BDF8",
//                           color: "#38BDF8",
//                         },
//                       }}
//                     >
//                       GitHub
//                     </Button>
//                   </Box>
//                 </Box>
//               </Paper>
//             );
//           })}
//         </Box>
//       </Container>
//     </section>
//   );
// }

// export default Projects;


import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Container,
} from "@mui/material";

import { motion } from "framer-motion";
import LLMChatbotImage from "../../assets/OIP (1).jpeg";
import AIToolAssistant from "../../assets/OIP (3).jpeg";


import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
    {
      title: "LLM Chatbot",
      image:
        LLMChatbotImage,
      description:
        "Developed an LLM-powered chatbot for intelligent conversational interactions.",
      techStack: [
        "React.js",
        "Node.js",
        "Groq API",
        "Vercel",
      ],
      implementation: [
        "Built LLM chatbot using React.js.",
        "Integrated Groq API with Node.js.",
        "Deployed frontend and backend on Vercel."
      ],
      liveDemo: "https://llm-chatbot-lac.vercel.app",
      github: "#",
    },
    {
      title: "AI Tool Assistant",
      image:
        AIToolAssistant,
      description:
        "LLM-powered AI agent routing user requests for weather, time, and calculations.",
      techStack: [
        "React.js",
        "Node.js",
        "Groq API",
        "LangChain",
        "LangGraph",
      ],
      implementation: [
        "LLM intelligently routes user requests.",
        "LangChain integrates weather, time, calculator tools.",
        "LangGraph orchestrates the agent workflow.",
      ],
      liveDemo: "https://frontend-three-sepia-53.vercel.app/",
      github: "#",
    },
    // {
    //   title: "Lighthouse Audit Platform",
    //   image:
    //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    //   description:
    //     "Web application performance auditing platform built using Lighthouse automation.",
    //   techStack: [
    //     "React.js",
    //     "Node.js",
    //     "Playwright",
    //     "Lighthouse",
    //   ],
    //   implementation: [
    //     "Automated website audits",
    //     "Generated performance reports",
    //     "Stored historical reports",
    //     "Dashboard analytics",
    //   ],
    //   liveDemo: "#",
    //   github: "#",
    // },
  ];

function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="projects"
      style={{
        padding: "48px 0",
        background: "#0f172a",
      }}
    >
      <Container maxWidth="lg">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
            Projects
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              color: "#94A3B8",
              mb: 8,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            A collection of real-world applications,
            AI solutions, cloud-integrated systems,
            and full-stack projects built using
            modern technologies.
          </Typography>
        </motion.div>

        {/* GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            },
            gap: 4,
          }}
        >
          {projects.map((project, index) => {
            const isExpanded = expanded === index;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: "20px",

                    background:
                      "rgba(255,255,255,0.03)",

                    border:
                      "1px solid rgba(255,255,255,0.08)",

                    backdropFilter: "blur(10px)",

                    transition:
                      "all 0.3s ease",

                    "&:hover": {
                      transform:
                        "translateY(-8px)",

                      borderColor:
                        "rgba(56,189,248,0.3)",

                      boxShadow:
                        "0 20px 40px rgba(56,189,248,0.12)",
                    },
                  }}
                >
                  {/* IMAGE */}
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                    }}
                  />

                  {/* CONTENT */}
                  <Box
                    sx={{
                      p: 3,
                      display: "flex",
                      flexDirection: "column",
                      height: "calc(100% - 220px)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                        mb: 1,
                      }}
                    >
                      {project.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#94A3B8",
                        mb: 3,
                        lineHeight: 1.8,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* TECH STACK */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 1,
                        mb: 3,
                      }}
                    >
                      {project.techStack.map(
                        (tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              background:
                                "rgba(56,189,248,0.12)",

                              color:
                                "#38BDF8",

                              border:
                                "1px solid rgba(56,189,248,0.2)",
                            }}
                          />
                        )
                      )}
                    </Box>

                    {/* IMPLEMENTATION */}
                    <Box
                      component="ul"
                      sx={{
                        pl: 2,
                        flexGrow: 1,
                      }}
                    >
                      {(isExpanded
                        ? project.implementation
                        : project.implementation.slice(
                            0,
                            3
                          )
                      ).map((item) => (
                        <Typography
                          key={item}
                          component="li"
                          sx={{
                            color:
                              "#CBD5E1",
                            mb: 1,
                            lineHeight: 1.7,
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>

                    {project.implementation
                      .length > 3 && (
                      <Button
                        size="small"
                        onClick={() =>
                          setExpanded(
                            isExpanded
                              ? null
                              : index
                          )
                        }
                        sx={{
                          alignSelf:
                            "flex-start",

                          color:
                            "#38BDF8",

                          textTransform:
                            "none",

                          mb: 2,
                        }}
                      >
                        {isExpanded
                          ? "Show Less"
                          : "View Details"}
                      </Button>
                    )}

                    {/* ACTIONS */}
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mt: "auto",
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={
                          <FaExternalLinkAlt />
                        }
                        href={
                          project.liveDemo
                        }
                        sx={{
                          background:
                            "#38BDF8",

                          color:
                            "#0f172a",

                          fontWeight:
                            600,

                          "&:hover": {
                            background:
                              "#0EA5E9",
                          },
                        }}
                      >
                        Demo
                      </Button>

                      <Button
                        variant="outlined"
                        startIcon={
                          <FaGithub />
                        }
                        href={
                          project.github
                        }
                        sx={{
                          color:
                            "#fff",

                          borderColor:
                            "rgba(255,255,255,0.15)",

                          "&:hover": {
                            color:
                              "#38BDF8",

                            borderColor:
                              "#38BDF8",
                          },
                        }}
                      >
                        GitHub
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </section>
  );
}

export default Projects;