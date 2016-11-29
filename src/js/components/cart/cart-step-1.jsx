/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class CartStep1 extends React.Component {
    render() {
        return(
            <div>
                <div id="cart-items-container" className="row">
                    <table id="cart-items" cellPadding="0" cellSpacing="0">
                        <thead>
                        <tr>
                            <th colSpan="3" className="text-left">
                                Produkt
                            </th>
                            <th className="text-center">
                                Cena za ks
                            </th>
                            <th className="text-center">
                                Počet kusov
                            </th>
                            <th className="text-center">
                                Celkom
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <img src="http://placehold.it/80x60" alt="Produkt"/>
                            </td>
                            <td>
                                ZiZi
                            </td>
                            <td>
                                <button className="button">Odstrániť</button>
                            </td>
                            <td className="text-center">
                                150€ / ks
                            </td>
                            <td className="text-center">
                                10ks
                            </td>
                            <td className="item-total-price text-center">
                                1500€
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div id="payment-delivery-container" className="row">
                    <div className="block bordered-block">
                        <h2>
                            Spôsob platby
                        </h2>
                        <ul>
                            <li>
                                <input name="payment" type="radio" id="KARTA"/>
                                    <label htmlFor="KARTA">Platba kartou online</label>
                        <span className="price">
                            0€
                        </span>
                            </li>
                            <li>
                                <input name="payment" type="radio" id="PREVODOM"/>
                                    <label htmlFor="PREVODOM">Platba bankovým prevodom</label>
                        <span className="price">
                            2.50€
                        </span>
                            </li>
                            <li>
                                <input name="payment" type="radio" id="DOBIERKA"/>
                                    <label htmlFor="DOBIERKA">Platba na dobierku</label>
                        <span className="price">
                            2.50€
                        </span>
                            </li>
                        </ul>
                    </div>
                    <div className="block bordered-block">
                        <h2>
                            Spôsob dopravy
                        </h2>
                        <ul>
                            <li>
                                <input name="delivery" type="radio" id="KURIER"/>
                                    <label htmlFor="KURIER">Kurier UPS / SPS</label>
                        <span className="price">
                            2.50€
                        </span>
                            </li>
                            <li>
                                <input name="delivery" type="radio" id="POSTA_BALIK_NA_ADRESU"/>
                                    <label htmlFor="POSTA_BALIK_NA_ADRESU">Slovenská pošta - Balík na adresu</label>
                        <span className="price">
                            2.50€
                        </span>
                            </li>
                            <li>
                                <input name="delivery" type="radio" id="POSTA_BALIK_NA_POSTU"/>
                                    <label htmlFor="POSTA_BALIK_NA_POSTU">Slovenská pošta - Balík na poštu</label>
                        <span className="price">
                            2.50€
                        </span>
                            </li>
                        </ul>
                    </div>
                    <div className="clear"></div>
                </div>

                <div id="price-summary-container" className="row bordered-block">
                    <div className="free-delivery-info">
                        Pri nákupe tovaru za ďalších 53,52€ získate dopravu zadarmo
                    </div>
                    <table cellPadding="0" cellSpacing="0">
                        <tbody>
                            <tr>
                                <td>Produkty:</td>
                                <td>1500€</td>
                            </tr>
                            <tr>
                                <td>Doprava:</td>
                                <td>1500€</td>
                            </tr>
                            <tr>
                                <td>Dobierka:</td>
                                <td>1500€</td>
                            </tr>
                            <tr className="total-price">
                                <td>Celkom k úhrade:</td>
                                <td>1500€</td>
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