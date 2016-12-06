/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class DefaultBox extends React.Component {
    render() {
        return(
            <div className="block bordered-block">
                <h2>
                    {this.props.name}
                </h2>
                {this.props.children}
            </div>
        );
    }
}

DefaultBox.propTypes = {
    name: React.PropTypes.string
};

export default DefaultBox;