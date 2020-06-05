import React, { Component } from 'react';

import UserService from '../service/UserService'
import ContentService from '../service/ContentService';

import ContentListView from './ContentListView'
import ContentView from './ContentView'

class HomeView extends Component { 
    constructor(props) { 
        super(props)
        
        this.userService = new UserService()
        this.contentService = new ContentService()

        this.state = {
            body : <div>loading...</div> , 
            body2 : 'hello'
        }
    }

    componentDidMount() {
        console.log('home is render finish');
        this.userService.login('kingroma','4235').then(data => {
            this.contentService.getContentAll().then(data => {
                
                this.setState({
                    body : <ContentListView data={data} />
                })
                                
            })
        })
    }

    render() { 
        console.log ( 'home is opened')
        
        return (
            <div>
                <div>
                    {this.state.body}
                </div>
                <div>
                    {this.state.body2}
                </div>
            </div>
        )
    }
}

export default HomeView;