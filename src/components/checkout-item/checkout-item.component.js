import './checkout-item.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem}) =>{
    const{name, imageUrl, quantity, price} = cartItem;
    const{addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext);

    const clearItemHandler = ()=>clearItemFromCart(cartItem);
    const removeItemHandler = ()=>removeItemFromCart(cartItem);
    const addItemHandler = ()=>addItemToCart(cartItem);


    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt= {`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'> 
            <div onClick={removeItemHandler} className='arrow'>&#8722;</div> 
                <span className='value'> {quantity} </span>
            <div onClick={addItemHandler} className='arrow'>&#x2B;</div> 
            </div>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}> &#10005; </div>
        </div>
    )
}

export default CheckoutItem;