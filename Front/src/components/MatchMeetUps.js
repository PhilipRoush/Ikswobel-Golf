import React, { Component } from "react";
import axios from 'axios';
import MatchItem from './MatchItem';
import { Grid, Typography, Container } from '@material-ui/core';





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
    

    const matchItems = this.state.matches.map((match) => {
        return(
            <MatchItem key={match.id} item={match} />
        )})
        
        return (
        
        // <div>
        //   <h1>Ikwobel Golf Matches</h1>
        // <ul>
        //     {matchItems}
        // </ul>
        // </div>
        <div>
        <Container className='course-card' fixed>
        <Grid container
              direction="row"
              justify="flex-start"
              alignItems="center">
            <Grid item lg={12} sm={6} md={6}>
                <Typography className="marginT-2" variant="h3" component="h1">
                    List of Matches
                </Typography>
                <Grid container spacing={6}>
                    {matchItems}
                </Grid>
            </Grid>
        </Grid>
        </Container>
    </div>
        
    )
   }
}


export default MatchMeetUps;
