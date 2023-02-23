import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './comoponents/HeroSection';
import Navbar from './comoponents/Navbar';

import Container from './comoponents/Container';

function App() {
  return (
    <div className="App">
      <Container>
      <Navbar/>
      <HeroSection/>
      </Container>
    </div>
  );
}

export default App;
