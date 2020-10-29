import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './AddMatch.css'


class AddMatch extends Component{
  constructor(props) {
    super(props);
    this.state = {top100s: []}
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
      .get("http://localhost:3001/top100s")
      .then(res => {
          this.setState({ top100s: res.data });
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
        <div className='add-match-header'>{this.props.user.first_name} {this.props.user.last_name}</div>
        <div className="addform-inputs">
            <input placeholder="Enter your full name..." type="text" name="full_name" ref="full_name" />
            <label className='addform-label' htmlFor="full_name"></label>
          </div>
          <div className="addform-inputs">
            <input placeholder="Enter a title" type="text" name="title" ref="title" />
            <label className='addform-label' htmlFor="title"></label>
          </div>
          <div className="addform-inputs">
            <input placeholder="Enter a Description"type="text" name="description" ref="description" />
            <label className='addform-label' htmlFor="description"></label>
          </div>
          <div className="addform-inputs">
            <select type="text" name="course_name" ref="course_name">
            {this.state.top100s.map((course, key) => {
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
            <input placeholder="Enter a date" type="text" name="date" ref="date" />
            <label className='addform-label' htmlFor="date"></label>
          </div>
          <div className="addform-inputs">
            <input placeholder="Enter a time" type="text" name="time" ref="time" />
            <label className='addform-label' htmlFor="time"></label>
          </div>
          <div className="addform-inputs">
            <input placeholder="Max handicap?"type="integer" name="handicap" ref="handicap" />
            <label className='addform-label' htmlFor="handicap"></label>
          </div>
          <input type="submit" value="Save" className="addform-input-btn" />
        </form>
      </div>
      </div>
    )
  }
}

    export default AddMatch;