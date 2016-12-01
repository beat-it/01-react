/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class CartItemsTable extends React.Component {
    render() {

        let productColSpan = this.props.locked ? 2 : 3;
        let deleteButton = this.props.locked ? null : (<td>
            <button onClick={() => this.props.onItemDelete(product.id)} className="button">Odstrániť</button>
        </td>)
        return(
            <div id="cart-items-container" className="row">
                <table id="cart-items" cellPadding="0" cellSpacing="0">
                    <thead>
                    <tr>
                        <th colSpan={productColSpan} className="text-left">
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
                        {this.props.products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <img src={product.image.thumbnail_url} alt="Produkt"/>
                                </td>
                                <td>
                                    {product.name}
                                </td>
                                {deleteButton}
                                <td className="text-center">
                                    {product.price}€ / ks
                                </td>
                                <td className="text-center">
                                    {product.quantity}ks
                                </td>
                                <td className="item-total-price text-center">
                                    {product.total_price}€
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

CartItemsTable.propTypes = {
    products:  React.PropTypes.array,
    onItemDelete: React.PropTypes.func,
    locked: React.PropTypes.bool
};

CartItemsTable.defaultProps = {
    locked : false
}

export default CartItemsTable;