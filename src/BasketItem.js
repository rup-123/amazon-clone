import React from 'react'
import './BasketItem.css'
import { useStateValue } from './StateProvider';
function BasketItem({id,title,image,price,rating}) {    
    const [{basket}, dispatch] = useStateValue(); 
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id
        })
    }
  return (
    <div className='basketitem'>
        <div>
            <img className='basket__photo' src={image} alt=''/>
        </div>
      
        <div>
          <div className='basket__info'>
            <p className='basket__title'>{title}</p>
            <p className='basket__price'>
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className='basket__rating'>
              {Array(rating).fill().map((_,i)=>(
                 <p>⭐</p>
              ))}
              
           </div>
          </div>

          <button className='basket__btn' onClick={removeFromBasket}>Remove From Basket</button>
        </div>
    </div>
  )
}

export default BasketItem
