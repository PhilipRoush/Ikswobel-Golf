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
        <Container fixed>
        <Grid container
              direction="row"
              justify="space-evenly"
              alignItems="center">
            <Grid item xl={12} sm={6} md={6}>
                <Typography className="marginT-2" variant="h3" component="h1">
                    List of Golf Courses
                </Typography>
                <Grid container spacing={6}>
                    {courseItems}
                </Grid>
            </Grid>
        </Grid>
        </Container>
    </div>
        
    )
   }
}


export default GolfCourseContainer;
