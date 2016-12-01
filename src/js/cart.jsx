import React from 'react';
import CartStep1 from './components/cart/cart-step-1';
import CartStep2 from './components/cart/cart-step-2';
import CartStep3 from './components/cart/cart-step-3';

import CartStepper from './components/cart/cart-stepper';
import update from 'immutability-helper';

//TODO -> pripravit sa na to aby sme vedeli pridat a odobrat produkt podla tych metod ktore mame
class Cart extends React.Component {

    onCartItemDelete(id) {
        console.log(id);
    }

    onChangeDelivery(delivery_id) {
        console.log(delivery_id);
    }

    onChangePayment(payment_id) {
        console.log(payment_id);
    }

    getTotalPrice() {
        return 1400;
    }

    onChangeInput(change){
        console.log(change);
    }

    onChangeStep(step_id){
        console.log(step_id);
    }

    onChangeShoopingCompany(comp){
        console.log(comp);
    }

    onChangeDifferentDelAddress(comp){
        console.log(comp);
    }

    render() {
        //
        // let a = {
        //     a : 1,
        //     b : {
        //         a : 3
        //     }
        // };
        //
        // console.log(a);
        //
        // console.log(update(a, {b:{a : {$set : 44444}}}));

        let product_total_price = 1000;

        let delivery_price = 0;

        let payment_price = 10;

        let total_price = this.getTotalPrice();

        let delivery_opts = [
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

        let payment_opts = [
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

        let products = [
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
        ];

        let person = {
            "first_name": "Ladislav",
            "surname": "Perduk",
            "email": "perduk@bart.sk",
            "phone": "0900900900"
        };

        let billing_address = {
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
        };

        let delivery_address = {
            "address": "Lomnická 22",
            "city": "Košice",
            "zip": "04001",
            "country": "Slovakia"
        };

        let payment = {
            "id": "DOBIERKA",
            "price": 1.50,
            "name": "Platba na dobierku"
        };

        let delivery = {
            "id": "OSOBNY_ODBER",
            "price": 0,
            "name": "Osobný odber"
        };

        let shopping_company = true;

        let different_del_address = true;

        return (
            <div id="main-container">
                <div className="container">

                    <CartStepper active="2"/>

                    <CartStep1 products={products}
                               paymentOpts={payment_opts}
                               deliveryOpts={delivery_opts}
                               onCartItemDelete={this.onCartItemDelete}
                               onChangeDelivery={this.onChangeDelivery}
                               onChangePayment={this.onChangePayment}
                               productTotalPrice={product_total_price}
                               deliveryPrice={delivery_price}
                               paymentPrice={payment_price}
                               totalPrice={total_price}
                               onChangeStep={(step) => this.onChangeStep(step)}

                    />

                    <CartStep2 person={person}
                               billing_address={billing_address}
                               delivery_address={delivery_address}
                               onChangeInput={(change) => this.onChangeInput(change)}
                               onChangeStep={(step) => this.onChangeStep(step)}
                               shoppingCompany={shopping_company}
                               differentDelAddress={different_del_address}
                               onChangeShoppingCompany={(state) => this.onChangeShoopingCompany(state)}
                               onChangeDifferentDelAddress={(state) => this.onChangeDifferentDelAddress(state)}
                    />


                    <CartStep3 products={products}
                               person={person}
                               billing_address={billing_address}
                               delivery_address={delivery_address}
                               payment={payment}
                               delivery={delivery}
                               onChangeStep={(step) => this.onChangeStep(step)}
                    />


                </div>
            </div>
        );
    }
}

export default Cart;