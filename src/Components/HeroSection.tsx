import { Box, Typography } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url('/hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Typography
        variant="h2"
        component="h1"
        sx={{
          position: "relative",
          zIndex: 1,
          fontWeight: "bold",
          fonSize: { xs: "2rem", sm: "3rem", md: "4rem" },
        }}
      >
        Best Safari Tours in Kenya
      </Typography>
    </Box>
  );
}
