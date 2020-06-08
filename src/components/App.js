import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';

import LoginView from '../view/LoginView'
import HomeView from '../view/HomeView'
import MusicView from '../view/MusicView'
import MainView from '../view/MainView'

class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            value : Math.round(Math.random() * 100)
        }
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(randomValue){
        this.setState({
            value : randomValue
        });
    }
    
    render(){      
        return  (
            <div style={{width:'100%',height:'100%'}}>
                <MainView></MainView>
                {/* <LoginView/> */}
                {/* <HomeView/> */}
                {/* <MusicView/> */}
            </div>
        )   
    }
}

App.defaultProps = {
    headerTitle : 'Default header',
    contentTitle : 'Default content',
    contentBody : 'Default content body'
}
export default App;