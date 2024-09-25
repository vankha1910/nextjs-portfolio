'use client';
import About from './components/About';
import Contact from './components/Contact';
import { useTheme } from './components/context';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import Skills from './components/Skills';

export default function Home() {
  const { theme } = useTheme();
  return (
    <div id='top' className={`app ${theme}`}>
      <div className='container mx-auto lg:px-10 px-4'>
        <Header></Header>
        <main>
          <About></About>
          <Project></Project>
          <Skills></Skills>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}
