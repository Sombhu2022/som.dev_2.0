
import './global.css';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    Aos.init(
        {
            duration:1500,
            debounceDelay:1000
        }
    );
    Aos.refresh();
    
}, []);

  return (
    <div>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
