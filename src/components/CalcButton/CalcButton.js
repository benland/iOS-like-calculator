import React from 'react';
import './CalcButton.css';

export class CalcButton extends React.Component {
    render() {
        return <button
            onClick={this.props.onClick}
            className={this.props.class}
            style={{ gridArea: this.props.area }}>{this.props.value}</button>;
    }
}

export default CalcButton;
