import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Snackbar,
  Alert,
  Link as MuiLink,
} from "@mui/material";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";


import { useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setOpen(true);
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "center",
        }}
      >
        {/* Contact Form */}
        <Box sx={{ flex: 1 }}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h6">Get in Touch with Us</Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField label="Name" variant="outlined" fullWidth required />
              <TextField label="Email" variant="outlined" fullWidth required />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Send Message
              </Button>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Our Contact Information
          </Typography>
          <Typography>Email: info@zaphtours.co.ke</Typography>
          <Typography>Phone: +254 712 345 678</Typography>
          <Typography>Address: 123 Safari Avenue, Nairobi, Kenya </Typography>

          <Box sx={{ my: 3 }}>
            <Typography variant="h6"> Office Hours </Typography>
            <Typography>Monday - Friday: 9 AM - 5 PM</Typography>
            <Typography>Saturday: 10 AM - 2 PM</Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <MuiLink href="#" target="_blank" rel="noopener" color="inherit">
              <TwitterIcon fontSize="large" />
            </MuiLink>
            <MuiLink href="#" target="_blank" rel="noopener" color="inherit">
              <FacebookIcon fontSize="large" />
            </MuiLink>
            <MuiLink href="#" target="_blank" rel="noopener" color="inherit">
              <InstagramIcon fontSize="large" />
            </MuiLink>
          </Box>

          <Box sx={{ mt: 4 }}>
            <iframe
              title="Zaph Tours Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.123456789012!2d36.82194631512345!3d-1.2920669999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f123456789012%3A0x1234567890123456!2sZaph%20Tours%20Office!5e0!3m2!1sen!2ske!4v1612345678901"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%"}}
            >
              Thank you for contacting us! We will get back to you as soon as possible.
            </Alert>
        </Snackbar>
    </Container>
  );
}
