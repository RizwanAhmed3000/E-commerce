import Card from '../Card/Card'
import './featuredProduct.scss'

const FeaturedProduct = ({ type }) => {
    const dummyData = [
        {
            id: 1,
            img: "/images/product_04.jpg",
            img2: "/images/product_04b.jpg",
            isNew: true,
            title: "hoddie",
            oldPrice: 75,
            newPrice: 60
        },
        {
            id: 2,
            img: "/images/product_07.jpg",
            img2: "/images/product_07b.jpg",
            isNew: true,
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
        <div className='fProduct'>
            <div className="top">
                <h1>{type} Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae vitae aspernatur quasi molestiae error ducimus earum quibusdam illo maxime optio minus dolorem autem quas consectetur animi facere nemo repellendus quia, amet saepe vero aut nostrum. Eveniet rerum dicta consequatur quisquam, tempore, consequuntur tenetur laborum minus perferendis eaque cupiditate saepe, ipsam mollitia repellendus dolores! Illo doloremque nostrum aliquid incidunt nihil minima debitis, culpa natus perferendis sapiente, eaque consequuntur magni laboriosam vel.</p>
            </div>
            <div className="bottom">
                {
                    dummyData.map((item) => (
                        <Card item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default FeaturedProduct