import React from 'react'
import {FaChevronUp,FaChevronDown} from 'react-icons/fa'
import { useGlobalContext } from './context'
function CartItem({id,img,title,amount,price}) {
    const {toggleAmount,remove} = useGlobalContext();
    return (
   <article  className='cart-item'>
     <img src={img} alt={title}/>
     <div>
      <h4>{title}</h4>
      <h4 className='item-price'>${price}</h4>
      <button className='remove-btn' onClick={()=>{remove(id)}}>
      remove
      </button>
     </div>
     <div>
       <button className='amount-btn' onClick={()=>toggleAmount(id,'inc')}>*
        <FaChevronUp className='svg-mount' />
       </button>
       <p className="amount">{amount}</p>
       <button className='amount-btn' onClick={()=>toggleAmount(id,'dec')}>*
       <FaChevronDown className='svg-mount'/>
      </button>
     </div>
   </article>
    )
}

export default CartItem
