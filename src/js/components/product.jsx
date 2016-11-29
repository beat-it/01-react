/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class Product extends React.Component {
    render() {
        return(
            <div className="product">
                <div className="blur">
                    <h3>
                        BiZy
                    </h3>
                    <div className="star-container">
                        <span className="star"></span>
                        <span className="star"></span>
                        <span className="star"></span>
                    </div>
                    <div className="image-container">
                        <img src="http://placehold.it/200x250/ffffff" alt="Product pic"/>
                    </div>
                </div>
                <div className="text-container">
                    <a className="price">
                        150€
                    </a>
                    <a href="/add-to-cart" className="button add-to-cart-button">
                        Objednať
                    </a>
                </div>
                <div className="description-container">
                    <span>
                        <h4>
                            BiZy
                        </h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet neque ultricies suscipit congue. Pellentesque iaculis mi nec placerat condimentum. Nullam at metus volutpat, gravida eros ac, aliquam metus. Nullam convallis, mi at luctus convallis, turpis risus pretium neque, nec auctor purus lectus sit amet enim. Nunc porta neque in varius pretium. Vivamus lacinia metus eget dui aliquam, sed finibus tellus interdum.
                    </span>
                </div>
            </div>
        );
    }
}

export default Product;