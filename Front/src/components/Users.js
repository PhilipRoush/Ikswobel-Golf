import React, { Component } from 'react';


export default class Users extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.allUsers()
    }

    allUsers = () => {
        axios
        .get("http://localhost:3001/users")
        .then(res => {
            this.setState({ users: res.data });
        })
    }

    render() {
        return (
            <div>
                {users = this.props.users}
            </div>
        )
    }

}