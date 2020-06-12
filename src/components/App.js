import React from 'react';
import RequestUtil from '../util/RequestUtil'
import GlobalValue from '../util/GlobalValue'
import ObjectUtil from '../util/ObjectUtil'
import Bottom from './Bottom';

class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            content: []
        }
        
    }
    
    clickList(){
        console.log ( "RED ")
    }

    // render 완료 후 
    componentDidMount(){
        this.getContentAll().then(data => {
            const result = data.result;
            
            for ( var i = 0 ; i < result.length ; i ++ ) {
                const c = result[i];
                const contentId = c.contentId ;
                const contentName = c.contentName ; 
                const list = c.list ;
                var programs = [];

                for( var j = 0 ; j < list.length ; j ++ ) {
                    const program = list[j];
                    const programId = program.programId ; 
                    const title = program.title ; 
                    const imageMeta = program.imageMeta ; 
                    
                    var imgId = '0' ; 
                    if ( imageMeta.length > 0 ){
                        imgId = imageMeta[0].imageId;
                    }
                    for ( var z = 0 ; z < imageMeta.length ; z ++ ){
                        const im = imageMeta[z] ; 
                        const imageId = im.imageId ; 
                        const mappingId = im.mappingId ;
                        const imageType = im.imageType ;
                    }
                    programs.push({programId:programId,imageId:imgId})
                }
                    
                this.setState({
                    content:this.state.content.concat(
                        {
                            'contentId' : contentId ,
                            'contentName' : contentName , 
                            'programs' : programs
                        }
                    )
                })
                
            }
        });
        
        
    }

    random(){
        return Math.random()
    }
    
    render(){      
        return  (
            <div style={{width:'100%',backgroundColor:'#000000'}}>
                <div style={{color:'#ffffff'}}>
                    {
                        this.state.content.map(c => {
                            return (
                                // content
                                <div key={c.contentId}>
                                        <div>
                                            {c.contentName}
                                        </div>
                                    <div style={{}}>
                                        <ul style={{listStyleType:'none',listStyle:'none',padding:'0px'}}>
                                        {
                                            c.programs.map( p => {
                                                // image 
                                                const src = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + p.imageId
                                                return (
                                                    <li key={p.programId} style={{display: 'inline-block'}}>
                                                        <img style={{width:'50px',height:'70px',margin:'5px'}} src={src} />
                                                    </li>
                                                )
                                            })
                                        }
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
                <div style={{paddingTop:'10%'}}></div>
                <Bottom/>
            </div>
        )
    }



    getContentAll(){ 
        return new Promise((resolve,reject) => {    
            RequestUtil.GET(GlobalValue.getValue("CONTENT_LIST_URL"),{})
            .then( data => {
                if ( ObjectUtil.isNotNull(data)  ){
                    if (data.resultCode = "200" && ObjectUtil.isNotNull(data.result)){
                        resolve ( data )
                    } 
                } else { 

                }
            })
            .catch(error => { 
                reject(error)
            })
        });
    }


}

App.defaultProps = {
    headerTitle : 'Default header',
    contentTitle : 'Default content',
    contentBody : 'Default content body'
}
export default App;