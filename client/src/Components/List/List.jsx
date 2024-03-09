import './list.scss'
import Card from '../Card/Card'

const List = ({ data }) => {
    // console.log(data)
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
        <div className='list'>
            {data?.map((item) => (
                <Card item={item} key={item?._id} />
            ))}
        </div>
    )
}

export default List