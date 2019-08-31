import React from 'react';
import CalcButton from '../CalcButton/CalcButton';

class Numbers extends React.Component {
    render() {
        const numbers = Array(10).fill(0).map((_, idx) => 
    (<CalcButton value={idx} area={`num${idx}`} key={`num${idx}`} 
    onClick={this.click.bind(this, idx)}/>));
        return  (
            <React.Fragment>
                <CalcButton value="." area="point" onClick={this.decimalClick.bind(this)}  /> 
                {numbers}
            </React.Fragment>
        )
    }

    click(num) {
        this.props.onClick(num);
    }

    decimalClick() {
        this.props.onDecimalClick();
    }
}

export default Numbers;