import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    // console.log('banana'[2]) // "n"

    assignEvenAndOdds(userInput) {
        let numAlone = userInput.split(',');
        let newEvens = [];
        let newOdds = [];

        for(let i = 0; i < numAlone.length; i++) {
            if(numAlone[i] % 2 === 0) {
                newEvens.push( parseInt(numAlone[i], 10) )
            } else newOdds.push( parseInt(numAlone[i], 10) )
            }
        this.setState({evenArray: newEvens, oddArray: newOdds})
    }

    render(){
        return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}/>
            <button className='confirmationButton' onClick={() => this.assignEvenAndOdds(this.state.userInput)}>Split</button>
            <span className='resultsBox'>Evens: {this.state.evenArray}</span>
            <span className='resultsBox'>Odds: {this.state.oddArray}</span>
        </div>
        )
    }
}

export default EvenAndOdd;