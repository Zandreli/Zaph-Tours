import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        py: 4,
        mt: 8,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Zaph Tours
          </Typography>
          <Typography variant="body2">Best Safaris and Adventures</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Link component={RouterLink} to="/" color="inherit" underline="hover">
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/destinations"
            color="inherit"
            underline="hover"
          >
            Destinations
          </Link>
          <Link
            component={RouterLink}
            to="/trip-types"
            color="inherit"
            underline="hover"
          >
            Trip Types
          </Link>
          <Link
            component={RouterLink}
            to="/blog"
            color="inherit"
            underline="hover"
          >
            Blog
          </Link>
          <Link
            component={RouterLink}
            to="/contact"
            color="inherit"
            underline="hover"
          >
            Contact
          </Link>
        </Box>

        <Box>
          <IconButton href="#" target="_blank" sx={{ color: "#fff" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: "#fff" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton href="#" target="_blank" sx={{ color: "#fff" }}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>

      <Container sx={{ textAlign: "center", mt: 2 }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Zaph Tours. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
