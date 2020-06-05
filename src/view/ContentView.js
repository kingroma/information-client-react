import React, { Component } from 'react';

import ContentProgramView from './ContentProgramView'

class ContentView extends Component { 
    constructor(props){
        super(props)

        this.state = {
            detailId: ''
        }
    }

    render(){
        let content = this.props.data
        this.contentId = content.contentId 
        this.contentName = content.contentName 
        this.detailId = 'detail_' + this.contentId 
        
        let list = content.list
        
        const output = list.map(
            ( content , i ) => (<ContentProgramView key={i} data={content} detailId={this.detailId} />)
        )

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