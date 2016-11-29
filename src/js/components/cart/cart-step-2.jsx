/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import InputBlock from '../input-block';

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
                        <InputBlock label="Meno" inputId="name" inputName="name"/>
                        <InputBlock label="Telefónne číslo" inputId="phone" inputName="phone"/>
                    </div>
                    <div className="block">
                        <InputBlock label="Priezvisko" inputId="surname" inputName="surname"/>
                        <InputBlock label="Email" inputId="email" inputName="email"/>
                    </div>
                    <div className="clear"></div>
                </div>

                <div id="billing-type-container" className="row">
                <span>
                    Fakturačná adresa:
                </span>
                    <InputBlock inputType="radio" label="Nakupujem súkromne" inputId="billing-personal" inputName="billing-switch"/>
                    <InputBlock inputType="radio" label="Nakupujem na firmu" inputId="billing-company" inputName="billing-switch"/>
                </div>

                <div id="billing-company-container"className="row">
                    <div className="block">
                        <InputBlock label="Názov firmy" inputId="company-name" inputName="company-name"/>
                        <InputBlock label="IČO" inputId="ico" inputName="ico"/>
                    </div>
                    <div className="block">
                        <InputBlock label="DIČ" inputId="dic" inputName="dic"/>
                        <InputBlock label="IČ DPH" inputId="ic-dph" inputName="ic-dph"/>
                    </div>
                    <div className="clear"></div>
                </div>

                <div id="billing-container" className="row">
                    <div className="block">
                        <InputBlock label="Ulica a číslo" inputId="billing-address" inputName="billing-address"/>
                        <InputBlock label="Mesto" inputId="billing-city" inputName="billing-city"/>
                    </div>
                    <div className="block">
                        <InputBlock label="PSČ" inputId="billing-zip" inputName="billing-zip"/>
                        <InputBlock label="Štát" inputId="billing-country" inputName="billing-country"/>
                    </div>
                    <div className="clear"></div>
                </div>

                <div id="delivery-switch-container" className="row">
                    <InputBlock inputType="checkbox" label="Dodacia adresa je iná ako fakturačná"
                                inputId="delivery-switch" inputName="delivery-switch"/>
                </div>

                <div className="row">
                    <h2>
                        Dodacia adresa
                    </h2>
                </div>

                <div id="delivery-container" className="row">
                    <div className="block">
                        <InputBlock label="Ulica a číslo" inputId="delivery-address" inputName="delivery-address"/>
                        <InputBlock label="Mesto" inputId="delivery-city" inputName="delivery-city"/>
                    </div>
                    <div className="block">
                        <InputBlock label="PSČ" inputId="delivery-zip" inputName="delivery-zip"/>
                        <InputBlock label="Štát" inputId="delivery-country" inputName="delivery-country"/>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    }
}

export default CartStep2;