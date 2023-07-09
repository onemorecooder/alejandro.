import './App.css';
import MainBanner from './components/Banner/MainBanner';
import Company from './components/Company/Company';
import Form from './components/Form/Form';
import MyGlobe from './components/Form/Globe';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="bg-black h-full">
      <Navbar />
      <MainBanner />
      <Skills />
      <Company />
      <Form />
      <MyGlobe />
    </div>
  );
}

export default App;
