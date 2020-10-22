import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Grid, Card, CardHeader, CardContent, CardActions, Chip, Button, Typography } from '@material-ui/core';

class GolfCourseItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        item: props.item

        
      }
    }



    render() {
        return(
            // <div className='course-card'>
            // <li>
            //     <h4> {this.state.item.course_name}</h4>
            //     <Link to={`/matches/${this.state.item.id}`}>{this.state.item.user} {this.state.item.title}</Link>
            // </li>
            // </div>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <Link to={`/top-100-golf-courses/${this.state.item.id}`}>
                        <img style={{width: '100%', height: '220px'}} src={`${this.state.item.image_address}`}
                          alt="Sport" />
                    </Link>
                    <CardHeader className="padB-0" title={this.state.item.name} />
                    <CardContent>
                        <Typography className="marginB-1" variant="body2" color="textSecondary" component="p">
                        Rank: {this.state.item.rank}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className="primary-color white-link" size="large" variant="contained" fullWidth  component={Link} to={`/top-100-golf-courses/${this.state.item.id}`}>
                            More Info
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

    export default GolfCourseItem;