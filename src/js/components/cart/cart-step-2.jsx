/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import InputBlock from '../input-block';
import CartButtons from './cart-buttons';

class CartStep2 extends React.Component {

    render() {
        return(
            <div id="cart-contact-container">
                <div className="row">
                    <h2>
                        Osobné údaje
                    </h2>
                </div>
                <div id="person-container" className="row">
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({person: {first_name: {$set : value}}})} label="Meno" inputId="name" inputName="name" inputValue={this.props.person.first_name}/>
                        <InputBlock onChange={(value) => this.props.onChangeInput({person: {phone: {$set : value}}})} label="Telefónne číslo" inputId="phone" inputName="phone" inputValue={this.props.person.phone}/>
                    </div>
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({person: {surname: {$set : value}}})} label="Priezvisko" inputId="surname" inputName="surname" inputValue={this.props.person.surname}/>
                        <InputBlock onChange={(value) => this.props.onChangeInput({person: {email: {$set : value}}})} label="Email" inputId="email" inputName="email" inputValue={this.props.person.email}/>
                    </div>
                    <div className="clear"></div>
                </div>

                <div id="billing-type-container" className="row">
                <span>
                    Fakturačná adresa:
                </span>
                    <InputBlock checked={!this.props.shoppingCompany}
                                inputType="radio"
                                label="Nakupujem súkromne"
                                inputId="billing-personal"
                                inputName="billing-switch"
                                onChange={(state) => this.props.onChangeShoppingCompany(false)}
                    />
                    <InputBlock checked={this.props.shoppingCompany}
                                inputType="radio"
                                label="Nakupujem na firmu"
                                inputId="billing-company"
                                inputName="billing-switch"
                                onChange={(state) => this.props.onChangeShoppingCompany(true)}
                    />
                </div>

                <div id="billing-company-container"className="row">
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({billing_address: {company : {name: {$set : value}}}})} label="Názov firmy" inputId="company-name" inputName="company-name" inputValue={this.props.billing_address.company.name}/>
                        <InputBlock onChange={(value) => this.props.onChangeInput({billing_address: {company : {ico: {$set : value}}}})} label="IČO" inputId="ico" inputName="ico" inputValue={this.props.billing_address.company.ico}/>
                    </div>
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({billing_address: {company : {dic: {$set : value}}}})} label="DIČ" inputId="dic" inputName="dic" inputValue={this.props.billing_address.company.dic}/>
                        <InputBlock  onChange={(value) => this.props.onChangeInput({billing_address: {company : {ic_dph: {$set : value}}}})} label="IČ DPH" inputId="ic-dph" inputName="ic-dph" inputValue={this.props.billing_address.company.ic_dph}/>
                    </div>
                    <div className="clear"></div>
                </div>

                <div id="billing-container" className="row">
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({billing_address: {address: {$set : value}}})} label="Ulica a číslo" inputId="billing-address" inputName="billing-address" inputValue={this.props.billing_address.address}/>
                        <InputBlock onChange={(value) => this.props.onChangeInput({billing_address: {city: {$set : value}}})} label="Mesto" inputId="billing-city" inputName="billing-city" inputValue={this.props.billing_address.city}/>
                    </div>
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({billing_address: {zip: {$set : value}}})} label="PSČ" inputId="billing-zip" inputName="billing-zip" inputValue={this.props.billing_address.zip}/>
                        <InputBlock onChange={(value) => this.props.onChangeInput({billing_address: {country: {$set : value}}})} label="Štát" inputId="billing-country" inputName="billing-country" inputValue={this.props.billing_address.country}/>
                    </div>
                    <div className="clear"></div>
                </div>

                <div id="delivery-switch-container" className="row">
                    <InputBlock inputType="checkbox"
                                label="Dodacia adresa je iná ako fakturačná"
                                inputId="delivery-switch"
                                inputName="delivery-switch"
                                checked={this.props.differentDelAddress}
                                onChange={(state) => this.props.onChangeDifferentDelAddress(state)}
                    />
                </div>

                <div className="row">
                    <h2>
                        Dodacia adresa
                    </h2>
                </div>

                <div id="delivery-container" className="row">
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({delivery_address: {address: {$set : value}}})} label="Ulica a číslo" inputId="delivery-address" inputName="delivery-address" inputValue={this.props.delivery_address.address}/>
                        <InputBlock onChange={(value) => this.props.onChangeInput({delivery_address: {city: {$set : value}}})} label="Mesto" inputId="delivery-city" inputName="delivery-city" inputValue={this.props.delivery_address.city}/>
                    </div>
                    <div className="block">
                        <InputBlock onChange={(value) => this.props.onChangeInput({delivery_address: {zip: {$set : value}}})} label="PSČ" inputId="delivery-zip" inputName="delivery-zip" inputValue={this.props.delivery_address.zip}/>
                        <InputBlock onChange={(value) => this.props.onChangeInput({delivery_address: {country: {$set : value}}})} label="Štát" inputId="delivery-country" inputName="delivery-country" inputValue={this.props.delivery_address.country}/>
                    </div>
                    <div className="clear"></div>
                </div>
                <CartButtons
                    onBackClick={() => this.props.onChangeStep(1)}
                    onNextClick={() => this.props.onChangeStep(3)}
                />
            </div>
        );
    }
}

CartStep2.propTypes = {
    person: React.PropTypes.object,
    billing_address: React.PropTypes.object,
    delivery_address: React.PropTypes.object,
    shoppingCompany: React.PropTypes.bool,
    differentDelAddress: React.PropTypes.bool,
    onChangeShoppingCompany: React.PropTypes.func,
    onChangeDifferentDelAddress: React.PropTypes.func,
    onChangeInput: React.PropTypes.func,
    onChangeStep: React.PropTypes.func
};

export default CartStep2;