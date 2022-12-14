import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Experience from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Portfolio from './components/Portfolio/portfolio';
import Services from './components/Services/services';
import Testimonial from './components/Testimonial/testimonial';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
