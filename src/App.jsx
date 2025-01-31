import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import background from "./assets/images/Background.jpg";

const appStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  minHeight: "100vh",
};

const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.1)", // Adjust opacity (0.6 = 60%)
};

const App = () => {
  return (
    <div style={appStyle}>
      <div style={overlayStyle}></div>
      <MyNavbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
