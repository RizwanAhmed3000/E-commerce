import './featuredProduct.scss'

const FeaturedProduct = ({ type }) => {
    const dummyData = [
        {
            id: 1,
            img: "/images/product_04.jpg",
            title: "hoddie",
            oldPrice: 75,
            newPrice: 60
        },
        {
            id: 2,
            img: "/images/product_07.jpg",
            title: "Pull over",
            oldPrice: 100,
            newPrice: 85
        },
        {
            id: 3,
            img: "/images/product_08b.jpg",
            title: "Sweater",
            oldPrice: 75,
            newPrice: 60
        },
        {
            id: 4,
            img: "/images/product_06.jpg",
            title: "hoddie",
            oldPrice: 75,
            newPrice: 60
        },
    ]
    return (
        <div className='fProduct'>FeaturedProduct</div>
    )
}

export default FeaturedProduct