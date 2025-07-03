import { Container, Typography, Box } from "@mui/material";
import TripTypeCard from "../Components/TripTypeCard";

const tripTypes = [
  {
    title: "Honeymoon",
    images: [
      "/TripTypes/HM1.jpg",
      "/TripTypes/HM2.jpg",
      "/TripTypes/HM3.jpg",
      "/TripTypes/HM4.jpg",
    ],
    description: "A romantic getaway for newlyweds.",
    pricing: "Starting at Ksh. 50,000 per couple",
  },
  {
    title: "Family",
    images: [
      "/TripTypes/F1.jpg",
      "/TripTypes/F2.jpg",
      "/TripTypes/F3.jpg",
      "/TripTypes/F4.jpg",
    ],
    description: "Fun-filled adventures for the whole family.",
    pricing: "Family packages starting at Ksh. 40,000",
  },
  {
    title: "Adventure",
    images: [
      "/TripTypes/A1.jpg",
      "/TripTypes/A4.jpg",
      "/TripTypes/A3.jpg",
      "/TripTypes/A2.jpg",
    ],
    description: "Thrilling experiences for the adventurous spirit.",
    pricing: "Prices starting from Ksh. 20,000",
  },
  {
    title: "Cultural Tours",
    images: ["/TripTypes/CT1.jpg", "/TripTypes/CT2.jpg", "/TripTypes/CT3.jpg"],
    description: "Experience the rich heritage and traditions of Kenya.",
    pricing: "Cultural tour prices starting from Ksh. 15,000",
  },
  {
    title: "Wildlife Safaris",
    images: ["/TripTypes/WS1.jpg", "/TripTypes/WS2.jpg", "/TripTypes/WS3.jpg"],
    description: "Explore Kenya's stunning wildlife and natural beauty.",
    pricing: "Wildlife safari packages starting at Ksh. 30,000",
  },
  {
    title: "Eco Tours",
    images: ["/TripTypes/ET1.jpg", "/TripTypes/ET2.jpg", "/TripTypes/ET3.jpg"],
    description: "Sustainable travel experiences that protect the environment.",
    pricing: "Eco tour packages starting at Ksh. 25,000",
  },
  {
    title: "Luxury Vacations",
    images: ["/TripTypes/LV1.jpg", "/TripTypes/LV2.jpg"],
    description: "Indulge in the finest accommodations and services.",
    pricing: "Luxury vacation packages starting at Ksh. 100,000",
  },
  {
    title: "Beach Holiday",
    images: ["/TripTypes/BH1.jpg", "/TripTypes/BH2.jpg"],
    description: "Relax and unwind on Kenya's beautiful beaches.",
    pricing: "Beach holiday packages starting at Ksh. 30,000",
  },
  {
    title: "Wellness Retreats",
    images: ["/TripTypes/WR1.jpg", "/TripTypes/WR2.jpg"],
    description: "Rejuvenate your mind and body with our wellness retreats.",
    pricing: "Wellness retreat packages starting at Ksh. 20,000",
  },
  {
    title: "Culinary Tours",
    images: ["/TripTypes/CuT1.jpg", "/TripTypes/CuT2.jpg"],
    description: "Savor the flavors of Kenya with our culinary tours.",
    pricing: "Culinary tour packages starting at Ksh. 15,000",
  },
];
export default function TripTypes() {
  return (
    <Container sx={{ p: 8 }}>
      <Typography variant="h4" gutterBottom>
        Explore Our Trip Types
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {tripTypes.map((trip) => (
          <Box
            key={trip.title}
            sx={{
              flexBasis: { xs: "100%", sm: "48%", md: "30%" },
              boxSizing: "border-box",
            }}
          >
            <TripTypeCard trip={trip} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
