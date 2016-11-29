import React from 'react';
import CartStep1 from './components/cart/cart-step-1';
import CartStep2 from './components/cart/cart-step-2';
import CartStepper from './components/cart/cart-stepper';

class Cart extends React.Component {
    render() {
        return(
            <div id="main-container">
                <div className="container">
                    
                    
                    <CartStepper/>
                    
                    <CartStep1/>
                    <CartStep2/>
                    
                    
                    <div id="cart-buttons-container" className="row">
                        <a className="button pull-left">
                            Späť do obchodu
                        </a>

                        <a href="/cart2.html" className="button button-cart-continue pull-right">
                            Pokračovať
                        </a>
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;