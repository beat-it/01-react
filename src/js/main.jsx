/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import Header from './components/header'

class Main extends React.Component {
    render() {
        return(
            <div>
                <Header></Header>
                {this.props.children}
            </div>
        );
    }
}

export default Main;