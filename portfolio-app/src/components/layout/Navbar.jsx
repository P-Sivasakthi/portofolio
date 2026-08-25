import { AppBar, Toolbar, Typography, Box } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(15,23,42,0.8)",
        backdropFilter: "blur(15px)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sivasakthi
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;