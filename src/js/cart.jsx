import React from 'react';
import update from 'immutability-helper';

import CartStep1 from './components/cart/cart-step-1';
import CartStep2 from './components/cart/cart-step-2';
import CartStep3 from './components/cart/cart-step-3';
import CartStepper from './components/cart/cart-stepper';

import Api from './api'

//TODO -> pripravit sa na to aby sme vedeli pridat a odobrat produkt podla tych metod ktore mame
class Cart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active_step: 1,
            person: {
                "first_name": "",
                "surname": "",
                "email": "",
                "phone": ""
            },
            billing_address: {
                "address": "",
                "city": "",
                "zip": "",
                "country": "",
                "company": {
                    "name": "",
                    "dic": "",
                    "ico": "",
                    "ic_dph": ""
                }
            },
            delivery_address: {
                "address": "",
                "city": "",
                "zip": "",
                "country": ""
            },
            cart_items: [],
            delivery: "KURIER",
            payment: "CARD_ONLINE",
            shopping_company: false,
            different_del_address: false,
            validation_problems: []
        };

        this.deliveryOpts = [];
        this.paymentOpts = [];

        this.api = new Api('http://localhost:8080/service');
    }

    componentDidMount() {
        this.loadCart();
        this.loadDeliveryPaymentOpts();
    }

    validateInputs(onValid) {
        let problems = [];

        if (this.state.person.first_name == "") {
            problems.push("name");
        }

        if (this.state.person.surname == "") {
            problems.push("surname");
        }

        if (this.state.person.email == "") {
            problems.push("email");
        }

        if (this.state.person.phone == "") {
            problems.push("phone");
        }

        if (this.state.billing_address.address == "") {
            problems.push("billing-address");
        }

        if (this.state.billing_address.city == "") {
            problems.push("billing-city");
        }

        if (this.state.billing_address.zip == "") {
            problems.push("billing-zip");
        }

        if (this.state.billing_address.country == "") {
            problems.push("billing-country");
        }

        if (this.state.shopping_company) {
            if (this.state.billing_address.company.name == "") {
                problems.push("company-name");
            }

            if (this.state.billing_address.company.dic == "") {
                problems.push("dic");
            }

            if (this.state.billing_address.company.ico == "") {
                problems.push("ico");
            }

            if (this.state.billing_address.company.ic_dph == "") {
                problems.push("ic-dph");
            }
        }


        this.setState((prevState) => (
            update(prevState, {validation_problems: {$set: problems}})
        ), () => {
            if (problems.length == 0) {
                onValid();
            }
        })
    }

    loadCart() {
        this.api.get('/cart').then(response => {
            console.log(response);
            this.setState((prevState, props) => (
                update(prevState, {cart_items: {$set: response.cartItems}})
            ));
        });
    }

    loadDeliveryPaymentOpts() {
        this.api.get('/cart/delivery').then(response => {
            this.deliveryOpts = response;
            this.forceUpdate();
            this.api.get('/cart/payment').then(response => {
                this.paymentOpts = response;
                this.forceUpdate();
            });
        });
    }

    onCartItemDelete(id) {
        this.context.removeFromCart(id);
    }

    onChangeDelivery(delivery_id) {
        this.setState((prevState, props) => (
            update(prevState, {delivery: {$set: delivery_id}})
        ))
    }

    onChangePayment(payment_id) {
        this.setState((prevState, props) => (
            update(prevState, {payment: {$set: payment_id}})
        ))
    }

    getTotalPrice() {
        let itemsPrice = 0;
        let deliveryPrice = this.getActiveDelivery().price;
        let paymentPrice = this.getActivePayment().price;


        this.state.cart_items.map((item) => {
            itemsPrice += item.price * item.quantity;
        });

        return {
            items_price: itemsPrice,
            delivery_price: deliveryPrice,
            payment_price: paymentPrice,
            total_price: itemsPrice + deliveryPrice + paymentPrice
        };
    }

    onChangeInput(change, id) {
        this.setState((prevState, props) => {
            if (prevState.validation_problems.indexOf(id) !== -1) {
                change['validation_problems'] = {$splice: [[prevState.validation_problems.indexOf(id), 1]]};
            }
            return update(prevState, change)
        });
    }

    mergeBillingAndDeliveryAddress(onSuccess){
        if(!this.state.different_del_address){
            this.setState((prevState) => {
                let delivery_address = {
                    "address": prevState.billing_address.address,
                    "city": prevState.billing_address.city,
                    "zip": prevState.billing_address.zip,
                    "country": prevState.billing_address.country
                };
                return update(prevState, {delivery_address: {$set: delivery_address}})
            }, () => {
                onSuccess();
            });
        } else {
            onSuccess();
        }
    }

    onChangeStep(step_id) {
        switch (step_id) {
            case 0:
                return window.location = "/";
            // case 2:
            //     // this.api.put('/cart',{deliveryType: this.state.delivery, paymentMethod: this.state.payment}).then(response => {
            //     //     console.log(response);
            //     // });
            //     break;
            case 3:
                if (this.state.active_step == 2) {
                    this.validateInputs(()=> {
                        this.mergeBillingAndDeliveryAddress(()=>{
                            this.changeStep(step_id);
                        })
                    })
                }
                break;
            case 4:
                alert("Ďakujeme za nákup");
                window.setTimeout(function () {
                   window.location = '/';
                },3000);
                break;
            default:
                this.changeStep(step_id);
        }
    }

    changeStep(step_id) {
        this.setState((prevState, props) => (
            update(prevState, {active_step: {$set: step_id}})
        ))
    }

    onChangeShoopingCompany(value) {
        this.setState((prevState, props) => (
            update(prevState, {shopping_company: {$set: value}})
        ));
    }

    onChangeDifferentDelAddress(value) {
        this.setState((prevState, props) => (
            update(prevState, {different_del_address: {$set: value}})
        ));
    }

    getDeliveryOpts() {
        return this.deliveryOpts;

        // return [
        //     {
        //         "id": "KURIER",
        //         "price": 2.50,
        //         "name": "Doručenie kuriérom"
        //     },
        //     {
        //         "id": "OSOBNY_ODBER",
        //         "price": 0,
        //         "name": "Osobný odber"
        //     }
        // ];
    }

    getPaymentOpts() {
        return this.paymentOpts;

        // return  [
        //     {
        //         "id": "CARD_ONLINE",
        //         "price": 0,
        //         "name": "Platba kartou online"
        //     },
        //     {
        //         "id": "DOBIERKA",
        //         "price": 1.50,
        //         "name": "Platba na dobierku"
        //     }
        // ];
    }

    getActivePayment() {
        let payment = null;
        this.getPaymentOpts().map((item) => {
            if (item.id == this.state.payment) {
                return payment = item;
            }
        });

        if (!payment) {
            return this.getPaymentOpts()[0];
        }

        return payment;
    }

    getActiveDelivery() {
        let delivery = null;
        this.getDeliveryOpts().map((item) => {
            if (item.id == this.state.delivery) {
                return delivery = item;
            }
        });

        if (!delivery) {
            return this.getDeliveryOpts()[0];
        }

        return delivery;
    }

    render() {

        let delivery_opts = this.getDeliveryOpts();

        let payment_opts = this.getPaymentOpts();

        if (delivery_opts.length != 0 && payment_opts.length != 0) {
            let cart_prices = this.getTotalPrice();

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
            switch (this.state.active_step) {
                case 1:
                    stepData = (
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
                case 2:
                    stepData = (
                        <CartStep2 person={this.state.person}
                                   billing_address={this.state.billing_address}
                                   delivery_address={this.state.delivery_address}
                                   shoppingCompany={this.state.shopping_company}
                                   differentDelAddress={this.state.different_del_address}
                                   onChangeShoppingCompany={(state) => this.onChangeShoopingCompany(state)}
                                   onChangeDifferentDelAddress={(state) => this.onChangeDifferentDelAddress(state)}
                                   onChangeInput={(change, id) => this.onChangeInput(change, id)}
                                   onChangeStep={(step) => this.onChangeStep(step)}
                                   validationProblems={this.state.validation_problems}
                        />
                    );
                    break;
                case 3:
                    stepData = (
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
        } else {
            return (null)
        }

    }
}

Cart.contextTypes = {
    removeFromCart: React.PropTypes.func
};


export default Cart;