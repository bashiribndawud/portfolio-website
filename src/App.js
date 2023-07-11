import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';
import ScrollTop from './components/ScrollTop/ScrollTop';
import Services from './components/Services/Services';
import Skills from './components/Skill/Skills';
import Testimonial from './components/Testimonial/Testimonial';
function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Testimonial />
        <Contact />
      </main>
        <Footer />
        <ScrollTop />
    </>
  );
}

export default App;
