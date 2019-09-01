import React from 'react';
import CalcButton from '../CalcButton/CalcButton';
import './Actions.css';

class Actions extends React.Component {
    constructor(props) {
        super(props);

        this.onEqual = this.onEqual.bind(this);
        this.onNegative = this.onNegative.bind(this);
        this.onClear = this.onClear.bind(this);
        this.onPercent = this.onPercent.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <CalcButton value="+" area="plus" class="action" onClick={this.onAction.bind(this, '+')}/>
                <CalcButton value="-" area="minus" class="action" onClick={this.onAction.bind(this, '-')}/>
                <CalcButton value="X" area="multi" class="action" onClick={this.onAction.bind(this, '*')}/>
                <CalcButton value={'\u00F7'} area="divide" class="action" onClick={this.onAction.bind(this, '/')}/>
                <CalcButton value="=" area="equal" class="action" onClick={this.onEqual}/>
                <CalcButton value={'\u00B1'} area="plusMinus" class="grey-action" onClick={this.onNegative}/>
                <CalcButton value="%" area="percent" class="grey-action" onClick={this.onPercent}/>
                <CalcButton value="AC" area="clear" class="grey-action" onClick={this.onClear}/>
            </React.Fragment>
        );
    }

    onAction(action) {
        this.props.onAction(action);
    }

    onEqual() {
        this.props.onEqual();
    }

    onNegative() {
        this.props.onNegative();
    }

    onClear() {
        this.props.onClear();
    }

    onPercent() {
        alert('On next version... :)');
    }
}

export default Actions;
