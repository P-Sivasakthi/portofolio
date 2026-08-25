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
//         padding: "120px 0",
//         background: "#0f172a",
//       }}
//     >
//       <Container maxWidth="md">
//         {/* Heading */}
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
//             mb: 6,
//             maxWidth: "650px",
//             mx: "auto",
//           }}
//         >
//           Feel free to reach out for opportunities, collaborations,
//           freelance projects, or technology discussions.
//         </Typography>

//         {/* Contact Card */}
//         <Paper
//           elevation={0}
//           sx={{
//             p: { xs: 3, md: 5 },
//             borderRadius: "20px",
//             background: "rgba(255,255,255,0.03)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             backdropFilter: "blur(10px)",
//             textAlign: "center",
//           }}
//         >
//           {/* Contact Details */}
//           <Stack spacing={3} sx={{ mb: 5 }}>
//             {/* Email */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: 1.5,
//                 color: "#38BDF8",
//               }}
//             >
//               <FaEnvelope size={18} />
//               <Typography sx={{ color: "#fff" }}>
//                 yourmail@gmail.com
//               </Typography>
//             </Box>

//             {/* Phone */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: 1.5,
//                 color: "#38BDF8",
//               }}
//             >
//               <FaPhone size={18} />
//               <Typography sx={{ color: "#fff" }}>
//                 +91 98765 43210
//               </Typography>
//             </Box>

//             {/* LinkedIn */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: 1.5,
//                 color: "#38BDF8",
//               }}
//             >
//               <FaLinkedin size={18} />
//               <Typography sx={{ color: "#fff" }}>
//                 linkedin.com/in/yourprofile
//               </Typography>
//             </Box>

//             {/* GitHub */}
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 gap: 1.5,
//                 color: "#38BDF8",
//               }}
//             >
//               <FaGithub size={18} />
//               <Typography sx={{ color: "#fff" }}>
//                 github.com/yourusername
//               </Typography>
//             </Box>
//           </Stack>

//           {/* Action Buttons */}
//           <Stack
//             direction={{ xs: "column", sm: "row" }}
//             spacing={2}
//             justifyContent="center"
//           >
//             {/* Email */}
//             <Button
//               variant="contained"
//               href="mailto:yourmail@gmail.com"
//               startIcon={<FaEnvelope />}
//               sx={{
//                 background: "#38BDF8",
//                 color: "#0f172a",
//                 textTransform: "none",
//                 fontWeight: 600,
//                 px: 3,
//                 "&:hover": {
//                   background: "#0EA5E9",
//                 },
//               }}
//             >
//               Email Me
//             </Button>

//             {/* Call */}
//             <Button
//               variant="outlined"
//               href="tel:+919876543210"
//               startIcon={<FaPhone />}
//               sx={{
//                 color: "#38BDF8",
//                 borderColor: "#38BDF8",
//                 textTransform: "none",
//                 fontWeight: 600,
//                 px: 3,
//                 "&:hover": {
//                   borderColor: "#0EA5E9",
//                   background: "rgba(56,189,248,0.08)",
//                 },
//               }}
//             >
//               Call Me
//             </Button>

//             {/* LinkedIn */}
//             <Button
//               variant="outlined"
//               href="https://linkedin.com/in/yourprofile"
//               target="_blank"
//               startIcon={<FaLinkedin />}
//               sx={{
//                 color: "#38BDF8",
//                 borderColor: "#38BDF8",
//                 textTransform: "none",
//                 fontWeight: 600,
//                 px: 3,
//                 "&:hover": {
//                   borderColor: "#0EA5E9",
//                   background: "rgba(56,189,248,0.08)",
//                 },
//               }}
//             >
//               LinkedIn
//             </Button>
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
  Button,
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
      <Container maxWidth="lg">
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

            border:
              "1px solid rgba(255,255,255,0.08)",

            backdropFilter: "blur(10px)",

            transition: "all 0.3s ease",

            "&:hover": {
              border:
                "1px solid rgba(56,189,248,0.25)",
            },
          }}
        >
          {/* CONTACT INFO */}
          <Stack
            spacing={3}
            sx={{
              mb: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <FaEnvelope
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                yourmail@gmail.com
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <FaPhone
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                +91 98765 43210
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <FaLinkedin
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                linkedin.com/in/yourprofile
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <FaGithub
                size={18}
                color="#38BDF8"
              />

              <Typography
                sx={{
                  color: "#fff",
                }}
              >
                github.com/yourusername
              </Typography>
            </Box>
          </Stack>

          {/* ACTION BUTTONS */}
          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              href="mailto:yourmail@gmail.com"
              startIcon={<FaEnvelope />}
              sx={{
                background: "#38BDF8",

                color: "#0f172a",

                fontWeight: 600,

                textTransform: "none",

                borderRadius: "12px",

                px: 3,

                "&:hover": {
                  background: "#0EA5E9",
                },
              }}
            >
              Email Me
            </Button>

            <Button
              variant="outlined"
              href="tel:+919876543210"
              startIcon={<FaPhone />}
              sx={{
                color: "#38BDF8",

                borderColor: "#38BDF8",

                fontWeight: 600,

                textTransform: "none",

                borderRadius: "12px",

                px: 3,

                "&:hover": {
                  borderColor: "#0EA5E9",

                  background:
                    "rgba(56,189,248,0.08)",
                },
              }}
            >
              Call Me
            </Button>

            <Button
              variant="outlined"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              startIcon={<FaLinkedin />}
              sx={{
                color: "#38BDF8",

                borderColor: "#38BDF8",

                fontWeight: 600,

                textTransform: "none",

                borderRadius: "12px",

                px: 3,

                "&:hover": {
                  borderColor: "#0EA5E9",

                  background:
                    "rgba(56,189,248,0.08)",
                },
              }}
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              href="https://github.com/yourusername"
              target="_blank"
              startIcon={<FaGithub />}
              sx={{
                color: "#38BDF8",

                borderColor: "#38BDF8",

                fontWeight: 600,

                textTransform: "none",

                borderRadius: "12px",

                px: 3,

                "&:hover": {
                  borderColor: "#0EA5E9",

                  background:
                    "rgba(56,189,248,0.08)",
                },
              }}
            >
              GitHub
            </Button>
          </Stack>
        </Paper>
      </Container>
    </section>
  );
}

export default Contact;