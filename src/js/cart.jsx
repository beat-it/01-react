import React from 'react';
import update from 'immutability-helper';

import CartStep1 from './components/cart/cart-step-1';
import CartStep2 from './components/cart/cart-step-2';
import CartStep3 from './components/cart/cart-step-3';
import CartStepper from './components/cart/cart-stepper';

//TODO -> pripravit sa na to aby sme vedeli pridat a odobrat produkt podla tych metod ktore mame
class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active_step: 1,
            person: {
                "first_name": "Ladislav",
                "surname": "Perduk",
                "email": "perduk@bart.sk",
                "phone": "0900900900"
            },
            billing_address: {
                "address": "Lomnická 22",
                "city": "Košice",
                "zip": "04001",
                "country": "Slovakia",
                "company": {
                    "name": "ZiZi s.r.o.",
                    "dic": "000000000000",
                    "ico": "000000000000",
                    "ic_dph": "SK000000000000"
                }
            },
            delivery_address: {
                "address": "Lomnická 22",
                "city": "Košice",
                "zip": "04001",
                "country": "Slovakia"
            },
            cart_items: [
                {
                    id: 123,
                    name: "ZiZi",
                    price: 4,
                    image: {
                        "url": "http://.....sk/picture/...",
                        "thumbnail_url": "http://placehold.it/80x60",
                        "catalog_url": "http://.....sk/picture/catalog..."
                    },
                    quantity: 10,
                    total_price: 40,
                    currency: "EUR"
                },
                {
                    id: 1223,
                    name: "ZiZi",
                    price: 4,
                    image: {
                        "url": "http://.....sk/picture/...",
                        "thumbnail_url": "http://placehold.it/80x60",
                        "catalog_url": "http://.....sk/picture/catalog..."
                    },
                    quantity: 10,
                    total_price: 40,
                    currency: "EUR"
                }
            ],
            delivery: "KURIER",
            payment: "CARD_ONLINE",
            shopping_company: false,
            different_del_address: false

        };
    }

    onCartItemDelete(id) {
        this.context.removeFromCart(id);
    }

    onChangeDelivery(delivery_id) {
        this.setState((prevState,props) => (
            update(prevState, {delivery: {$set: delivery_id}})
        ))
    }

    onChangePayment(payment_id) {
        this.setState((prevState,props) => (
            update(prevState, {payment: {$set: payment_id}})
        ))
    }

    getTotalPrice() {
        let itemsPrice = 0;
        let deliveryPrice = this.getActiveDelivery().price;
        let paymentPrice = this.getActivePayment().price;


        this.state.cart_items.map((item) =>{
            itemsPrice += item.price * item.quantity;
        });

        return { items_price: itemsPrice,
                 delivery_price: deliveryPrice,
                 payment_price: paymentPrice,
                 total_price: itemsPrice + deliveryPrice + paymentPrice
                };
    }

    onChangeInput(change){
        let _this = this;
        this.setState((prevState,props) => (
            update(prevState, change)
        ), () => {
            console.log(_this.state);
        });
        
    }

    onChangeStep(step_id){
        switch (step_id){
            case 0:
                return window.location = "/";
            default:
                this.setState((prevState,props) => (
                    update(prevState, {active_step: {$set: step_id}})
                ))
        }
    }

    onChangeShoopingCompany(value){
        this.setState((prevState,props) => (
            update(prevState, {shopping_company: {$set: value}})
        ));
    }

    onChangeDifferentDelAddress(value){
        this.setState((prevState,props) => (
            update(prevState, {different_del_address: {$set: value}})
        ));
    }

    getDeliveryOpts(){
        return [
            {
                "id": "KURIER",
                "price": 2.50,
                "name": "Doručenie kuriérom"
            },
            {
                "id": "OSOBNY_ODBER",
                "price": 0,
                "name": "Osobný odber"
            }
        ];
    }

    getPaymentOpts(){
        return  [
            {
                "id": "CARD_ONLINE",
                "price": 0,
                "name": "Platba kartou online"
            },
            {
                "id": "DOBIERKA",
                "price": 1.50,
                "name": "Platba na dobierku"
            }
        ];
    }

    getActivePayment(){
        let payment = null;
        this.getPaymentOpts().map((item) => {
            if(item.id == this.state.payment){
                return payment = item;
            }
        });

        return payment;
    }

    getActiveDelivery(){
        let delivery = null;
        this.getDeliveryOpts().map((item) => {
            if(item.id == this.state.delivery){
                return delivery = item;
            }
        });

        return delivery;
    }

    render() {
        let cart_prices = this.getTotalPrice();

        let delivery_opts = this.getDeliveryOpts();

        let payment_opts = this.getPaymentOpts();

        // let products = [
        //     {
        //         id: 123,
        //         name: "ZiZi",
        //         price: 4,
        //         image: {
        //             "url": "http://.....sk/picture/...",
        //             "thumbnail_url": "http://placehold.it/80x60",
        //             "catalog_url": "http://.....sk/picture/catalog..."
        //         },
        //         quantity: 10,
        //         total_price: 40,
        //         currency: "EUR"
        //     },
        //     {
        //         id: 1223,
        //         name: "ZiZi",
        //         price: 4,
        //         image: {
        //             "url": "http://.....sk/picture/...",
        //             "thumbnail_url": "http://placehold.it/80x60",
        //             "catalog_url": "http://.....sk/picture/catalog..."
        //         },
        //         quantity: 10,
        //         total_price: 40,
        //         currency: "EUR"
        //     }
        // ];

        // let person = {
        //     "first_name": "Ladislav",
        //     "surname": "Perduk",
        //     "email": "perduk@bart.sk",
        //     "phone": "0900900900"
        // };

        // let billing_address = {
        //     "address": "Lomnická 22",
        //     "city": "Košice",
        //     "zip": "04001",
        //     "country": "Slovakia",
        //     "company": {
        //         "name": "ZiZi s.r.o.",
        //         "dic": "000000000000",
        //         "ico": "000000000000",
        //         "ic_dph": "SK000000000000"
        //     }
        // };

        // let delivery_address = {
        //     "address": "Lomnická 22",
        //     "city": "Košice",
        //     "zip": "04001",
        //     "country": "Slovakia"
        // };

        let payment = this.getActivePayment();
        
        let delivery = this.getActiveDelivery();

        let stepData = null;
        switch (this.state.active_step){
            case 1: stepData =  (
                <CartStep1 products={this.state.cart_items}
                           paymentOpts={payment_opts}
                           deliveryOpts={delivery_opts}
                           
                           payment={payment}
                           delivery={delivery}
                           productTotalPrice={cart_prices.items_price}
                           totalPrice={cart_prices.total_price}

                           onChangeStep={(step) => this.onChangeStep(step)}
                           onCartItemDelete={(id) => this.onCartItemDelete(id)}
                           onChangeDelivery={(id) => this.onChangeDelivery(id)}
                           onChangePayment={(id) => this.onChangePayment(id)}
                />
            );
                break;
            case 2: stepData = (
                <CartStep2  person={this.state.person}
                            billing_address={this.state.billing_address}
                            delivery_address={this.state.delivery_address}
                            shoppingCompany={this.state.shopping_company}
                            differentDelAddress={this.state.different_del_address}
                            onChangeShoppingCompany={(state) => this.onChangeShoopingCompany(state)}
                            onChangeDifferentDelAddress={(state) => this.onChangeDifferentDelAddress(state)}
                            onChangeInput={(change) => this.onChangeInput(change)}
                            onChangeStep={(step) => this.onChangeStep(step)}
                />
            );
                break;
            case 3: stepData = (
                <CartStep3 products={this.state.cart_items}
                           person={this.state.person}
                           billing_address={this.state.billing_address}
                           delivery_address={this.state.delivery_address}
                           payment={payment}
                           delivery={delivery}
                           onChangeStep={(step) => this.onChangeStep(step)}
                />
            );
                break;
        }

        return (
            <div id="main-container">
                <div className="container">
                    <CartStepper active={this.state.active_step}/>
                    {stepData}
                </div>
            </div>
        );
    }
}

Cart.contextTypes = {
    removeFromCart: React.PropTypes.func
};


export default Cart;