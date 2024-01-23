import './home.scss'
import Slider from '../../Components/Slider/Slider'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'
import Categories from '../../Components/Categories/Categories'

const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeaturedProduct type="Featured" />
            <Categories />
            <FeaturedProduct type="Trending" />
        </div>
    )
}

export default Home