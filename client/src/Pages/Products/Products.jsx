import { useLocation, useParams } from 'react-router-dom'
import List from '../../Components/List/List'
import './products.scss'
import { useEffect, useState } from 'react'
import axios from "axios"

const Products = () => {
    const categoryId = +(useParams().id)
    const [maxPrice, setMaxPrice] = useState(1000)
    const [sort, setSort] = useState(null)
    const [data, setData] = useState(null)
    const location = useLocation()
    // console.log(location.pathname.split('/')[2], "===> location")
    const category = location.pathname.split('/')[2]
    // console.log(category)

    useEffect(() => {
        console.log("useEffect working");

        const fetchData = async () => {
            try {
                const apiRes = await axios.get(`http://localhost:8800/api/product/find?category=${category}`)
                // console.log(apiRes.data.data, '>>>> api res')
                setData(apiRes.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [category])

    return (
        <div className='products'>
            <div className="left">
                <div className="filterItem">
                    <h2>Product Categories</h2>
                    <div className="inputItem">
                        <input type="checkbox" id="1" value={1} />
                        <label htmlFor="1">
                            Shoes
                        </label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="2" value={2} />
                        <label htmlFor="2">
                            Bags
                        </label>
                    </div>
                    <div className="inputItem">
                        <input type="checkbox" id="3" value={3} />
                        <label htmlFor="3">
                            Coats
                        </label>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Filter by price</h2>
                    <div className="inputItem">
                        <span>0</span>
                        <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filterItem">
                    <h2>Sort by</h2>
                    <div className="inputItem">
                        <input type="radio" id='asc' value='asc' name='price' onChange={e => setSort("asc")} />
                        <label htmlFor="asc">
                            Price (Low to High)
                        </label>
                    </div>
                    <div className="inputItem">
                        <input type="radio" id='dsc' value='dsc' name='price' onChange={e => setSort("dsc")} />
                        <label htmlFor="dsc">
                            Price (High to Low)
                        </label>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" className='catImg' />
                <List data={data} categoryId={categoryId} maxPrice={maxPrice} sort={setSort} />
            </div>
        </div>
    )
}

export default Products