import React from 'react';
import './Result.css';
import { getValue } from '../../helperMethods';

class Result extends React.Component {
    render() {
        const {decimal} = this.props.result;
        const value = getValue(this.props.result);
        const displayValue = decimal ? value.toFixed(decimal - 1) : value.toString();
        return (
            <div className="result">{displayValue}</div>
        );
    }
}

export default Result;