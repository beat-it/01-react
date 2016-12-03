/**
 * Created by laci on 29.11.16.
 */
import React from 'react';
import classnames from 'classnames'

class CartStepper extends React.Component {

    render() {
        let step_data = [
            {
                name: "1. Objednané produkty",
                active: this.props.active == 1
            },
            {
                name: "2. Kontaktné údaje",
                active: this.props.active == 2
            },
            {
                name: "3. Sumarizácia objednávky",
                active: this.props.active == 3
            },
            {
                name: "4. Dokončenie objednávky",
                active: this.props.active == 4
            }
        ];
        return(
            <div id="stepper-container">
                <ul>
                    {step_data.map((item) => (
                        <li key={item.name} className={classnames({'active' : item.active})}>
                            <a>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

CartStepper.propTypes = {
    active : React.PropTypes.number
};

export default CartStepper;