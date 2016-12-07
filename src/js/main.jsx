/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import Header from './components/header'
import update from 'immutability-helper';
import Api from './api'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cart_count: 0,
            cart_product_price: 0
        };
        this.api = Api;
    }

    componentDidMount(){
        this.api.get('/cart/info').then(response => {
            this.setState((prevState, props) => (
                update(prevState, {cart_count : {$set: response.count}, cart_product_price: {$set: response.totalPrice}})
            ));
        });
    }

    removeFromCart(id, afterDelete){
        this.api.delete('/cart/items/' + id).then(response => {
            afterDelete(response);
        });
    }

    addToCart(id, afterAdd){
        this.api.post('/cart/items', {productId: id, quantity: 1}).then(response => {
            afterAdd(response);
        });
    }

    /**
     * Pripravime si globalne dostupne metody
     * @returns {{addToCart: (function()), removeFromCart: (function()), changeCartItemQuantity: (function())}}
     */
    getChildContext() {
        return {
            addToCart: (id) => {
                this.addToCart(id,(response) => {
                    this.setState((prevState, props) => (
                        update(prevState, {cart_count : {$set: response.count}, cart_product_price: {$set: response.totalPrice}})
                    ));
                });
            },
            removeFromCart: (id, afterUpdate) => {
                this.removeFromCart(id, (response) => {
                    this.setState((prevState, props) => (
                        update(prevState, {cart_count : {$set: response.count}, cart_product_price: {$set: response.totalPrice}})
                    ), () => {
                        afterUpdate();
                    });
                })
            },
            changeCartItemQuantity: (id, quantity, afterUpdate) => {
                
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
    removeFromCart: React.PropTypes.func,
    changeCartItemQuantity: React.PropTypes.func
};

export default Main;