import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";


export default class GolfCourseList extends Component {
    state = {
        golf_courses: [],
    };

    componentDidMount() {
        this.getTXGolfCourses();
    }

    getTXGolfCourses = () => {
        axios
        .get("http://localhost:3001/golf_courses", {
            params: {
                state: 'TX'
            }
        })
        .then(res => {
            this.setState({ golf_courses: res.data });
        })
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        
        let golfCourseList = this.state.golf_courses.map(golf_course => {
        return (
            <div>
            {/* <Map /> */}
            <ButtonBase
                focusRipple
                key={golf_course.name}
                id={golf_course.name}
            >
                <span className="imageButton">
                <Link to={`/golf-courses/${golf_course.id}`}>
                    <Typography component="span">
                    {golf_course.name}
                    </Typography>
                </Link>
                </span>
            </ButtonBase>
            <p>{golf_course.description}</p>
            
            <hr />
            </div>
        );
        });
        return (
            
            
        <div className="golf-course-list">
        {golfCourseList}
        </div>
        );
    }
}