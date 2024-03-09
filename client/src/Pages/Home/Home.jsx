import './home.scss'
import Slider from '../../Components/Slider/Slider'
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct'
import Categories from '../../Components/Categories/Categories'
import Contact from '../../Components/Contact/Contact'
import ParticlesComp from '../../Components/Particles/Particles'

const Home = () => {
    // console.log("first")
    return (
        <div className='home'>
            <Slider />
            <FeaturedProduct type="Featured" />
            <Categories />
            <FeaturedProduct type="Trending" />
            <Contact />
            {/* <ParticlesComp /> */}
        </div>
    )
}

export default Home