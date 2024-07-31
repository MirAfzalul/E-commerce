import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import "./Slider.scss"
import { useState } from 'react';
const Slider = () => {
const [currentSlide,SetCurrentSlide]=useState(0)
const prevSlide=()=>{
    SetCurrentSlide(currentSlide===0?3:(prev)=>prev - 1)
}
const nextSlide=()=>{
    SetCurrentSlide(currentSlide===3?0:(prev)=>prev + 1)
}

    
  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
            <img src='images/slider1.jpg' alt=''/>
            <img src='images/slider2.jpg' alt=''/>
            <img src='images/slider3.jpg' alt=''/>
            <img src='images/slider4.jpg' alt=''/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider