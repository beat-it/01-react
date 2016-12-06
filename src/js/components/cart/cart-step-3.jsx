/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import InputBlock from '../input-block';
import CartItemsTable from './cart-items-table';
import DefaultBox from '../default-box';
import CartButtons from './cart-buttons';

class CartStep3 extends React.Component {

    getAddressBox(isDeliveryAddress){
        const boxName = isDeliveryAddress ? "Dodacia adresa" : "Fakturačná adresa";
        let name = this.props.person.forename + " " + this.props.person.surname;
        let street = this.props.billing_address.billingAddress.street;
        let zipCity = this.props.billing_address.billingAddress.zip + " " + this.props.billing_address.billingAddress.city;

        if(isDeliveryAddress && this.props.differentDelAddress){
            street = this.props.delivery_address.street;
            zipCity = this.props.delivery_address.zip + " " + this.props.delivery_address.city;
        }

        return (
            <DefaultBox name={boxName}>
                <strong>
                    {name}
                </strong>
                <br/>
                    <span>
                        {street}
                    </span>
                <br/>
                    <span>
                        {zipCity}
                    </span>
            </DefaultBox>
        )
    }

    render() {

        const billingAddressBox = this.getAddressBox(false);
        const deliveryAddressBox = this.getAddressBox(true);

        return(
            <div>
                <div id="cart-items-container" className="row">
                    <CartItemsTable products={this.props.products} locked={true}/>
                </div>
                <div id="addresses-container" className="row">
                    {billingAddressBox}
                    {deliveryAddressBox}
                    <div className="clear"></div>
                </div>
                <div id="contacts-container" className="row">
                    <DefaultBox name="Kontaktné údaje">
                        <strong>
                            Email:&nbsp;
                        </strong>
                        <span>
                            {this.props.person.forename}
                            &nbsp;
                            {this.props.person.surname}
                        </span>
                        <br/>
                        <strong>
                            Telefón:&nbsp;
                        </strong>
                        <span>
                            {this.props.person.phone}
                        </span>
                    </DefaultBox>
                    <DefaultBox name="Dodacie a platobné podmienky">
                        <strong>
                            Spôsob platby:&nbsp;
                        </strong>
                        <span>
                            {this.props.payment.name}
                        </span>
                        <br/>
                        <strong>
                            Spôsob dodania:&nbsp;
                        </strong>
                        <span>
                           {this.props.delivery.name}
                        </span>
                    </DefaultBox>
                    <div className="clear"></div>
                </div>
                <CartButtons
                    nextText="Záväzne objednať s povinnosťou platby"
                    onBackClick={() => this.props.onChangeStep(2)}
                    onNextClick={() => this.props.onChangeStep(4)}
                />
            </div>
        );
    }
}

CartStep3.propTypes = {
    products: React.PropTypes.array,
    person: React.PropTypes.object,
    billing_address: React.PropTypes.object,
    delivery_address: React.PropTypes.object,
    payment: React.PropTypes.object,
    delivery: React.PropTypes.object,
    onChangeStep: React.PropTypes.func,
};

export default CartStep3;