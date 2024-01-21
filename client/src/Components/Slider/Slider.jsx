import './slider.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const data = [
        "/images/slider_01.jpg",
        "/images/slider_02.jpg",
        "/images/slider_03.jpg",
    ]

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
    }

    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIcon />
                </div>
            </div>
        </div>
    )
}

export default Slider