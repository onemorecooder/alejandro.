import './App.css';
import MainBanner from './components/Banner/MainBanner';
import Company from './components/Company/Company';
import Form from './components/Form/Form';
import MyGlobe from './components/Form/Globe';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import ThemeProvider from './components/ThemeProvider';

function App() {
  return (

    <ThemeProvider>
    <div className="bg-background text-font h-full transition-colors duration-500">
      <Navbar />
      <MainBanner />
      <Skills />
      <Company />
      <Form />
      <MyGlobe />
    </div>
    </ThemeProvider>
  );
}

export default App;
