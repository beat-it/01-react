/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class Search extends React.Component {
    render() {
        return(
            <div id="search-container" className="shadow-container">
                <input
                    onChange={(event) => this.props.onChange(event.target.value)}
                    className="search-input"
                    placeholder="Nájdite svoj vytúžený produkt..."
                    value={this.props.searchQuery}
                />
                <button onClick={(event) => this.props.onClick()}>
                    Vyhľadať
                </button>
            </div>
        );
    }
}

export default Search;