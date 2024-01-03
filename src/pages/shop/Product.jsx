import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
const Product = (props) => {
    const{id,productName,price,productImage}=props.data
    // const {addToCart}=useContext(ShopContext)
  return (
    <div className='product'>
      <img/>
      <div className="description">
        <p>
            <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartBttn'>Add to Cart</button>
    </div>
  )
}

export default Product
