/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class CartStepper extends React.Component {
    render() {
        return(
            <div id="stepper-container">
                <ul>
                    <li className="active">
                        <a href="cart.html">
                            1. Objednané produkty
                        </a>
                    </li>
                    <li>
                        <a href="cart2.html">
                            2. Kontaktné údaje
                        </a>
                    </li>
                    <li>
                        <a  href="cart3.html">
                            3. Sumarizácia objednávky
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            4. Dokončenie objednávky
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default CartStepper;