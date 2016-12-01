import React from 'react';
import Search from './components/search'
import Product from './components/product'


class Homepage extends React.Component {

    onChangeSearchText(text){
        console.log(text);
    }

    onClickStartSearch(){
        console.log('PD HNY')
    }

    onProductAddToCart(product_id){
        console.log(product_id);
    }

    render() {

        let query = "";

        let products = [
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
        ];

        return (
            <div>
                <div id="main-container">
                    <div id="banner-container">
                        <div className="container">
                            <span className="text">

                            </span>
                            <Search onChange={(text) => this.onChangeSearchText(text)}
                                    onClick={() => this.onClickStartSearch()}
                                    searchQuery={query}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="products-container">

                            {products.map((product) => (
                                <Product
                                    key={product.product_id}
                                    id={product.product_id}
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

export default Homepage;