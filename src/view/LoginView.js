import React, { Component } from 'react';
import UserService from '../service/UserService'
import ContentService from '../service/ContentService';

class LoginView extends Component { 
    constructor(props) { 
        super(props);

        this.state = {
            username : '' ,
            password : ''
        }

        this.userService = new UserService()
        this.contentService = new ContentService()
    }

    inputChange(e) {
        var nextState = {}
        nextState[e.target.name] = e.target.value
        this.setState(nextState)
    }

    login(){
        var username = this.state.username
        var password = this.state.password

        this.userService.login(username,password)
        .then(data => {
            console.log(data)
        })
        .catch(message => {
           console.error(message) 
        })
    }

    getContentAll(){
        this.contentService.getContentAll()
    }

    render() { 
        return (
            <div style={body}>
                <input type="text" name="username" onChange={this.inputChange.bind(this)}/>
                <input type="password" name="password" onChange={this.inputChange.bind(this)}/>
                <button onClick={this.login.bind(this)}>Login</button>
                <div></div>
                <button onClick={this.getContentAll.bind(this)} >getConentAll</button>
            </div>
        ); 
    }
}

const body = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
}

export default LoginView;