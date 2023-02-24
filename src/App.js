import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './comoponents/Navbar';
import Container from './comoponents/Container';
import Home from './page/Home';
import SignUp from './page/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Container>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      </Container>
      </BrowserRouter> 
    </div>
  );
}

export default App;
