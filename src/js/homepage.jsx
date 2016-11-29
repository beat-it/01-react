import React from 'react';
import Header from './components/header'
import Search from './components/search'
import Product from './components/product'


class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div id="main-container">
                    <div id="banner-container">
                        <div className="container">
                            <span className="text">

                            </span>
                            <Search></Search>
                        </div>
                    </div>
                    <div className="container">
                        <div className="products-container">
                            <Product></Product>
                            <Product></Product>
                            <Product></Product>
                            <div className="clear"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;