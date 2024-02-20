import './home.scss'
import Slider from '../../Components/Slider/Slider'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
// import ParticlesComp from '../../Components/Particles/Particles'

const Home = () => {
    return (
        <div className='home'>
            <Slider />
            <FeaturedProduct type="Featured" />
            <Categories />
            <FeaturedProduct type="Trending" />
            <Contact />
        </div>
    )
}

export default Home