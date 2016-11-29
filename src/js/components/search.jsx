/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class Search extends React.Component {
    render() {
        return(
            <div id="search-container" className="shadow-container">
                <input className="search-input" placeholder="Nájdite svoj vytúžený produkt..."/>
                <button>
                    Vyhľadať
                </button>
            </div>
        );
    }
}

export default Search;