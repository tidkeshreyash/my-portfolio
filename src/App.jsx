import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import SocialIcons from './components/SocialIcons';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';

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

      {/* Scrollable Content */}
      <main className="space-y-20">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-white">Home Section</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-white">About Section</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-white">Education Section</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-white">Experience Section</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-white">Projects Section</h1>
        </section>
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-5xl text-white">Contact Section</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
