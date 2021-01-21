import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    checkPalindrome(userInput) {
        let front = userInput;
        let back = userInput;
        back = back.split('');
        back = back.reverse();
        back = back.join('');

        if(front === back) {
            this.setState({palindrome: 'true'});
        } else {
            this.setState({palindrome: 'false'});
        }
    }

    render(){
        return (
        <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button>
            <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
        </div>
        )
    }
}

export default Palindrome;

// The problem summary: Using a given string, determine if it is spelt the same backwards as it is forwards.

// Create an onChange prop for the input element that updates the value of userInput on state.
// Create an onClick prop for the button element that calls a method on the class:
// This method should solve the toy problem.
// This method should update the value of palindrome.
// Assign the span element the value of palindrome.