import React, { useContext } from 'react'
import { Products } from '../../products'
import { ShopContext } from '../../context/shop-context'
import CartItem from './CartItem'
import "./cart.css"
const Cart = () => {
    const  {cartItems,getTotalCartAmount }=useContext(ShopContext)
    const totalAmount=getTotalCartAmount();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
       <div className='cartItems'>
        {Products.map((product)=>{
            if(cartItems[product.id]!==0){
                return <CartItem data={product}/>
            }
        })}
        </div> 
            {totalAmount>0?(
        <div className='checkout'>
            <p>Subtotal: ${totalAmount}</p>
            <button>Continue Shopping</button>
            <button>Checkout</button>
        </div>):(<h1>Your Cart Is Empty</h1>)
            }
    </div>
  )
}

export default Cart
