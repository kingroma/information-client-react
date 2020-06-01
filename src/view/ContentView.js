import React, { Component } from 'react';

import ContentProgramView from './ContentProgramView'

class ContentView extends Component { 

    constructor(props){
        super(props)
    }

    render(){
        let content = this.props.data
        let contentName = content.contentName ;
        return (
            <div>
                <div>
                    {contentName}
                </div>
                <div>
                    
                </div>
            </div>
        )
    }
}

export default ContentView