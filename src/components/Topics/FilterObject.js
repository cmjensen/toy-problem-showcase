import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                name: 'Haylee',
                age: 26,
                title: 'CEO'
                },
                {
                name: 'Christie',
                age: 26,
                company: 'Chrishay Designs'
                },
                {
                name: 'Dawn',
                age: 43,
                over6ftTall: true
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    doObjectFilter(userInput) {
        let unFiltered = this.state.unFilteredArray;
        let filtered = [];

        for(let i = 0; i < unFiltered.length; i++) {
            if(unFiltered[i].hasOwnProperty(userInput)){
                filtered.push(unFiltered[i]);
            }
        }
        // update filteredArray
        this.setState({filteredArray: filtered});
    }

    render(){
        console.log(this.state)
        return (
        <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className='puzzleText'>Unfiltered: { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
            <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className='confirmationButton' onClick={() => this.doObjectFilter(this.state.userInput)}>Filter</button>
            <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
        </div>
        )
    }
}

export default FilterObject;``