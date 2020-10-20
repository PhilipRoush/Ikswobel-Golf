import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './AddMatch.css'


class AddMatch extends Component{
  constructor(props) {
    super(props);
    this.state = {golf_courses: []}
  }
    addMatch(newMatch){
        axios.request({
            method:'post',
            url:'http://localhost:3001/matches',
            data: newMatch
        })
        .then(response => {
            this.props.history.push('/matches');
        }).catch(error => console.log(error));
    }

    componentDidMount(){
      this.getGolfCourses();
  }
  
    getGolfCourses = () => {
      axios
      .get("http://localhost:3001/golf_courses")
      .then(res => {
          this.setState({ golf_courses: res.data });
      })
      .catch(err => {
          console.log(err);
      });
  };
    
    

    onSubmit(e){
        const newMatch = {
          
          full_name: this.refs.full_name.value,
          title: this.refs.title.value,
          description: this.refs.description.value,
          // golf_course_id: this.refs.golf_course_id.value,
          date: this.refs.date.value,
          time: this.refs.time.value,
          handicap: this.refs.handicap.value,
          user_id: this.props.user.id,
          course_name: this.refs.course_name.value
        }
        this.addMatch(newMatch);
        e.preventDefault();
      }

      

    render() {
      
        return(
            <div>
        <br />
       <Link className='addform-input-btn' to="/">Back</Link>
       <h1>Add Match</h1>
       <div className="addform-container">
       
      
       <form onSubmit={this.onSubmit.bind(this)} className='logform'>
        <h2>{this.props.user.first_name} {this.props.user.last_name}</h2>
        <div className="addform-inputs">
            <input type="text" name="full_name" ref="full_name" />
            <label className='addform-label' htmlFor="full_name">Full Name</label>
          </div>
          <div className="addform-inputs">
            <input type="text" name="title" ref="title" />
            <label className='addform-label' htmlFor="title">Title</label>
          </div>
          <div className="addform-inputs">
            <input type="text" name="description" ref="description" />
            <label className='addform-label' htmlFor="description">Description</label>
          </div>
          <div className="addform-inputs">
            <select type="text" name="course_name" ref="course_name">
            {this.state.golf_courses.map((course, key) => {
             return( <option key={key} value={course.name}> {course.name} </option>)
            })}
            </select>
            <label className='addform-label' htmlFor="course_name">Golf Course Name</label>

          </div>
          {/* <div className="addform-inputs">
            <input type="text" name="golf_course_id" ref="golf_course_id" />
            <label className='addform-label' htmlFor="golf_course_id">Golf Course</label>
          </div> */}
          <div className="addform-inputs">
            <input type="text" name="date" ref="date" />
            <label className='addform-label' htmlFor="date">Date</label>
          </div>
          <div className="addform-inputs">
            <input type="text" name="time" ref="time" />
            <label className='addform-label' htmlFor="time">Time</label>
          </div>
          <div className="addform-inputs">
            <input type="integer" name="handicap" ref="handicap" />
            <label className='addform-label' htmlFor="handicap">Handicap Max?</label>
          </div>
          <input type="submit" value="Save" className="addform-input-btn" />
        </form>
      </div>
      </div>
    )
  }
}

    export default AddMatch;