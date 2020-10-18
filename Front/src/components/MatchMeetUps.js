import React, { Component } from "react";
import axios from 'axios';
import MatchItem from './MatchItem';


class MatchMeetUps extends Component{
    constructor() {
        super();
        this.state = {
            matches: []
        }
    }

    componentWillMount(){
        this.getMatches();
    }

    getMatches() {
        axios.get('http://localhost:3001/matches')
        .then(response => {
            this.setState({matches: response.data}, () => {
                // console.log(this.state);
            })
        })
    }


render() {
    const matchItems = this.state.matches.map((match, i) => {
        return(
            <MatchItem key={match.id} item={match} />
        )
    })
    

    return (
        <div>
        <h1>Matches</h1>
        <ul>
            {matchItems}
        </ul>
        </div>
    )
   }
}


export default MatchMeetUps;
