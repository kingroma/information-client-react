import React, { Component } from 'react';
import ContentView from './ContentView';
import ObjectUtil from '../util/ObjectUtil';

class ContentListView extends Component { 

    constructor(props){
        super(props)
    }

    
    render(){
        var data = this.props.data ;
        var output = '' 
        if ( ObjectUtil.isNotNull(data) ){            
            var list = data.result ; 
            
            output = list.map(
                ( content , i ) => (<ContentView key={i} data={content} ></ContentView>)
            )
        } else { 
            console.error ( 'Contnent List View > data is empty or null ' + data )
        }
        
        return (
            <div>
                {output}
            </div>
        )
    }
}

export default ContentListView