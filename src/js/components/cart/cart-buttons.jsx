/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class CartButtons extends React.Component {

    render() {
        return (
            <div id="cart-buttons-container" className="row">
                <a onClick={() => this.props.onBackClick()} className="button pull-left">
                    {this.props.backText}
                </a>

                <a onClick={() => this.props.onNextClick()} className="button button-cart-continue pull-right">
                    {this.props.nextText}
                </a>
                <div className="clear"></div>
            </div>
        )
    }
}

CartButtons.propTypes = {
    onBackClick : React.PropTypes.func,
    onNextClick : React.PropTypes.func,
    backText: React.PropTypes.string,
    nextText: React.PropTypes.string
};

CartButtons.defaultProps = {
    onBackClick : () => {},
    onNextClick : () => {},
    backText: "Späť",
    nextText: "Pokračovať"
};

export default CartButtons;