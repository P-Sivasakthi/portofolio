// import {
//   Box,
//   Typography,
//   Paper,
//   Container,
//   Stack,
//   Button,
// } from "@mui/material";

// import {
//   FaLinkedin,
//   FaEnvelope,
//   FaPhone,
//   FaGithub,
// } from "react-icons/fa";

// function Contact() {
//   return (
//     <section
//       id="contact"
//       style={{
//         padding: "70px 0",
//         background: "#0f172a",
//       }}
//     >
//       <Container maxWidth="md">
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
//           Let's Connect
//         </Typography>

//         <Typography
//           sx={{
//             textAlign: "center",
//             color: "#94A3B8",
//             mb: 8,
//             maxWidth: "700px",
//             mx: "auto",
//             lineHeight: 1.8,
//           }}
//         >
//           Feel free to reach out for opportunities, collaborations,
//           freelance projects, or technology discussions.
//         </Typography>

//         {/* CONTACT CARD */}
//         <Paper
//           elevation={0}
//           sx={{
//             maxWidth: "900px",
//             mx: "auto",

//             p: {
//               xs: 4,
//               md: 5,
//             },

//             borderRadius: "20px",

//             background: "rgba(255,255,255,0.03)",

//             border:
//               "1px solid rgba(255,255,255,0.08)",

//             backdropFilter: "blur(10px)",

//             transition: "all 0.3s ease",

//             "&:hover": {
//               border:
//                 "1px solid rgba(56,189,248,0.25)",
//             },
//           }}
//         >
//           {/* CONTACT INFO */}
//           <Stack
//             spacing={3}
//             sx={{
//               mb: 0.7,
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 2,
//               }}
//             >
//               <FaEnvelope
//                 size={18}
//                 color="#38BDF8"
//               />

//               <Typography
//                 sx={{
//                   color: "#fff",
//                 }}
//               >
//                 sivasakthi.dev2025@gmail.com
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 2,
//               }}
//             >
//               <FaPhone
//                 size={18}
//                 color="#38BDF8"
//               />

//               <Typography
//                 sx={{
//                   color: "#fff",
//                 }}
//               >
//                 +91 90253 18113
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 2,
//               }}
//             >
//               <FaLinkedin
//                 size={18}
//                 color="#38BDF8"
//               />

//               <Typography
//                 sx={{
//                   color: "#fff",
//                 }}
//                 >
//                   linkedin.com/in/yourprofile
//               </Typography>
//             </Box>

//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 gap: 2,
//               }}
//             >
//               <FaGithub
//                 size={18}
//                 color="#38BDF8"
//               />

//               <Typography
//                 sx={{
//                   color: "#fff",
//                 }}
//               >
//                 github.com/yourusername
//               </Typography>
//             </Box>
//           </Stack>
//         </Paper>
//       </Container>
//     </section>
//   );
// }

// export default Contact;

import {
  Box,
  Typography,
  Paper,
  Container,
  Stack,
} from "@mui/material";

import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "70px 0",
        background: "#0f172a",
      }}
    >
      <Container maxWidth="md">

        {/* SECTION TITLE */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 2,
            color: "#fff",
          }}
        >
          Let's Connect
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
          Feel free to reach out for opportunities, collaborations,
          freelance projects, or technology discussions.
        </Typography>

        {/* CONTACT CARD */}
        <Paper
          elevation={0}
          sx={{
            maxWidth: "900px",
            mx: "auto",

            p: {
              xs: 4,
              md: 5,
            },

            borderRadius: "20px",

            background: "rgba(255,255,255,0.03)",

            border: "1px solid rgba(255,255,255,0.08)",

            backdropFilter: "blur(10px)",

            transition: "all 0.3s ease",

            "&:hover": {
              border: "1px solid rgba(56,189,248,0.25)",
            },
          }}
        >

          {/* CONTACT INFO */}
          <Stack
            spacing={3}
            sx={{
              mb: 0.7,
            }}
          >

            {/* EMAIL */}
            <Box
              component="a"
              href="mailto:sivasakthi.dev2025@gmail.com"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <FaEnvelope
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#38BDF8",
                  },
                }}
              >
                sivasakthi.dev2025@gmail.com
              </Typography>
            </Box>

            {/* PHONE */}
            <Box
              component="a"
              href="tel:+919025318113"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <FaPhone
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#38BDF8",
                  },
                }}
              >
                +91 90253 18113
              </Typography>
            </Box>

            {/* LINKEDIN */}
            <Box
              component="a"
              href="https://www.linkedin.com/in/sivasakthi-dev/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <FaLinkedin
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#38BDF8",
                  },
                }}
              >
                linkedin.com/in/sivasakthi-dev
              </Typography>
            </Box>

            {/* GITHUB */}
            <Box
              component="a"
              href="https://github.com/P-Sivasakthi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              <FaGithub
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                  "&:hover": {
                    color: "#38BDF8",
                  },
                }}
              >
                github.com/P-Sivasakthi
              </Typography>
            </Box>

          </Stack>
        </Paper>
      </Container>
    </section>
  );
}

export default Contact;