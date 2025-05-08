import React, {Component} from "react";

interface CounterState {
    count: number;
}

class Counter extends Component< {}, CounterState> {
    state: CounterState = {
        count: 0
        
    };
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };
    reset = () => {
        this.setState({ count: 0 });
    };
    
    render() {
        return (
            <div style={{flexDirection: "column", display: "flex", alignItems: "center"}}>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.reset}>Reset</button>

        </div>
    );
}
}

export default Counter;