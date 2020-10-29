import React, { Component } from "react";
import axios from 'axios';
import GolfCourseItem from './GolfCourseItem';
import { Grid, Typography, Container } from '@material-ui/core';





class GolfCourseContainer extends Component{
    constructor() {
        super();
        this.state = {
            top100s: []
        }
    }

    componentWillMount(){
        this.getCourses();
    }

    getCourses() {
        axios.get('http://localhost:3001/top100s')
        .then(response => {
            this.setState({top100s: response.data}, () => {
                console.log(this.state);
            })
        })
    }


render() {
    

    const courseItems = this.state.top100s.map((course) => {
        return(
            <GolfCourseItem key={course.id} item={course} />
        )})
        
        return (
        
        // <div>
        //   <h1>Ikwobel Golf Matches</h1>
        // <ul>
        //     {matchItems}
        // </ul>
        // </div>
        <div className="minHeight">
        
         <Typography  variant="h2" component="h1">
                    Top 100 Golf Courses in the US
                </Typography>
        <Grid container
              className='course-card'
              direction="row"
              justify="space-evenly"
              alignItems="center">
            <Grid item lg={8} xs={12} sm={6} md={6}>
               
                <Grid container spacing={6}>
                    {courseItems}
                </Grid>
            </Grid>
        </Grid>
        
    </div>
        
    )
   }
}


export default GolfCourseContainer;
