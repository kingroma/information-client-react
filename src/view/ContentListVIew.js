import React, { Component } from 'react';
import ContentView from './ContentView';

class ContentListView extends Component { 

    constructor(props){
        super(props)
    }

    
    render(){
        var data = this.props.data ;
        var list = data.result ; 

        const output = list.map(
            ( content , i ) => (<ContentView key={i} data={content} ></ContentView>)
        )

        return (
            <div>
                {output}
            </div>
        )
    }
}

export default ContentListView