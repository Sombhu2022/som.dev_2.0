import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './global.css';
import Home from './pages/Home.jsx';
import Header from './pages/Header.jsx';
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {
  return (
    <Router>
      <Header/>
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
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>

    </Router>
    
   
  );
}

export default App;
