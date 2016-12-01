/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class InputBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    onInputChange(event){
        this.props.onChange(event.target.value);
    }

     render() {

         let label = <label htmlFor={this.props.inputId}>{this.props.label}</label>;
         let input = <input onChange={(event) => this.onInputChange(event)} id={this.props.inputId} name={this.props.inputName} type={this.props.inputType} className={this.props.inputClasses} value={this.props.inputValue}/>;

         if(this.props.inputType == "text"){
             return(
                 <span>
                     {label}
                     {input}
                </span>
             );
         } else {
             return(
                 <span>
                     {input}
                     {label}
                </span>
             );
         }

    }
}

InputBlock.propTypes = {
    inputId: React.PropTypes.string,
    label: React.PropTypes.string,
    inputName: React.PropTypes.string,
    inputType: React.PropTypes.string,
    inputClasses: React.PropTypes.string,
    inputValue: React.PropTypes.string
};

InputBlock.defaultProps = {
    inputType: 'text',
    inputValue: ""
};
export default InputBlock;