import './home.scss'
import Slider from '../../Components/Slider/Slider'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'

const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeaturedProduct type="Featured"/>
            <FeaturedProduct type="Trending"/>
        </div>
    )
}

export default Home