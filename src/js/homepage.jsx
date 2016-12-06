import React from 'react';
import update from 'immutability-helper';

import Search from './components/search'
import Product from './components/product'
import Api from './api'

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product_list:[],
            query: ""
        };
        this.api = new Api('http://localhost:8080/service');
    }

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts(query){
        if(!query || query == ""){
            this.api.get('/catalog/homepage').then(response => {
                this.setState((prevState) => (
                    update(prevState, {product_list : {$set : response.products}, query: {$set : ""}})
                ))

            });
        } else {
            this.api.get("/catalog/search/" + query).then(response => {
                this.setState((prevState) => {
                    return update(prevState, {query: {$set : query}, product_list: {$set: response.products}});
                })
            });
        }
    }

    onClickDeleteFilter(){
        this.loadProducts();
    }

    onProductAddToCart(product_id){
        this.context.addToCart(product_id);
    }

    render() {

        let homepageData = null;
        if(this.state.product_list.length > 0){
            homepageData = [];
            {this.state.product_list.map((product) => {
                homepageData.push(
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
                )
            })}
        } else{
            homepageData = <div id="no-items">Žiadne produkty neboli nájdené. <br/> <a onClick={() => this.onClickDeleteFilter()}>Zrušiť filtrovanie</a></div>
        }

        return (
            <div>
                <div id="main-container">
                    <div id="banner-container">
                        <div className="container">
                            <span className="text">

                            </span>
                            <Search onChange={(query) => this.loadProducts(query)}
                                    onClick={() => this.onClickStartSearch()}
                                    searchQuery={this.state.query}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="products-container">
                            {homepageData}
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