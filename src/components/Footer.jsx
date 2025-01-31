import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Import icons

const footerStyle = {
  position: "relative",
  padding: "20px",
  textAlign: "center",
  backgroundColor: "#333", // Dark footer background
  color: "white",
  bottom: 0,
  width: "100%",
};

const iconStyle = {
  fontSize: "1.5rem",
  margin: "0 15px",
  cursor: "pointer",
  transition: "color 0.3s",
};

const iconHoverStyle = {
  color: "#007bff", // Change color on hover
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <FontAwesomeIcon
          icon={faLinkedin}
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = "")}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ashutosh-bansal-7838a7211",
              "_blank"
            )
          }
        />
        <FontAwesomeIcon
          icon={faGithub}
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = "")}
          onClick={() =>
            window.open("https://github.com/Ashutosh-Bansal-04", "_blank")
          }
        />
        <FontAwesomeIcon
          icon={faTwitter}
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = "")}
          onClick={() => window.open("https://x.com/Ashutosh04105", "_blank")}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          style={iconStyle}
          onMouseOver={(e) => (e.target.style.color = iconHoverStyle.color)}
          onMouseOut={(e) => (e.target.style.color = "")}
          onClick={() => window.open("https://www.instagram.com", "_blank")}
        />
      </div>
      <p>&copy; 2025 Ashutosh Bansal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
