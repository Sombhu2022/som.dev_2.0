import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import ContactMe from './pages/ContactMe.jsx';
import AboutMe from './pages/AboutMe.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='#about' element={<AboutMe/>}/>
        <Route path='#contactMe' element={<ContactMe/>}/>
        <Route path='#project' element={<Projects/>}/>
        <Route path='#skills' element={<Skills/>}/>
       </Routes> */}
      
      
      {/* <Swiper
       spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>

      </Swiper> */}
      

    </div>
    
   
  );
}

export default App;
