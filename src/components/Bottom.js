import React from 'react';
import RequestUtil from '../util/RequestUtil'
import GlobalValue from '../util/GlobalValue'
import ObjectUtil from '../util/ObjectUtil'

class Bottom extends React.Component {  
    constructor(props) {
        super(props);
    }
   
    componentDidMount(){
        
    }

    render(){      
        return  (
            <div style={{position:'fixed',top:'93%',width:'100%',height:'7%',backgroundColor:'#2f2f2f',color:'#ffffff'}}>
                
            </div>
        )
    }

}

export default Bottom;