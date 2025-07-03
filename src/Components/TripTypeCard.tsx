import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";

interface TripType {
  title: string;
  images: string[];
  description: string;
  pricing: string;
}

export default function TripTypeCard({ trip }: { trip: TripType }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {trip.images.map((image, index) => (
          <CardMedia
            key={index}
            component="img"
            image={image}
            height="100"
            alt={`${trip.title} ${index + 1}`}
            sx={{ flex: "1 0 30%", objectFit: "cover", borderRadius: 1 }}
          />
        ))}
      </Box>

      <CardContent>
        <Typography variant="h6">{trip.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {trip.description}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          {trip.pricing}
        </Typography>
      </CardContent>

      <CardActions sx={{ mt: "auto" }}>
        <Button size="small" variant="contained" color="primary">
          Book Now
        </Button>
      </CardActions>
    </Card>
  );
}
