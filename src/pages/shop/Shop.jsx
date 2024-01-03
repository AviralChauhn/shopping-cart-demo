import React from 'react'
import "./shop.css"
import { Products } from '../../products'
import Product from './Product.jsx'
const Shop = () => {
  return (
    <div className='shop'>
      <div>
        <h1>Practice Cart</h1>
      </div>
      <div className='products'>
            {Products.map((product)=>{
                return <Product data={product}/>
            })}
      </div>
    </div>
  )
}

export default Shop
