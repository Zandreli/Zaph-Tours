import { Container, Typography, Box } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: "#f5f5f5",
        fontFamily: "'Pacifico', cursive",
      }}
    >
      <Container maxWidth="md" color="primary">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontFamily: "'Pacifico', cursive" }}
        >
          About Zaph Tours
        </Typography>
        <Typography variant="body1" paragraph>
          Zaph Tours is a premier safari travel company based in Kenya,
          specializing in providing the best safaris and adventure tours. With
          years of experience, we are dedicated to delivering exceptional travel
          experiences that showcase the breathtaking beauty and rich culture of
          Kenya and beyond. Zaph Tours is dedicated to providing unforgettable
          safari experiences in Kenya. Our expert guides and personalized
          itineraries ensure that you explore the rich wildlife and stunning
          landscapes of this beautiful country.
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to create memorable journeys that connect travelers
          with nature, wildlife, and local communities. We believe in
          sustainable tourism practices that benefit both our guests and the
          environments we explore.
        </Typography>
      </Container>
    </Box>
  );
}
