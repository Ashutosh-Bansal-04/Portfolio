import { Container, Row, Col, Card } from "react-bootstrap";
import project1 from "../assets/images/Spotify.png";
import project2 from "../assets/images/Task-Manager.png";

const projects = [
  {
    title: "Spotify-Clone",
    description:
      "A Clone project having max. similarities with the original one.",
    image: project1,
    link: "https://ashutosh-bansal-105.github.io/Spotify-Clone/",
  },
  {
    title: "Task-Manager",
    description: "Another amazing project. It can perform all CRUD operations",
    image: project2,
    link: "https://ashutosh-bansal-04.github.io/Task-Manager",
  },
];

const Projects = () => {
  return (
    <Container
      id="projects"
      fluid
      className="d-flex align-items-center justify-content-center bg-light"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <h2 className="text-center fw-bold mb-4">My Projects</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={5} className="mb-4 d-flex align-items-stretch" key={index}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", flex: "1" }}
              >
                <Card className="shadow-lg border-0 hover-zoom h-100">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="p-3 border rounded"
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="flex-grow-1">
                      {project.description}
                    </Card.Text>
                    <Card.Link
                      href={project.link}
                      target="_blank"
                      className="stretched-link"
                    ></Card.Link>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
