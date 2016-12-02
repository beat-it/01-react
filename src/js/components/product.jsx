/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
//todo ratat s menou
class Product extends React.Component {


    render() {
        let rating = [];
        for (let i = 0; i <= this.props.rating; i++){
            rating.push(<span key={i} className="star"></span>);
        }

        return(
            <div className="product">
                <div className="blur">
                    <h3>
                        {this.props.name}
                    </h3>
                    <div className="star-container">
                        {rating}
                    </div>
                    <div className="image-container">
                        <img src={this.props.thumbnail} alt="Product pic"/>
                    </div>
                </div>
                <div className="text-container">
                    <a className="price">
                        {this.props.price}€
                    </a>
                    <a onClick={() => this.props.onAddToCart(this.props.id)} className="button add-to-cart-button">
                        Objednať
                    </a>
                </div>
                <div className="description-container">
                    <span>
                        <h4>
                            {this.props.name}
                        </h4>
                        {this.props.description}
                    </span>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    rating: React.PropTypes.number,
    thumbnail: React.PropTypes.string,
    description: React.PropTypes.string,
    price: React.PropTypes.number,
    onAddToCart: React.PropTypes.func
};

export default Product;