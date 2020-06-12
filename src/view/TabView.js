import React, { Component } from 'react' ; 

import HomeView from './HomeView';
import MusicView from './MusicView';
import ContentView from './ContentView';

class TabView extends Component {
    constructor(props) { 
        super(props)

        this.state = {
            homeView: ''
        }

        this.isHomeViewCreated = false ; 
    }

    componentDidMount(){
        // render 종료 후에 발생 
    }

    createHomeView(){
        this.isHomeViewCreated = true ; 
        this.setState({homeView:<HomeView/>})
    }

    render(){
        return (
            <div>
                <div>
                    {this.state.homeView}
                </div>
            </div>
        )
    }
}
export default TabView 