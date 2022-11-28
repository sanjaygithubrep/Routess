
import './App.css';
import Nav  from './components/Nav'
import Main from './components/Main'
// import Browse from './components/Browse'
import Home from './components/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter >
      <Nav /> 
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/Home" element={<Home />} />
      {/* <Route path="/" element={<Browse />} /> */}
      </Routes>
      
      
     </BrowserRouter>
    
      
     
     
      
     
     
      
    </div>
  );
}

export default App;
