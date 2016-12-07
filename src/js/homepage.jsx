import React from 'react';
import update from 'immutability-helper';

import Search from './components/search'
import ProductList from './components/product-list'

import Api from './api'

class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product_list:[],
            query: ""
        };
        this.api = Api;
    }

    //Nacitame si zoznam produktov
    componentDidMount(){
        this.loadProducts();
    }

    /**
     * Nacitanie produktov - ak mame query vyhladavame ak nemame volame homepage produkty
     * @param query
     */
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

    /**
     * Odstranenie filtra produktov
     */
    onClickDeleteFilter(){
        this.loadProducts();
    }

    /**
     * Pridanie produktu do kosika
     * @param product_id
     */
    onProductAddToCart(product_id){
        this.context.addToCart(product_id);
    }

    /**
     * Homepage
     * @returns {*}
     */
    getHomepageData(){
        let homepageData = null;
        //Ak mame produkty vratime ProductList inak no products
        if(this.state.product_list.length > 0){
            homepageData = <ProductList products={this.state.product_list} onProductAddToCart={(product_id) => this.onProductAddToCart(product_id)} />
        } else {
            homepageData = <div id="no-items">Žiadne produkty neboli nájdené. <br/> <a onClick={() => this.onClickDeleteFilter()}>Zrušiť filtrovanie</a></div>
        }
        return homepageData;
    }

    render() {
        return (
            <div>
                <div id="main-container">
                    <div id="banner-container">
                        <div className="container">
                            <Search onChange={(query) => this.loadProducts(query)}
                                    searchQuery={this.state.query}
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="products-container">
                            {this.getHomepageData()}
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