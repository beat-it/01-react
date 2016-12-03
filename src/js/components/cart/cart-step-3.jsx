/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import InputBlock from '../input-block';
import CartItemsTable from './cart-items-table';
import DefaultBox from '../default-box';
import CartButtons from './cart-buttons';

class CartStep3 extends React.Component {
    render() {
        return(
            <div>
                <div id="cart-items-container" className="row">
                    <CartItemsTable products={this.props.products} locked={true}/>
                </div>
                <div id="addresses-container" className="row">
                    <DefaultBox name="Fakturačná adresa">
                            <strong>
                                {this.props.person.first_name}
                                &nbsp;
                                {this.props.person.surname}
                            </strong>
                            <br/>
                            <span>
                                {this.props.billing_address.address}
                            </span>
                            <br/>
                            <span>
                                {this.props.billing_address.zip}
                                &nbsp;
                                {this.props.billing_address.city}
                            </span>
                    </DefaultBox>
                    <DefaultBox name="Dodacia adresa">
                        <strong>
                            {this.props.person.first_name}
                            &nbsp;
                            {this.props.person.surname}
                        </strong>
                        <br/>
                            <span>
                                {this.props.delivery_address.address}
                            </span>
                        <br/>
                            <span>
                                {this.props.delivery_address.zip}
                                &nbsp;
                                {this.props.delivery_address.city}
                            </span>
                    </DefaultBox>
                    <div className="clear"></div>
                </div>
                <div id="contacts-container" className="row">
                    <DefaultBox name="Kontaktné údaje">
                        <strong>
                            Email:&nbsp;
                        </strong>
                        <span>
                            {this.props.person.first_name}
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
                            {this.props.payment.id}
                        </span>
                        <br/>
                        <strong>
                            Spôsob dodania:&nbsp;
                        </strong>
                        <span>
                           {this.props.delivery.id}
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