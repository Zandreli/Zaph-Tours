import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from "@mui/material";

const destinations = [
  {
    name: "Mt. Kenya",
    image: "/Mt-Kenya-2.jpg",
    description: "Experience the majestic climb of Mt. Kenya.",
    price: "Ksh. 10000 per person",
  },
  {
    name: "Mt. Ruwenzori",
    image: "/Ruwenzori.jpg",
    description: "Explore the breathtaking Ruwenzori mountains.",
    price: "Ksh. 12000 per person",
  },
  {
    name: "Lake Nakuru",
    image: "/LK-nakuru2.jpg",
    description: "Discover the beauty of Lake Nakuru National Park.",
    price: "Ksh. 8000 per person",
  },
  {
    name: "Tsavo National Park",
    image: "/Tsavo-NP.jpg",
    description: "Experience the wildlife of Tsavo National Park.",
    price: "Ksh. 12000 per person",
  },
  {
    name: "Nairobi National Park",
    image: "/Nairobi-NP.jpg",
    description: "Visit the unique Nairobi National Park.",
    price: "Ksh. 2000 per person",
  },
  {
    name: "Coastal Kenya",
    image: "/Coast.jpg",
    description: "Relax on the beautiful beaches of Coastal Kenya.",
    price: "Ksh. 13000 per person",
  },
];

export default function FeaturedDestination() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography
        variant="h4"
        component={"h2"}
        gutterBottom
        sx={{ fontFamily: "'Pacifico', cursive" }}
      >
        Featured Destinations
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {destinations.map((destination) => (
          <Box
            key={destination.name}
            sx={{
              flexBasis: { xs: "100%", sm: "48%", md: "30%" },
              boxSizing: "border-box",
            }}
          >
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={destination.image}
                alt={destination.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {destination.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {destination.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  {destination.price}
                </Typography>
                <CardActions>
                  <Button sx={{ mt: 2 }} variant="contained" color="secondary" size="small">
                    Book Now
                  </Button>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
