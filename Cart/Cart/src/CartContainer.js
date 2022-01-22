import React from 'react'
import { useGlobalContext } from './context';
import CartItem from './CartItem';
function CartContainer() {
    const {cart,clearCart,total} = useGlobalContext();
    if(cart.length===0){
        return (
            <section className='cart'>
            <header>
            <h2>your bag</h2>
            <h4 className='empty-cart'> is currently empty</h4>
            </header>
            </section>
        )
    }
    return (
 <section className='cart'>
    <header>
     <h2>Your bag</h2>
    </header>
    
    {/*cart items */}

    <div>
     { cart.map((cartItem)=>{
         return <CartItem  key= {cartItem.id} {...cartItem}/>
     })}
    </div>

    <footer>
    <hr/>
    <div className='cart-total'>
     <h4>
     total <span>${total}</span>
     </h4>
    </div>
    <button className='btn clear-btn'
    onClick={clearCart}>clear cart</button>
    </footer>
 </section>
    )
}

export default CartContainer;
