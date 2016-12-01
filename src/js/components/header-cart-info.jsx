/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class HeaderCartInfo extends React.Component {
    render() {
        return(
                <div id="cart-container">
                    <a href="/cart">
                        {this.props.count} ks za {this.props.totalPrice}€
                    </a>
                </div>
        );
    }
}

HeaderCartInfo.propTypes = {
    count: React.PropTypes.number,
    totalPrice: React.PropTypes.number
};

HeaderCartInfo.defaultProps = {
    count: 0,
    totalPrice: 0
};

export default HeaderCartInfo;