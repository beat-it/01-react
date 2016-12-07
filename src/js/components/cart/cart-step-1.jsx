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
                            {Object.keys(this.props.paymentOpts).map((id) => (
                                <li key={id}>
                                    <input checked={this.props.payment.id == id} name="payment" type="radio" id={id} value={id} onChange={() => this.props.onChangePayment(id)}/>
                                    <label htmlFor={id}>{this.props.paymentOpts[id].name}</label>
                                    <span className="price">
                                        {this.props.paymentOpts[id].price}€
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </DefaultBox>

                    <DefaultBox name="Spôsob dopravy">
                        <ul>
                            {Object.keys(this.props.deliveryOpts).map((id) => (
                                <li key={id}>
                                    <input checked={this.props.delivery.id == id} name="delivery" type="radio" id={id} value={id} onChange={() => this.props.onChangeDelivery(id)}/>
                                    <label htmlFor={id}>{this.props.deliveryOpts[id].name}</label>
                                    <span className="price">
                                        {this.props.deliveryOpts[id].price}€
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
    paymentOpts: React.PropTypes.object,
    deliveryOpts: React.PropTypes.object,
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