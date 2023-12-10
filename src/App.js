import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import Home from './pages/Home.jsx';


function App() {
  return (
    <Router>
      <button>hii click me</button>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </Router>
    
   
  );
}

export default App;
