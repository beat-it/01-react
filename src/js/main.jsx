/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import Header from './components/header'
import update from 'immutability-helper';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cart_count: 0,
            cart_product_price: 0
        };
    }

    getChildContext() {
        let _this = this;
        return {
            addToCart: function (id) {
                _this.setState((prevState, props) => (
                    update(prevState, {cart_count : {$set : prevState.cart_count + 23}})
                ));
            },
            removeFromCart: function (id) {
                console.log("KONTEXT");
                console.log(id);
            }
        };
    }

    render() {
        return(
            <div>
                <Header
                    count={this.state.cart_count}
                    totalPrice={this.state.cart_product_price}
                />
                {this.props.children}
            </div>
        );
    }
}

Main.childContextTypes = {
    addToCart: React.PropTypes.func,
    removeFromCart: React.PropTypes.func
};

export default Main;