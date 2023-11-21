import './App.css';
import {Route , Routes} from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
    </div>
  );
}

export default App;