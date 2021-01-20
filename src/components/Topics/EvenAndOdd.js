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

    render(){
        return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
            <input className='inputLine' onChange=''/>
            <button className='confirmationButton'></button>
            <span className='resultsBox'></span>
            <span className='resultsBox'></span>
        </div>
        )
    }
}

export default EvenAndOdd;