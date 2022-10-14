import { Component } from "react";

class Counter extends Component {
    constructor(){ //create a constructor
        super(); // when you create a constructor you need to call the super method (We will learn more about this later)
        this.state = { //create a state object
            counter: 0,
        }
    }
    increment() {
        this.setState({ // set the state
            counter: this.state.counter + 1, // getting the counter value (0) and adding one. We now need to set an event handler.
        });
    }
    decrameant(){
        this.setState({ // set the state
            counter: this.state.counter - 1, // getting the counter value (0) and subtracting one. We now need to set an event handler.
        });
    }

// add a decrement method
    render() {
        return (
            <>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={() => this.increment()}>Clicked</button> 
                <button onClick={() => this.decrameant()}>Clicked</button>
            </>
        )
    }
}
export default Counter;
