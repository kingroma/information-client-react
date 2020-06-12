import React, { Component } from 'react';
import LoginView from './LoginView';
import GlobalValue from '../util/GlobalValue';
import ObjectUtil from '../util/ObjectUtil';
import TabView from './TabView';

class MainView extends Component {
    constructor(props){
        super(props)

        var loginViewDisplay = 'none'

        if ( !ObjectUtil.isNotNull(GlobalValue.getToken()) ){
            loginViewDisplay = 'block'
        } 

        this.state = {
            loginViewDisplay:loginViewDisplay
        }
    }

    loginViewOn(){
        console.log("login view on")

        this.setState(
            {loginViewDisplay:'block'}
        )
    }

    loginViewOff(){
        console.log("login view off")

        this.setState(
            {loginViewDisplay:'none'}
        )
    }
    
    render(){
        return (
            <div  
                style={{backgroundColor:'#abcdef',width:'100%',height:'100%'}}
                >
                <LoginView 
                    display={this.state.loginViewDisplay} 
                    loginViewOff={this.loginViewOff.bind(this)}
                    loginViewOn={this.loginViewOn.bind(this)}
                    />
                <div>
                    <TabView/>

                </div>
            </div>
        )
    }
}

export default MainView