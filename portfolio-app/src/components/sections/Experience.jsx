// import {
//   Box,
//   Typography,
//   Paper,
//   Avatar,
//   Chip,
//   Container,
// } from "@mui/material";

// import { FaBriefcase } from "react-icons/fa";

// const experiences = [
//   {
//     company: "Techjays Private Limited",
//     role: "Software Engineer Associate",
//     period: "Jul 2025 - Mar 2026",
//     achievements: [
//       "Built AI-powered RAG chatbot solutions",
//       "Developed Playwright-based web crawling systems",
//       "Created Lighthouse performance auditing platform",
//       "Managed Google Cloud infrastructure",
//     ],
//   },

//   {
//     company: "VisAI Labs",
//     role: "Full Stack Engineer",
//     period: "Jan 2024 - Jun 2025",
//     achievements: [
//       "Developed full-stack React.js and Node.js applications",
//       "Designed secure REST APIs with JWT and OAuth",
//       "Reduced deployment failures through modular architecture",
//       "Improved backend maintainability using SOLID principles",
//     ],
//   },

//   {
//     company: "VisAI Labs",
//     role: "Full Stack Engineer Trainee",
//     period: "Jan 2023 - Dec 2023",
//     achievements: [
//       "Implemented Redux and Context API",
//       "Optimized MySQL database performance",
//       "Maintained AWS EC2 and S3 infrastructure",
//       "Contributed to scalable system architecture",
//     ],
//   },

//   {
//     company: "VisAI Labs",
//     role: "Project Intern",
//     period: "Apr 2022 - Dec 2022",
//     achievements: [
//       "Built reusable React.js components",
//       "Automated deployments using shell scripts",
//       "Integrated SonarQube code quality checks",
//       "Implemented centralized logging systems",
//     ],
//   },
// ];

// function Experience() {
//   return (
//     <section
//       id="experience"
//       style={{
//         padding: "120px 0",
//         background: "#0f172a",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* SECTION TITLE */}
//         <Typography
//           variant="h3"
//           sx={{
//             textAlign: "center",
//             fontWeight: 700,
//             mb: 2,
//             color: "#fff",
//           }}
//         >
//           Experience
//         </Typography>

//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#94A3B8",
//             mb: 10,
//             maxWidth: "700px",
//             mx: "auto",
//           }}
//         >
//           My professional journey building scalable web applications,
//           cloud-native solutions, and AI-powered products.
//         </Typography>

//         <Box
//           sx={{
//             position: "relative",
//             maxWidth: "1000px",
//             mx: "auto",
//           }}
//         >
//           {/* Timeline Line */}
//           <Box
//             sx={{
//               position: "absolute",
//               left: {
//                 xs: "28px",
//                 md: "40px",
//               },
//               top: 0,
//               bottom: 0,
//               width: "3px",
//               background:
//                 "linear-gradient(180deg,#38BDF8,#0EA5E9)",
//               borderRadius: "20px",
//             }}
//           />

//           {experiences.map((item, index) => (
//             <Box
//               key={index}
//               sx={{
//                 position: "relative",
//                 display: "flex",
//                 gap: 4,
//                 mb: 5,
//               }}
//             >
//               {/* Timeline Icon */}
//               <Avatar
//                 sx={{
//                   width: 56,
//                   height: 56,

//                   background:
//                     "linear-gradient(135deg,#38BDF8,#0EA5E9)",

//                   boxShadow:
//                     "0 10px 25px rgba(56,189,248,0.25)",

//                   flexShrink: 0,
//                   zIndex: 2,
//                 }}
//               >
//                 <FaBriefcase size={18} />
//               </Avatar>

//               {/* Experience Card */}
//               <Paper
//                 elevation={0}
//                 sx={{
//                   flex: 1,

//                   p: 4,

//                   borderRadius: "20px",

//                   background: "rgba(255,255,255,0.03)",

//                   border:
//                     "1px solid rgba(255,255,255,0.08)",

//                   backdropFilter: "blur(10px)",

//                   transition: "all 0.35s ease",

//                   "&:hover": {
//                     transform: "translateY(-8px)",

//                     border:
//                       "1px solid rgba(56,189,248,0.30)",
//                   },
//                 }}
//               >
//                 {/* Header */}
//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "flex-start",
//                     flexWrap: "wrap",
//                     gap: 2,
//                     mb: 3,
//                   }}
//                 >
//                   <Box>
//                     <Typography
//                       variant="h5"
//                       sx={{
//                         fontWeight: 700,
//                         color: "#fff",
//                       }}
//                     >
//                       {item.role}
//                     </Typography>

//                     <Typography
//                       sx={{
//                         color: "#38BDF8",
//                         fontWeight: 600,
//                         mt: 1,
//                       }}
//                     >
//                       {item.company}
//                     </Typography>
//                   </Box>

//                   <Chip
//                     label={item.period}
//                     sx={{
//                       background:
//                         "rgba(56,189,248,0.12)",

//                       color: "#38BDF8",

//                       border:
//                         "1px solid rgba(56,189,248,0.20)",

//                       fontWeight: 600,

//                       borderRadius: "12px",
//                     }}
//                   />
//                 </Box>

//                 {/* Achievements */}
//                 <Box
//                   component="ul"
//                   sx={{
//                     pl: 2,
//                     m: 0,
//                   }}
//                 >
//                   {item.achievements.map(
//                     (achievement, idx) => (
//                       <Typography
//                         key={idx}
//                         component="li"
//                         sx={{
//                           mb: 1.5,
//                           color: "#CBD5E1",
//                           lineHeight: 1.8,
//                         }}
//                       >
//                         {achievement}
//                       </Typography>
//                     )
//                   )}
//                 </Box>
//               </Paper>
//             </Box>
//           ))}
//         </Box>
//       </Container>
//     </section>
//   );
// }

// export default Experience;


import {
  Box,
  Typography,
  Paper,
  Avatar,
  Chip,
  Container,
} from "@mui/material";

import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "Techjays Private Limited",
    role: "Software Engineer Associate",
    period: "Jul 2025 - Mar 2026",
    achievements: [
      "Built AI-powered RAG chatbot solutions",
      "Developed Playwright-based web crawling systems",
      "Created Lighthouse performance auditing platform",
      "Managed Google Cloud infrastructure",
    ],
  },
  {
    company: "VisAI Labs",
    role: "Full Stack Engineer",
    period: "Jan 2024 - Jun 2025",
    achievements: [
      "Developed full-stack React.js and Node.js applications",
      "Designed secure REST APIs with JWT and OAuth",
      "Reduced deployment failures through modular architecture",
      "Improved backend maintainability using SOLID principles",
    ],
  },
  {
    company: "VisAI Labs",
    role: "Full Stack Engineer Trainee",
    period: "Jan 2023 - Dec 2023",
    achievements: [
      "Implemented Redux and Context API",
      "Optimized MySQL database performance",
      "Maintained AWS EC2 and S3 infrastructure",
      "Contributed to scalable system architecture",
    ],
  },
  {
    company: "VisAI Labs",
    role: "Project Intern",
    period: "Apr 2022 - Dec 2022",
    achievements: [
      "Built reusable React.js components",
      "Automated deployments using Shell Scripts",
      "Integrated SonarQube code quality checks",
      "Implemented centralized logging systems",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "9px 0",
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
            color: "#fff",
            mb: 2,
          }}
        >
          Experience
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
          My professional journey building scalable web applications,
          cloud-native solutions, automation platforms, and AI-powered
          products across multiple domains.
        </Typography>

        {/* TIMELINE */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "1000px",
            mx: "auto",
          }}
        >
          {/* Vertical Line */}
          <Box
            sx={{
              position: "absolute",
              left: {
                xs: "28px",
                md: "40px",
              },
              top: 0,
              bottom: 0,
              width: "3px",
              borderRadius: "20px",
              background:
                "linear-gradient(180deg,#38BDF8,#0EA5E9)",
            }}
          />

          {experiences.map((item, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                display: "flex",
                gap: 4,
                mb: 5,
              }}
            >
              {/* ICON */}
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  background:
                    "linear-gradient(135deg,#38BDF8,#0EA5E9)",
                  boxShadow:
                    "0 10px 25px rgba(56,189,248,0.25)",
                  flexShrink: 0,
                  zIndex: 2,
                }}
              >
                <FaBriefcase size={18} />
              </Avatar>

              {/* CARD */}
              <Paper
                elevation={0}
                sx={{
                  flex: 1,
                  p: 4,
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.35s ease",

                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(56,189,248,0.30)",
                    boxShadow:
                      "0 20px 40px rgba(0,0,0,0.15)",
                  },
                }}
              >
                {/* HEADER */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    >
                      {item.role}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#38BDF8",
                        fontWeight: 600,
                        mt: 1,
                      }}
                    >
                      {item.company}
                    </Typography>
                  </Box>

                  <Chip
                    label={item.period}
                    sx={{
                      background:
                        "rgba(56,189,248,0.12)",
                      color: "#38BDF8",
                      border:
                        "1px solid rgba(56,189,248,0.20)",
                      fontWeight: 600,
                      borderRadius: "12px",
                    }}
                  />
                </Box>

                {/* ACHIEVEMENTS */}
                <Box
                  component="ul"
                  sx={{
                    pl: 2,
                    m: 0,
                  }}
                >
                  {item.achievements.map(
                    (achievement, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        sx={{
                          color: "#CBD5E1",
                          mb: 1.5,
                          lineHeight: 1.8,
                        }}
                      >
                        {achievement}
                      </Typography>
                    )
                  )}
                </Box>
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </section>
  );
}

export default Experience;