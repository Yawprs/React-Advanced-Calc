import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        display: '',
        total: null,
        operator: null,
        readyForNewNum: false
    }

    inputNum = (e) => {
        console.log('running inputnum')
        if (this.state.readyForNewNum) {
            this.setState({
                display: e.target.innerText
            })
        } else {
            this.setState({
                display: this.state.display + e.target.innerText
            })
        }
    }
    
    setOperator = (e) => {
        console.log('running operator')
        if(this.state.display) {
            let newTotal = this.state.display
            this.setState({
                operator: e.target.innerText,
                readyForNewNum: true,
                total: newTotal
            })
        }
    }

    calculate = () => {
        console.log('running calculator')
        let result 
        switch(this.state.operator) {
            case '+':
                result = parseFloat(this.state.total) + parseFloat(this.state.display)
                break
            case '-':
                result = parseFloat(this.state.total) - parseFloat(this.state.display)
                break
            case '/':
                result = parseFloat(this.state.total) / parseFloat(this.state.display)
                break
            case '%':
                result = parseFloat(this.state.total) % parseFloat(this.state.display)
                break
            case 'x':
                result = parseFloat(this.state.total) * parseFloat(this.state.display)
                break
            default: console.log('defaulting')
        }
        this.setState({
            display: result,
            readyForNewNum: true,
            total: null
        })
    }

    clearAll = () => {
        console.log('running clearAll')
        this.setState({
            total: null,
            operator: null,
            display: '',
            readyForNewNum: true
        })
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.display}</div>
                    <div className="calc-row">
                        <button onClick={this.clearAll}className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button onClick={this.setOperator}className="calc-button calc-button-top">%</button>
                        <button onClick={this.setOperator}className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button">7</button>
                        <button onClick={this.inputNum} className="calc-button">8</button>
                        <button onClick={this.inputNum} className="calc-button">9</button>
                        <button onClick={this.setOperator}className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button">4</button>
                        <button onClick={this.inputNum} className="calc-button">5</button>
                        <button onClick={this.inputNum} className="calc-button">6</button>
                        <button onClick={this.setOperator}className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button">1</button>
                        <button onClick={this.inputNum} className="calc-button">2</button>
                        <button onClick={this.inputNum} className="calc-button">3</button>
                        <button onClick={this.setOperator}className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.inputNum} className="calc-button width-2">0</button>
                        <button onClick={this.inputNum} className="calc-button">.</button>
                        <button onClick={this.calculate}className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator