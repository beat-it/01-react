/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import CartItemsTable from './cart-items-table';
import DefaultBox from '../default-box';
import CartButtons from './cart-buttons';


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
                                    <input checked={this.props.payment.id == payment.id} name="payment" type="radio" id={payment.id} value={payment.id} onChange={() => this.props.onChangePayment(payment.id)}/>
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
                                    <input checked={this.props.delivery.id == delivery.id} name="delivery" type="radio" id={delivery.id} value={delivery.id} onChange={() => this.props.onChangeDelivery(delivery.id)}/>
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
                                <td>Produkty:&nbsp;</td>
                                <td>{this.props.productTotalPrice}€</td>
                            </tr>
                            <tr>
                                <td>Doprava:&nbsp;</td>
                                <td>{this.props.delivery.price}€</td>
                            </tr>
                            <tr>
                                <td>Platba:&nbsp;</td>
                                <td>{this.props.payment.price}€</td>
                            </tr>
                            <tr className="total-price">
                                <td>Celkom k úhrade:&nbsp;</td>
                                <td>{this.props.totalPrice}€</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="clear"></div>
                </div>

                <CartButtons
                    backText="Späť do obchodu"
                    onBackClick={() => this.props.onChangeStep(0)}
                    onNextClick={() => this.props.onChangeStep(2)}
                />
            </div>
        );
    }
}

CartStep1.propTypes = {
    products: React.PropTypes.array,
    paymentOpts: React.PropTypes.array,
    deliveryOpts: React.PropTypes.array,
    payment: React.PropTypes.object,
    delivery: React.PropTypes.object,
    productTotalPrice: React.PropTypes.number,
    totalPrice: React.PropTypes.number,
    onChangeStep: React.PropTypes.func,
    onCartItemDelete: React.PropTypes.func,
    onChangeDelivery: React.PropTypes.func,
    onChangePayment: React.PropTypes.func
};


export default CartStep1;