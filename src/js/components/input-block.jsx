/**
 * Created by laci on 29.11.16.
 */
import React from 'react';

class InputBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * Akcia po zmene eventu
     * @param event
     */
    onInputChange(event){
        if(this.props.inputType == "text") {
            this.props.onChange(event.target.value, this.props.inputId);
        } else {
            this.props.onChange(event.target.checked, this.props.inputId);
        }
    }

     render() {
         let classes = this.props.inputClasses ? this.props.inputClasses : "";
         if(this.props.error || this.props.problems.indexOf(this.props.inputId) !== -1){
             classes += ' warning ';
         }

         let label = <label htmlFor={this.props.inputId}>{this.props.label}</label>;
         let input = <input checked={this.props.checked}  onChange={(event) => this.onInputChange(event)} id={this.props.inputId} name={this.props.inputName} type={this.props.inputType} className={classes} value={this.props.inputValue}/>;

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
    inputValue: React.PropTypes.string,
    error: React.PropTypes.bool
};

InputBlock.defaultProps = {
    inputType: 'text',
    inputValue: "",
    error: false,
    problems: [],
    inputClasses: null
};
export default InputBlock;