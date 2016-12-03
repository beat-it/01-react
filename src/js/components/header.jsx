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
                <HeaderCountInfo count={this.props.count} totalPrice={this.props.totalPrice}/>
                <div className="clear"></div>
            </div>
        </nav>);
    }
}

Header.propTypes = {
    count: React.PropTypes.number,
    totalPrice: React.PropTypes.number
};

export default Header;