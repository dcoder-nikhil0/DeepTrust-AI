import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Container,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "emailjs-com";
// import ast from "../../assets/assets1.webp";

const StyledSection = styled(Box)({
  backgroundColor: "#f9fafb",
  borderRadius: "16px",
  padding: "24px",
  margin: "24px",
  textAlign: "center",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
});

const ContactForm = () => {
  const [service, setService] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formErrors, setFormErrors] = React.useState({
    name: false,
    email: false,
    contact: false,
    message: false,
  });

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !email || !contact || !message) {
      setFormErrors({
        name: !name,
        email: !email,
        contact: !contact,
        message: !message,
      });
      return;
    }

    // EmailJS configuration
    const serviceID = "service_yv5cbaw";
    const templateID = "template_lxtb9na";
    const userID = "BzeILQkfCQQ4Ezl8w";

    const templateParams = {
      name,
      email,
      contact,
      service,
      message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        // Reset form fields and errors after successful submission
        setName("");
        setEmail("");
        setContact("");
        setService("");
        setMessage("");
        setFormErrors({
          name: false,
          email: false,
          contact: false,
          message: false,
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };

  return (
    <Box py={8} bgcolor="#ECF0F1">
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              height={{ xs: "300px", md: "100%" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <StyledImage src={''} alt="Contact Us" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledSection>
              <Typography variant="h4" component="h1" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" paragraph>
                Feel free to reach out to us! Whether you have a question,
                feedback, or a collaboration proposal, we did love to hear from
                you.
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={formErrors.name}
                    helperText={formErrors.name && "Name is required"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={formErrors.email}
                    helperText={formErrors.email && "Email is required"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Contact"
                    variant="outlined"
                    fullWidth
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    error={formErrors.contact}
                    helperText={formErrors.contact && "Contact is required"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel id="service-label">Select Service</InputLabel>
                    <Select
                      labelId="service-label"
                      value={service}
                      onChange={handleServiceChange}
                      label="Select Service"
                    >
                      <MenuItem value="web-designing">Web Designing</MenuItem>
                      <MenuItem value="graphic-designing">
                        Graphic Designing
                      </MenuItem>
                      <MenuItem value="video-editing">Video Editing</MenuItem>
                      <MenuItem value="social-media-handling">
                        Social Media Handling
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    error={formErrors.message}
                    helperText={formErrors.message && "Message is required"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </StyledSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactForm;
