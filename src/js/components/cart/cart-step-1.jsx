/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import CartItemsTable from './cart-items-table';
import DefaultBox from '../default-box';


class CartStep1 extends React.Component {
    render() {
        return(
            <div>
                <CartItemsTable products={this.props.products} onItemDelete={this.props.onCartItemDelete}/>
                <div id="payment-delivery-container" className="row">
                    <DefaultBox name="Spôsob platby">
                        <ul>
                            {this.props.paymentOpts.map((payment) => (
                                <li key={payment.id}>
                                    <input name="payment" type="radio" id={payment.id} value={payment.id} onChange={() => this.props.onChangePayment(payment.id)}/>
                                    <label htmlFor={payment.id}>{payment.name}</label>
                                    <span className="price">
                                        {payment.price}€
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </DefaultBox>

                    <DefaultBox name="Spôsob dopravy">
                        <ul>
                            {this.props.deliveryOpts.map((delivery) => (
                                <li key={delivery.id}>
                                    <input name="payment" type="radio" id={delivery.id} value={delivery.id} onChange={() => this.props.onChangeDelivery(delivery.id)}/>
                                    <label htmlFor={delivery.id}>{delivery.name}</label>
                                    <span className="price">
                                        {delivery.price}€
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </DefaultBox>

                    <div className="clear"></div>
                </div>

                <div id="price-summary-container" className="row bordered-block">
                    <div className="free-delivery-info">
                        Pri nákupe tovaru za ďalších 53,52€ získate dopravu zadarmo
                    </div>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td>Produkty: </td>
                                <td>{this.props.product_total_price}€</td>
                            </tr>
                            <tr>
                                <td>Doprava: </td>
                                <td>{this.props.deliveryPrice}€</td>
                            </tr>
                            <tr>
                                <td>Dobierka: </td>
                                <td>{this.props.paymentPrice}€</td>
                            </tr>
                            <tr className="total-price">
                                <td>Celkom k úhrade: </td>
                                <td>{this.props.totalPrice}€</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}

export default CartStep1;