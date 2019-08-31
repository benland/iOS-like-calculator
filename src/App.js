import React from 'react';
import Result from './components/Result/Result';
import Numbers from './components/Numbers/Numbers';
import './App.css';
import Actions from './components/Actions/Actions';
import { getValue, calculate, getDisplayObject } from './helperMethods';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {
        left: 0,
        right: 0,
        decimal: 0,
      }
    };

    this.numberClicked = this.numberClicked.bind(this);
    this.decimalClick = this.decimalClick.bind(this);
    this.onAction = this.onAction.bind(this);
    this.onEqual = this.onEqual.bind(this);
    this.onNegative = this.onNegative.bind(this);
    this.onClear = this.onClear.bind(this);
  }
  render() {
    console.log(this.state.current, this.action, this.save);
    return (
      <div className="App">
        <section className="calculator">
          <Result result={this.state.current}  />
          <Numbers onClick={this.numberClicked} onDecimalClick={this.decimalClick} />
          <Actions 
            onAction={this.onAction} 
            onEqual={this.onEqual} 
            onNegative={this.onNegative}
            onClear={this.onClear} /> 
        </section>
      </div>
    );
  }

  numberClicked(number) {
    let {current} = this.state;

    this.equalValue = null;
    if (this.isResult) {
      current = {left:0, right: 0, decimal: 0};
    } 

    this.isResult = false;

    if (current.decimal) {
      this.setState({
        current :{
          ...current,
          right: current.right * 10 + number,
          decimal: current.decimal + 1,
        },
      }); 
    } else {
      this.setState({
        current :{
          ...current,
          left: current.left * 10 + number,
        },
      })
    }
  }

  onNegative() {
    this.save *= -1;
    this.setState({
      current: {
        ...this.state.current,
        left: -this.state.current.left,
      },
    })
  }

  decimalClick() {
    this.setState({
      current: {
        ...this.state.current,
      decimal: 1,
      },
    })    
  }

  onAction(action) { 
    if (this.isResult) {
      this.action = action;
      return;
    }

    if (!this.action) {
      this.handleFirstAction(action);
    } else {
      this.handleAction(action);
    }
    this.isResult = true;
    
  }

  handleFirstAction(action) {
    this.save = getValue(this.state.current);
    this.action = action;
  }

  handleAction(action) {
    const currentValue = getValue(this.state.current);
    this.doAction(currentValue);
    this.action = action;
  }

  doAction(rightValue) {
    const calculated = calculate(this.action, this.save, rightValue);
    this.setState({
      current: getDisplayObject(calculated),
    });
    this.save = calculated;
    this.isResult = true;
  }

  onEqual() {
    if (!this.equalValue) {
      const currentValue = getValue(this.state.current);
      this.doAction(currentValue);
      this.equalValue = currentValue;
    } else {
      this.doAction(this.equalValue);
    }
    
  }

  onClear() {
    this.save = 0;
    this.setState({current: {left: 0, right:0, decimal: 0}});
    this.action = null;
  }
}
export default App;
