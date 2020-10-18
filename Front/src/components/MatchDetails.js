import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class MatchDetails extends Component{
    constructor(props){
      super(props);
      this.state = {
        details: ''
      }
    }

    componentWillMount(){
        this.getMatches();
    }

   

    getMatches() {
        let matchId = this.props.match.params.id;
        axios.get(`http://localhost:3001/matches/${matchId}`)
        .then(response => {
            this.setState({details: response.data}, () => {
               
            })
        })
        .catch(err => console.log(err));
    }

    // onDelete(){
    //     let matchId = this.state.details.id;
    //     axios.delete(`http://localhost:3001/matches/${matchId}`)
    //       .then(response => {
    //         this.props.history.push('/');
    //       }).catch(err => console.log(err));
    //   }
    


    render() {
        return(
            <div>
                <br />
                
                <Link to='/matches'>Back</Link>
                <h1>{this.state.details.title}</h1>
                <ul>
                    <li>Description: {this.state.details.description}</li>
                    <li>Golf Course: {this.state.details.golf_course_id}</li>
                    <li>Date: {this.state.details.date}</li>
                    <li>Time: {this.state.details.time}</li>
                    <li>Max Handicap?: {this.state.details.handicap}</li>
                </ul>
                {/* <Link to={`/matches/edit/${this.state.details.id}`}>Edit</Link> */}
                <br /><br />
                {/* <button onClick={this.onDelete.bind(this)}>Delete</button> */}
            </div>
        )
    }
}

    export default MatchDetails;