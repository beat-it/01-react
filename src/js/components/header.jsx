/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class Header extends React.Component {
    render() {
        return(
        <nav>
            <div className="container">
                <ul>
                    <li>
                        <a href="">Položka</a>
                    </li>
                    <li>
                        <a href="">Položka</a>
                    </li>
                    <li>
                        <a href="">Položka</a>
                    </li>
                    <li>
                        <a href="">Položka</a>
                    </li>
                    <li>
                        <a href="">Položka</a>
                    </li>
                </ul>
                <div id="cart-container">
                    <a href="/cart">
                        0 ks za 0€
                    </a>
                </div>
                <div className="clear"></div>
            </div>
        </nav>);
    }
}

export default Header;