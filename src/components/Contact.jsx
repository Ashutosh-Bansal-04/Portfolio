import { Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container id="contact" fluid className="d-flex align-items-center justify-content-center text-white" 
      style={{ minHeight: "100vh", background: "url('https://source.unsplash.com/1600x900/?technology,office') center/cover no-repeat" }}>
      <Container className="p-5 bg-dark bg-opacity-75 rounded">
        <h2 className="text-center fw-bold mb-4">Contact Me</h2>
        <Form className="mx-auto" style={{ maxWidth: "500px" }}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control as="textarea" rows={3} placeholder="Your Message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Send Message
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Contact;
