import React, {Component} from 'react';

class Button extends Component {

    render(){
        return(
            <div className={`colum-${this.props.colunas}`}>
    <button className="calcButton" id={this.props.symbol} onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }
}
export default Button;