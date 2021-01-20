import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            sports: ['Basketball', 'Volleyball', 'Pickleball', 'Baseball'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    filterSport(userInput) {
        let sports = this.state.sports;
        let filtered = [];

        for (let i = 0; i < sports.length; i++) {
            if(sports[i].includes(userInput)) {
                filtered.push(sports[i]);
            }
        }
        this.setState({filteredArray: filtered})
    }

    render(){
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter Sports</h4>
                <span className='puzzleText'>Sports: { JSON.stringify(this.state.sports, null, 10) }</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.filterSport.userInput}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Sports: { JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString;