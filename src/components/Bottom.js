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
            <div style={
                {
                    position:'fixed',
                    top:'90%',
                    width:'100%',
                    height:'10%',
                    backgroundColor:'#2f2f2f',
                    color:'#ffffff',
                    zIndex:99
                } }>
                <table style={{width:'100%',height:'100%'}}>
                    <colgroup>
                        <col width="33%"/>
                        <col width="33%"/>
                        <col />
                        
                    </colgroup>
                    <tbody>
                        <tr>
                            <td style={td} onClick={()=>{this.props.changeMenu('home')}}>
                                {/* Home */}
                                <img style={{filter:'invert(100%)'}} width='25px' height='25px' src='/icon/home.png'/>
                            </td>
                            <td style={td} onClick={()=>{this.props.changeMenu('search')}}>
                                {/* Search */}
                                <img style={{filter:'invert(100%)'}} width='25px' height='25px' src='/icon/search.png'/>
                            </td>
                            <td style={{
                                        borderCollapse: 'collapse', 
                                        borderSpacing: 0 ,
                                        textAlign: 'center'
                                    }} onClick={()=>{this.props.changeMenu('timeline')}}>
                                {/* Timeline */}
                                <img style={{filter:'invert(100%)'}} width='25px' height='25px' src='/icon/timeline.png'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

const td = {
    borderRight:'1px solid #444444',
    borderCollapse: 'collapse', 
    borderSpacing: 0 ,
    textAlign: 'center'
}

export default Bottom;