import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface Destination {
  name: string;
  image: string;
  description: string;
  groupPrice: number | string;
  individualPrice: number | string;
}

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="140"
        image={destination.image}
        alt={destination.name}
      />
      <CardContent>
        <Typography variant="h6">{destination.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {destination.description}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          Group Price: {destination.groupPrice}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          Individual Price: {destination.individualPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" variant="contained">View Details</Button>
      </CardActions>
    </Card>
  );
}
