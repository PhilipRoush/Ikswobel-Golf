import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Paper, Grid, Box, Typography, Container } from '@material-ui/core';

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
            console.log(response);
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
            // <div className = 'eventcard'>
            //     {console.log(this.props)}
            //     {console.log(this.state)}
            //     <br />
                
            //     <Link to='/matches'>Back</Link>
            //     <h1>{this.state.details.title}</h1>
            //     <ul>
            //         <li>Created By: 
            //             {/* {this.props.user.first_name +' '+this.props.user.last_name}  */}
            //             {this.state.details.full_name}
            //         </li>
                    
            //         <li>Description: {this.state.details.description}</li>
            //         <li>Golf Course: {this.state.details.course_name}</li>
            //         <li>Date: {this.state.details.date}</li>
            //         <li>Time: {this.state.details.time}</li>
            //         <li>Max Handicap?: {this.state.details.handicap}</li>
            //     </ul>
                
            //     {/* <Link to={`/matches/edit/${this.state.details.id}`}>Edit</Link> */}
            //     <br /><br />
            //     {/* <button onClick={this.onDelete.bind(this)}>Delete</button> */}
            // </div>
            <div>
            <Link to='/matches'>Back</Link>
            <Paper elevation={8}>
            <Container fixed>
            
            <Grid container>
                <Grid item xl={12} md={6}>
                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                            <span className='labelInfo'>Date</span>
                            <Typography variant="h6" paragraph>{this.state.details.date}</Typography>
                        </Grid>
                        
                        <Grid item xs={6}>
                            <span className='labelInfo'>Time</span>
                            <Box display="flex">
                                <Typography variant="h6" paragraph>{this.state.details.time}</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <span className='labelInfo'>Golf Course Location</span>
                    <Typography variant="h6" paragraph>{this.state.details.course_name}</Typography>
                                    
                    <span className='labelInfo'>Description</span>
                    <Typography variant="h6" paragraph>
                    {this.state.details.description}
                    </Typography>
                    
                    <Typography display="inline">
                         Hosted By {this.state.details.full_name}
                    </Typography>
                </Grid>
                </Grid>
                </Container>
                </Paper>
                </div>
                
        )
    }
}

    export default MatchDetails;