import React from 'react';
import update from 'immutability-helper';

import Search from './components/search'
import Product from './components/product'
import Api from './api'

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product_list:[
                {
                    "product_id": "12",
                    "name": "Product 1",
                    "price": 20.04,
                    "currency": "EUR",
                    "description": "Lorem ipsum dolor sit amet...",
                    "rating": 3,
                    "image":{
                        "url": "http://.....sk/picture/...",
                        "thumbnail_url": "http://.....sk/picture/thumbnail...",
                        "catalog_url": "http://placehold.it/200x250/ffffff"
                    }
                },
                {
                    "product_id": "2",
                    "name": "Product 1",
                    "price": 20.04,
                    "currency": "EUR",
                    "description": "Lorem ipsum dolor sit amet...",
                    "rating": 3,
                    "image":{
                        "url": "http://.....sk/picture/...",
                        "thumbnail_url": "http://.....sk/picture/thumbnail...",
                        "catalog_url": "http://placehold.it/200x250/ffffff"
                    }
                },
                {
                    "product_id": "33",
                    "name": "Product 1",
                    "price": 20.04,
                    "currency": "EUR",
                    "description": "Lorem ipsum dolor sit amet...",
                    "rating": 3,
                    "image":{
                        "url": "http://.....sk/picture/...",
                        "thumbnail_url": "http://.....sk/picture/thumbnail...",
                        "catalog_url": "http://placehold.it/200x250/ffffff."
                    }
                }
            ],
            query: ""
        }
        this.api = new Api('http://localhost:8080/service');
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts(query){
        this.api.get('/catalog/homepage').then(response => {
            this.setState((prevState) => (
                update(prevState, {product_list : {$set : response.products}})
            ))

        });
    }

    onChangeSearchText(text){
        this.setState((prevState) => (
            update(prevState, {query: {$set : text}})
        ))
    }

    onClickStartSearch(){
        console.log(this.state)
    }

    onProductAddToCart(product_id){
        this.context.addToCart(product_id);
    }

    render() {
        // let query = "";
        //
        // let products = [
        //     {
        //         "product_id": "12",
        //         "name": "Product 1",
        //         "price": 20.04,
        //         "currency": "EUR",
        //         "description": "Lorem ipsum dolor sit amet...",
        //         "rating": 3,
        //         "image":{
        //             "url": "http://.....sk/picture/...",
        //             "thumbnail_url": "http://.....sk/picture/thumbnail...",
        //             "catalog_url": "http://placehold.it/200x250/ffffff"
        //         }
        //     },
        //     {
        //         "product_id": "2",
        //         "name": "Product 1",
        //         "price": 20.04,
        //         "currency": "EUR",
        //         "description": "Lorem ipsum dolor sit amet...",
        //         "rating": 3,
        //         "image":{
        //             "url": "http://.....sk/picture/...",
        //             "thumbnail_url": "http://.....sk/picture/thumbnail...",
        //             "catalog_url": "http://placehold.it/200x250/ffffff"
        //         }
        //     },
        //     {
        //         "product_id": "33",
        //         "name": "Product 1",
        //         "price": 20.04,
        //         "currency": "EUR",
        //         "description": "Lorem ipsum dolor sit amet...",
        //         "rating": 3,
        //         "image":{
        //             "url": "http://.....sk/picture/...",
        //             "thumbnail_url": "http://.....sk/picture/thumbnail...",
        //             "catalog_url": "http://placehold.it/200x250/ffffff."
        //         }
        //     }
        // ];
        return (
            <div>
                <div id="main-container">
                    <div id="banner-container">
                        <div className="container">
                            <span className="text">

                            </span>
                            <Search onChange={(text) => this.onChangeSearchText(text)}
                                    onClick={() => this.onClickStartSearch()}
                                    searchQuery={this.state.query}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="products-container">

                            {this.state.product_list.map((product) => (
                                <Product
                                    key={product.productId}
                                    id={product.productId}
                                    name={product.name}
                                    rating={product.rating}
                                    thumbnail={product.image.catalog_url}
                                    description={product.description}
                                    price={product.price}
                                    onAddToCart={(product_id) => this.onProductAddToCart(product_id)}
                                />
                            ))}
                            <div className="clear"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Homepage.contextTypes = {
    addToCart: React.PropTypes.func
};

export default Homepage;