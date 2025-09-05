import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-gray-100">
      
      {/* Sticky Header */}
      <Header />
       <Hero />
      <SocialIcons />
      <About />
      <Experience />
      <Skills />
      <hr class="mt-16 border-gray-600" />
      <Footer />
    </div>
  );
}

export default App;
