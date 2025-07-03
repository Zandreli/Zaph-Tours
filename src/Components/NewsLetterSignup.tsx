import { useState } from "react";
import { Container, Box, Typography, Button, TextField } from "@mui/material";

export default function NewsLetterSignup() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    console.log(`You have subscribed with: ${email}`);
    alert("Thank you for subscribing");
    setEmail("");
  };

  return (
    <Container sx={{ py: 8, textAlign: "center" }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 2,
          backgroundColor: "#f0f4f8",
          minWidth: 300,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "700" }}>
          Join our Newsletter
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Sign up to receive the latest travel tips, destination guides, and
          exclusive offers.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            label="Enter your email address"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubscribe}
            sx={{ whiteSpace: "nowrap" }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
