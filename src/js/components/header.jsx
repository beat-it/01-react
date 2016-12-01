/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import HeaderCountInfo from './header-cart-info';

class Header extends React.Component {
    render() {
        return(
        <nav>
            <div className="container">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
                <HeaderCountInfo count={0} totalPrice={0}/>
                <div className="clear"></div>
            </div>
        </nav>);
    }
}

export default Header;