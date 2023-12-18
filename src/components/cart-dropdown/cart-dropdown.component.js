import { CartDropdownContainer, EmptyMesssage, CartItemsContainer  } from './cart-dropdown.styles';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length? (
                        cartItems.map(item => <CartItem key={item.id} cartItem={item} />)):
                        (
                            <EmptyMesssage>Your cart is empty</EmptyMesssage>
                        )
                }
            </CartItemsContainer> 
            <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT </Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;