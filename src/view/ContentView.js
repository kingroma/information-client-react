import React, { Component } from 'react';

import ContentProgramView from './ContentProgramView'
import ObjectUtil from '../util/ObjectUtil';

class ContentView extends Component { 
    constructor(props){
        super(props)

        this.state = {
            detailId: ''
        }
    }

    render(){
        let content = this.props.data
        var output = '';
        if ( ObjectUtil.isNotNull(content) ){
            this.contentId = content.contentId 
            this.contentName = content.contentName 
            this.detailId = 'detail_' + this.contentId 
            
            let list = content.list
            
            output = list.map(
                ( content , i ) => (<ContentProgramView key={i} data={content} detailId={this.detailId} />)
            )
        } else { 
            console.error ( 'Contnent View > data is empty or null ' + data )
        }
        

        return (
            <div>
                <div style={title}>
                    {this.contentName}
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                {output}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id={this.detailId}>
                </div>
            </div>
        )
    }
}

const title = {
    color:'#abcdef' ,
    fontSize:'12px',
}

export default ContentView