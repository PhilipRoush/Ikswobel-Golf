import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
import './AddMatch.css'
// import { Dropdown } from 'semantic-ui-react'

class AddMatch extends Component{
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

    getTXGolfCourses = () => {
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
          
          user_id: this.props.user.id,
          title: this.refs.title.value,
          description: this.refs.description.value,
          golf_course_id: this.refs.golf_course_id.value,
          date: this.refs.date.value,
          time: this.refs.time.value,
          handicap: this.refs.handicap.value
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
      
          <div className="addform-inputs">
            <input type="text" name="title" ref="title" />
            <label className='addform-label' htmlFor="title">Title</label>
          </div>
          <div className="addform-inputs">
            <input type="text" name="description" ref="description" />
            <label className='addform-label' htmlFor="description">Description</label>
          </div>
          <div className="addform-inputs">
            <input type="text" name="golf_course_id" ref="golf_course_id" />
            <label className='addform-label' htmlFor="Golf_course_id">Golf Course</label>
          </div>
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