import { Container, Typography, Box } from "@mui/material";
import DestinationCard from "../Components/DestinationCard";

const destinations = [
  {
    name: "Mt. Kenya",
    image: "/Mt-Kenya-2.jpg",
    description:
      "Experience the breathtaking beauty of Mt. Kenya, Africa's second-highest peak.",
    groupPrice: "Ksh 21,000 per group",
    individualPrice: "Ksh 10,000 per person",
  },
  {
    name: "Mt. Ruwenzori",
    image: "/Ruwenzori.jpg",
    description:
      "Explore the mystical Ruwenzori Mountains, known for their unique flora and fauna.",
    groupPrice: "Ksh 28,000 per group",
    individualPrice: "Ksh 12,000 per person",
  },
  {
    name: "Lake Nakuru",
    image: "/Lk-Nakuru.jpg",
    description:
      "Discover the stunning landscapes and diverse wildlife of Lake Nakuru National Park.",
    groupPrice: "Ksh 16,000 per group",
    individualPrice: "Ksh 8,000 per person",
  },
  {
    name: "Tsavo National Park",
    image: "/Tsavo-NP.jpg",
    description:
      "Explore the vast wilderness of Tsavo, home to diverse wildlife and stunning scenes.",
    groupPrice: "Ksh 25,000 per group",
    individualPrice: "Ksh 12,000 per person",
  },
  {
    name: "Nairobi National Park",
    image: "/Nairobi-NP.jpg",
    description:
      "Visit Nairobi National Park, a unique wildlife reserve located just outside the city.",
    groupPrice: "Ksh 10,000 per group",
    individualPrice: "Ksh 2,000 per person",
  },
  {
    name: "Coastal Kenya",
    image: "/Coast.jpg",
    description:
      "Relax on the beautiful beaches of Coastal Kenya, which are calming and serene.",
    groupPrice: "Ksh 24,000 per group",
    individualPrice: "Ksh 13,000 per person",
  },
];

export default function Destinations() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontFamily: "'Pacifico',cursive" }}
      >
        Explore Our Destinations
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
          mb: 4,
        }}
      >
        {destinations.map((destination) => (
          <Box
            key={destination.name}
            sx={{ flexBasis: { xs: "100%", sm: "48%", md: "30%" } }}
          >
            <DestinationCard destination={destination} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
