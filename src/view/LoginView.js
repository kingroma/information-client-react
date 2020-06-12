import React, { Component } from 'react';
import UserService from '../service/UserService'
import ContentService from '../service/ContentService';

class LoginView extends Component { 
    constructor(props) { 
        super(props)

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
            alert('Sucess')
        })
        .catch(message => {
            console.error(message) 
            alert('Error '  + message )
        })
    }

    // <button onClick={this.getContentAll.bind(this)} >getConentAll</button> 
    getContentAll(){
        this.contentService.getContentAll()
    }

    render() { 
        return (
            <div style={{display:this.props.display}}  >
                <div style={body}>
                    <div style={header}>
                        NAME
                    </div>
                    <div style={inputArea}>
                        <input type="text" name="username" onChange={this.inputChange.bind(this)}/> 
                    </div>
                    <div style={inputArea}>
                        <input type="password" name="password" onChange={this.inputChange.bind(this)}/>
                    </div>

                    <div>
                        <button onClick={this.login.bind(this)}>Login</button>
                    </div>
                    <div></div>
                </div>
            </div>
        ); 
    }
}

const body = {
    backgroundColor: "white",
    marginTop:"15%",
    marginLeft:"15%",
    width: "70%",
    height: "70%" ,
    padding: "0px",
    textAlign: 'center',
    position: 'fixed',
    borderRadius: '5em',
    backgroundColor: '#efefef',
    zIndex: 99
}

const header = {
    marginTop: '10%',
    marginBottom: '10%',
}

const inputArea = {
    margin: '3%'
}
export default LoginView;