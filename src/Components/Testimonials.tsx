import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { useState } from "react";

interface Testimonial {
  name: string;
  image: string;
  shortDescription: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vivene W.",
    image: "/Testimonials/Viv.jpg",
    shortDescription:
      "The best experience I've had with a service like this. Highly recommend!",
  },
  {
    name: "John D.",
    image: "/Testimonials/John.jpg",
    shortDescription: "An amazing experience for my first tour in Kenya.",
  },
  {
    name: "Kingstone W.",
    image: "/Testimonials/Kingstone.jpg",
    shortDescription: "Its my second time with them and they never disappoint.",
  },
  {
    name: "Martha K.",
    image: "/Testimonials/Martha.jpg",
    shortDescription: "A wonderful experience that I will cherish forever.",
  },
  {
    name: "Victor K.",
    image: "/Testimonials/Victor.jpg",
    shortDescription:
      "Touring with them was a great decision. They made everything easy and enjoyable.",
  },
  {
    name: "Sarah L.",
    image: "/Testimonials/Sarah.jpg",
    shortDescription:
      "Their attention to detail and customer service is unmatched.",
  },
];

export default function Testimonials() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Container sx={{ p: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontFamily: "'Pacifico', cursive" }}
      >
        Testimonials
      </Typography>
      <Box
        sx={{
          display: "flex",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          },
          gap: 3,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.name}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              transition: "0.3s",
              textAlign: "center",
              p: 2,
              ":hover": { boxShadow: 6 },
            }}
          >
            <Avatar
              src={testimonial.image}
              alt={testimonial.name}
              sx={{ width: 90, height: 90, mx: "auto", mb: 2 }}
            />
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {hovered === index || testimonial.shortDescription.length <= 50
                  ? testimonial.shortDescription
                  : testimonial.shortDescription.substring(0, 50)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
