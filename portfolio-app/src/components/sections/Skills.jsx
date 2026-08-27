// import {
//   FaReact,
//   FaNodeJs,
//   FaAws,
//   FaDocker,
//   FaHtml5,
//   FaCss3Alt,
//   FaGitAlt,
// } from "react-icons/fa";

// import {
//   SiTypescript,
//   SiJavascript,
//   SiMongodb,
//   SiMysql,
//   SiExpress,
//   SiRedux,
//   SiJenkins,
//   SiGooglecloud,
// } from "react-icons/si";

// const skills = [
//   { name: "React.js", icon: <FaReact size={24} /> },
//   { name: "JavaScript", icon: <SiJavascript size={24} /> },
//   { name: "TypeScript", icon: <SiTypescript size={24} /> },
//   { name: "Redux", icon: <SiRedux size={24} /> },

//   { name: "Node.js", icon: <FaNodeJs size={24} /> },
//   { name: "Express.js", icon: <SiExpress size={24} /> },

//   { name: "MongoDB", icon: <SiMongodb size={24} /> },
//   { name: "MySQL", icon: <SiMysql size={24} /> },

//   { name: "AWS", icon: <FaAws size={24} /> },
//   { name: "Docker", icon: <FaDocker size={24} /> },
//   { name: "Jenkins", icon: <SiJenkins size={24} /> },
//   { name: "GCP", icon: <SiGooglecloud size={24} /> },

//   { name: "Git", icon: <FaGitAlt size={24} /> },

//   { name: "HTML5", icon: <FaHtml5 size={24} /> },
//   { name: "CSS3", icon: <FaCss3Alt size={24} /> },

//   { name: "Playwright", icon: "🎭" },
//   { name: "RAG", icon: "🤖" },
//   { name: "LLM", icon: "🧠" },
// ];

// function Skills() {
//   return (
//     <section
//       id="skills"
//       style={{
//         padding: "120px 20px",
//         background: "#0f172a",
//         position: "relative",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {/* TITLE */}
//         <h2
//           style={{
//             textAlign: "center",
//             fontSize: "3rem",
//             fontWeight: 700,
//             color: "#fff",
//             marginBottom: "16px",
//           }}
//         >
//           Skills
//         </h2>

//         <p
//           style={{
//             textAlign: "center",
//             color: "#94A3B8",
//             maxWidth: "700px",
//             margin: "0 auto 60px",
//             lineHeight: 1.8,
//           }}
//         >
//           Technologies and tools I use to build scalable, modern,
//           and high-performance web applications.
//         </p>

//         {/* SKILLS GRID */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns:
//               "repeat(auto-fit, minmax(220px, 1fr))",
//             gap: "20px",
//           }}
//         >
//           {skills.map((skill) => (
//             <div
//               key={skill.name}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "14px",

//                 padding: "18px",

//                 background: "rgba(255,255,255,0.03)",

//                 border:
//                   "1px solid rgba(255,255,255,0.08)",

//                 borderRadius: "18px",

//                 backdropFilter: "blur(10px)",

//                 transition: "all 0.3s ease",

//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform =
//                   "translateY(-6px)";

//                 e.currentTarget.style.boxShadow =
//                   "0 15px 35px rgba(56,189,248,0.15)";

//                 e.currentTarget.style.border =
//                   "1px solid rgba(56,189,248,0.3)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform =
//                   "translateY(0px)";

//                 e.currentTarget.style.boxShadow = "none";

//                 e.currentTarget.style.border =
//                   "1px solid rgba(255,255,255,0.08)";
//               }}
//             >
//               <div
//                 style={{
//                   width: "48px",
//                   height: "48px",

//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",

//                   borderRadius: "14px",

//                   background:
//                     "rgba(56,189,248,0.12)",

//                   color: "#38BDF8",

//                   flexShrink: 0,
//                 }}
//               >
//                 {skill.icon}
//               </div>

//               <span
//                 style={{
//                   fontWeight: 600,
//                   color: "#fff",
//                   fontSize: "15px",
//                 }}
//               >
//                 {skill.name}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;

import {
  Box,
  Typography,
  Container,
  Paper,
} from "@mui/material";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiRedux,
  SiJenkins,
  SiGooglecloud,
  SiLangchain,
  SiLanggraph,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact size={24} /> },
  { name: "JavaScript", icon: <SiJavascript size={24} /> },
  { name: "TypeScript", icon: <SiTypescript size={24} /> },
  { name: "Redux", icon: <SiRedux size={24} /> },

  { name: "Node.js", icon: <FaNodeJs size={24} /> },
  { name: "Express.js", icon: <SiExpress size={24} /> },

  { name: "MongoDB", icon: <SiMongodb size={24} /> },
  { name: "MySQL", icon: <SiMysql size={24} /> },

  { name: "AWS", icon: <FaAws size={24} /> },
  { name: "Docker", icon: <FaDocker size={24} /> },
  { name: "Jenkins", icon: <SiJenkins size={24} /> },
  { name: "Google Cloud", icon: <SiGooglecloud size={24} /> },

  { name: "Git", icon: <FaGitAlt size={24} /> },

  { name: "HTML5", icon: <FaHtml5 size={24} /> },
  { name: "CSS3", icon: <FaCss3Alt size={24} /> },

  { name: "Playwright", icon: "🎭" },
  { name: "RAG", icon: "🤖" },
  { name: "LLM", icon: "🧠" },

  {name: "Langchain", icon: <SiLangchain size={24} />},
  {name: "Langgraph", icon: <SiLanggraph size={24} />},
];

function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "70px 0",
        background: "#0f172a",
      }}
    >
      <Container maxWidth="lg">
        {/* TITLE */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 2,
            color: "#fff",
          }}
        >
          Skills
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
          Technologies and tools I use to build scalable,
          modern, cloud-enabled, and high-performance
          applications.
        </Typography>

        {/* SKILLS GRID */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: 3,
          }}
        >
          {skills.map((skill) => (
            <Paper
              key={skill.name}
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,

                p: 2.5,

                background: "rgba(255,255,255,0.03)",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                borderRadius: "18px",

                backdropFilter: "blur(10px)",

                transition: "all 0.3s ease",

                cursor: "pointer",

                "&:hover": {
                  transform: "translateY(-6px)",

                  boxShadow:
                    "0 15px 35px rgba(56,189,248,0.15)",

                  border:
                    "1px solid rgba(56,189,248,0.30)",
                },
              }}
            >
              {/* ICON */}
              <Box
                sx={{
                  width: 50,
                  height: 50,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  borderRadius: "14px",

                  background:
                    "rgba(56,189,248,0.12)",

                  color: "#38BDF8",

                  flexShrink: 0,

                  fontSize: "1.3rem",
                }}
              >
                {skill.icon}
              </Box>

              {/* NAME */}
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {skill.name}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>
    </section>
  );
}

export default Skills;
