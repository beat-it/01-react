/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import Product from './product'

class ProductList extends React.Component {

    /**
     * Zoznam produktov
     * @returns {Array}
     */
    getProducts(){
        let productList = [];
        this.props.products.map((product) => {
            productList.push(
                <Product
                    key={product.productId}
                    id={product.productId}
                    name={product.name}
                    rating={product.rating}
                    thumbnail={product.image.catalog_url}
                    description={product.description}
                    price={product.price}
                    onAddToCart={(product_id) => this.props.onProductAddToCart(product_id)}
                />
            )
        });
        return productList;
    }

    render() {
        return (
            <div className="productList">
                {this.getProducts()}
            </div>
        );
    }
}

Product.propTypes = {
    products: React.PropTypes.string,
    onAddToCart: React.PropTypes.func
};

export default ProductList;