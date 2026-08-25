// import { Box, Typography, Button } from "@mui/material";
// import { motion } from "framer-motion";
// import profileImage from "../../assets/photo.jpg";

// function Hero() {
//   return (
//     <section
//       id="hero"
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background Blur */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: "-150px",
//           left: "-150px",
//           width: "400px",
//           height: "400px",
//           borderRadius: "50%",
//           background:
//             "linear-gradient(135deg, #6366f1, #8b5cf6)",
//           filter: "blur(150px)",
//           opacity: 0.25,
//         }}
//       />

//       <Box
//         sx={{
//           position: "absolute",
//           bottom: "-150px",
//           right: "-150px",
//           width: "400px",
//           height: "400px",
//           borderRadius: "50%",
//           background:
//             "linear-gradient(135deg, #06b6d4, #6366f1)",
//           filter: "blur(150px)",
//           opacity: 0.25,
//         }}
//       />

//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           gap: 6,
//           flexDirection: {
//             xs: "column-reverse",
//             md: "row",
//           },
//         }}
//       >
//         {/* LEFT CONTENT */}
//         <Box
//           sx={{
//             flex: 1,
//             zIndex: 2,
//           }}
//         >
//           <motion.div
//             initial={{ opacity: 0, x: -80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Typography
//               sx={{
//                 color: "#8b5cf6",
//                 fontWeight: 600,
//                 letterSpacing: 2,
//                 mb: 2,
//               }}
//             >
//               FULL STACK DEVELOPER
//             </Typography>

//             <Typography
//               variant="h2"
//               sx={{
//                 fontWeight: 700,
//                 mb: 2,
//                 lineHeight: 1.2,
//                 fontSize: {
//                   xs: "2.8rem",
//                   md: "4rem",
//                 },
//               }}
//             >
//               Hi, I'm
//               <br />
//               Sivasakthi
//             </Typography>

//             <Typography
//               sx={{
//                 color: "#94A3B8",
//                 fontSize: "1.1rem",
//                 maxWidth: "600px",
//                 lineHeight: 1.9,
//                 mb: 4,
//               }}
//             >
//               I build web applications with good user experience and solid backend support. 
//               I also work on automation tools, desktop apps, and AI-based systems for real-world use cases.
//             </Typography>

//             <Box
//               sx={{
//                 display: "flex",
//                 gap: 2,
//                 flexWrap: "wrap",
//               }}
//             >
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderRadius: "30px",
//                   background:
//                     "linear-gradient(135deg,#6366f1,#8b5cf6)",
//                 }}
//               >
//                 View Projects
//               </Button>

//               <Button
//                 variant="outlined"
//                 size="large"
//                 component="a"
//                 href="/resume.pdf"
//                 download="Sivasakthi_Resume.pdf"
//                 sx={{
//                   px: 4,
//                   py: 1.5,
//                   borderRadius: "30px",
//                   borderColor: "#6366f1",
//                   color: "#fff",
//                 }}
//               >
//                 Download Resume
//               </Button>
//             </Box>
//           </motion.div>
//         </Box>

//         {/* RIGHT IMAGE */}
//         <Box
//           sx={{
//             flex: 1,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             position: "relative",
//             zIndex: 2,
//           }}
//         >
//           {/* Glow */}
//           <Box
//             sx={{
//               position: "absolute",
//               width: {
//                 xs: "280px",
//                 md: "450px",
//               },
//               height: {
//                 xs: "280px",
//                 md: "450px",
//               },
//               borderRadius: "50%",
//               background:
//                 "linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)",
//               filter: "blur(100px)",
//               opacity: 0.6,
//               animation: "pulseGlow 6s infinite ease-in-out",
//             }}
//           />

//           <motion.img
//             src={profileImage}
//             alt="Sivasakthi"
//             initial={{
//               opacity: 0,
//               scale: 0.8,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 0.8,
//             }}
//             style={{
//               width: "100%",
//               maxWidth: "500px",
//               height: "500px",
//               borderRadius: "50%",
//               objectFit: "cover",
//               border: "6px solid rgba(255,255,255,0.15)",
//               boxShadow:
//                 "0 25px 60px rgba(0,0,0,0.35)",
//               animation:
//                 "floating 5s ease-in-out infinite",
//             }}
//           />
//         </Box>
//       </Box>
//     </section>
//   );
// }

// export default Hero;

import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

import profileImage from "../../assets/photo.jpg";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "#0f172a",
      }}
    >
      {/* TOP LEFT GLOW */}
      <Box
        sx={{
          position: "absolute",
          top: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#38BDF8,#0EA5E9)",
          filter: "blur(150px)",
          opacity: 0.2,
        }}
      />

      {/* BOTTOM RIGHT GLOW */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "linear-gradient(135deg,#38BDF8,#0EA5E9)",
          filter: "blur(150px)",
          opacity: 0.2,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          {/* LEFT CONTENT */}
          <Box flex={1}>
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                sx={{
                  color: "#38BDF8",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                Full Stack Engineer
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 3,
                  fontSize: {
                    xs: "3rem",
                    md: "4.5rem",
                  },
                }}
              >
                Hi, I'm
                <br />
                Sivasakthi
                <Box
                  component="span"
                  sx={{
                    color: "#38BDF8",
                  }}
                >
                  .
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: "1.1rem",
                  lineHeight: 1.9,
                  maxWidth: "650px",
                  mb: 4,
                }}
              >
                Full Stack Engineer with 3 years and 11 months of experience
                building scalable web applications, RESTful APIs, cloud-based
                solutions, and AI-powered systems using React.js, Node.js,
                MySQL, MongoDB, AWS, and Google Cloud Platform.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  href="#projects"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    background: "#38BDF8",
                    color: "#0f172a",
                    fontWeight: 600,
                    textTransform: "none",

                    "&:hover": {
                      background: "#0EA5E9",
                    },
                  }}
                >
                  View Projects
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="/resume.pdf"
                  download="Sivasakthi_Resume.pdf"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    color: "#38BDF8",
                    borderColor: "#38BDF8",
                    fontWeight: 600,
                    textTransform: "none",

                    "&:hover": {
                      borderColor: "#0EA5E9",
                      background:
                        "rgba(56,189,248,0.08)",
                    },
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            </motion.div>
          </Box>

          {/* RIGHT IMAGE */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* IMAGE GLOW */}
            <Box
              sx={{
                position: "absolute",
                width: {
                  xs: 280,
                  md: 420,
                },
                height: {
                  xs: 280,
                  md: 420,
                },
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#38BDF8,#0EA5E9)",
                filter: "blur(90px)",
                opacity: 0.35,
              }}
            />

            <motion.img
              src={profileImage}
              alt="Sivasakthi Paramasivam"
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              style={{
                width: "100%",
                maxWidth: "420px",
                height: "420px",
                objectFit: "cover",
                borderRadius: "50%",
                border:
                  "5px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "0 25px 60px rgba(0,0,0,0.35)",
                position: "relative",
                zIndex: 2,
              }}
            />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default Hero;