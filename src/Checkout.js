import React from 'react'
import BasketItem from './BasketItem'
import './Checkout.css'
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket,user}, dispatch] = useStateValue(); 
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/Consumer/GCLP/1074_GCLP_2C_ASV.jpg'/>
        <div>
          <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'> Your Shopping Basket</h2>
            {basket.map(item=>
               <BasketItem
                  title = {item.title}
                  image = {item.image}
                  rating = {item.rating}
                  price = {item.price}/> )}
            
        </div>
      </div>

      <div className='checkout__right'>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
