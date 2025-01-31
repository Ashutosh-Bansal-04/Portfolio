import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const heroStyle = {
  color: "white",
};

const Hero = () => {
  return (
    <Container
      fluid
      style={heroStyle}
      className="--bs-emphasis-color vh-100 d-flex flex-column justify-content-center align-items-center text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="display-4 fw-bold"
      >
        Hi, I'm <span className="text-primary">Ashutosh Bansal</span>
      </motion.h1>
      <p style={heroStyle} className="lead mt-3">
        Web Developer | UI/UX Enthusiast
      </p>
    </Container>
  );
};

export default Hero;
