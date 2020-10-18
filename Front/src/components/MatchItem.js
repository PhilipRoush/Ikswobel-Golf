import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class MatchItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        item:props.item
      }
    }

    render() {
        return(
            <li className="">
                <Link to={`/matches/${this.state.item.id}`}>{this.state.item.user} {this.state.item.title}</Link>
            </li>
        )
    }
}

    export default MatchItem;