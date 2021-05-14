import React from 'react'
import './Product.css'
import { useStateValue } from './context/StateProvider'
function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue()
    console.log("🚀 ~ file: Product.js ~ line 7 ~ Product ~ basket", basket)

    const addToBasket = () => {
        //dispatch the item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                title,
                image,
                price,
                rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <div>⭐</div>)}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div >
    )
}

export default Product