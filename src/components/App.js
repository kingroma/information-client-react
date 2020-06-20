import React from 'react';
import RequestUtil from '../util/RequestUtil'
import GlobalValue from '../util/GlobalValue'
import ObjectUtil from '../util/ObjectUtil'
import Bottom from './Bottom';

import ProgramService from '../service/ProgramService'
import ContentService from '../service/ContentService'
import TimelineService from '../service/TimelineService';

class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            searchProgram: [],
            timeline: [],
        
            programDetail : '' , 
            video: '',
            
            displayHome: 'none',
            displaySearch: 'none' , 
            displayTimeline: 'block'
        }
        
        this.programService = new ProgramService();
        this.contentService = new ContentService();
        this.timelineService = new TimelineService();
        this.offset = 0 ; 
        this.limit = 10 ;
    }

    // render 완료 후 
    componentDidMount(){
        this.initHome()
        this.initTimeline()
    }

    initTimeline(){
        this.timelineService.getTimeline(this.offset,this.limit)
        .then(data => {
            this.setState({
                timeline:this.state.timeline.concat(data)
            })
        })
    }

    initHome(){
        this.contentService.getContentAll().then(data => {
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
    
  

    render(){      
        return  (
            <div style={{width:'100%', fontSize: '1em'}}>
                <div>{this.state.video}</div>
                <div>{this.state.programDetail}</div>
                {/* 홈 */}
                <div style={{width:'100%',color:'#ffffff',display:this.state.displayHome}}>
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
                                                        <img style={programImage} 
                                                            src={src} 
                                                            onClick={() => this.showProgramDetail(p.programId)}
                                                            />
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

                {/* 검색 */}
                <div style={{width:'100%',color:'#ffffff',display:this.state.displaySearch}}>
                    <div style={{width:'96%',padding:'2%'}}>
                        <table style={{width:'100%'}}>
                            <colgroup>
                                <col width="90%" />
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td>
                                        <input 
                                            type='text' 
                                            onChange={this.onSearchChange.bind(this)} 
                                            onKeyPress={this.onSearchEnter.bind(this)}
                                            style={{width:'95%',padding:'3px',fontSize:'1.2em',color:'#ffffff',backgroundColor:'#2e2e2e',border:'0px solid black'}}
                                            />
                                    </td>
                                    <td onClick={this.onSearch.bind(this)}>
                                        Search
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <ul style={{listStyleType:'none',listStyle:'none',padding:'0px'}}>
                        {
                            this.state.searchProgram.map( p => {
                                // image 
                                const src = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + p.imageId
                                return (
                                    <li key={p.programId} style={{display: 'inline-block'}}>
                                        <img style={programImage} 
                                            src={src} 
                                            onClick={() => this.showProgramDetail(p.programId)}
                                            />
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>

                {/* 타임라인 */}
                <div style={{width:'100%',color:'#ffffff',display:this.state.displayTimeline}}>
                    <div>
                        
                        {
                            this.state.timeline.map( t => {
                                // const src = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + t.imageId
                                
                                const timelineId = t.timelineId 
                                const title = t.title 
                                const text = t.text 
                                
                                const timelineImageMeta = t.imageMeta ;
                                var timelineImageMetaSrc = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + '0'
                                if (ObjectUtil.isNotNull(timelineImageMeta) ** timelineImageMeta.length > 0 ){
                                    timelineImageMetaSrc = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + timelineImageMeta[0].imageId
                                }

                                const timelineProgram = t.timelineProgram 
                                var timelineProgramImg = []
                                
                                if ( ObjectUtil.isNotNull(timelineProgram) ){
                                    for ( var i = 0 ; i < timelineProgram.length ; i++ ){
                                        const tp = timelineProgram[i];
                                        const programId = tp.programId
                                        const imageMeta = tp.imageMeta;
                                        console.log(imageMeta)
                                        var src = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + '0'
                                        if ( ObjectUtil.isNotNull(imageMeta) && imageMeta.length > 0 ){
                                            src = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + imageMeta[0].imageId
                                        }
                                        
                                        timelineProgramImg.push(
                                            {
                                                programId:programId,
                                                src:src
                                            }
                                            )
                                    }
                                }


                                return (
                                    <div key={timelineId} style={{borderTop:'1px solid #555555'}}>
                                        <div>
                                            <img 
                                                style=
                                                    {{
                                                        width:'100%',
                                                        height:'100%',
                                                        maxHeight:'400px'
                                                    }}
                                                src={timelineImageMetaSrc}/>
                                        </div>
                                        <div>
                                            <ul style={{listStyleType:'none',listStyle:'none',padding:'0px'}}>
                                            {timelineProgramImg.map( tp => {
                                                // image 
                                                return (
                                                    <li key={tp.programId} style={{display: 'inline-block'}}>
                                                        <img style={{
                                                                width:'50px',
                                                                height:'70px',
                                                                marginLeft:'5px',
                                                                marginRight:'5px'}} 
                                                            src={tp.src} 
                                                            onClick={() => this.showProgramDetail(tp.programId)}
                                                            />
                                                    </li>
                                                )
                                                })
                                            }
                                            </ul>
                                        </div>
                                        <div style={{padding:'5px',borderTop:'1px solid #555555'}}>
                                            {title}
                                        </div>
                                        <div style={{padding:'1px',borderTop:'1px solid #555555',fontSize:'0.8em'}}>
                                            {text}
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div>
                <div style={{paddingTop:'10%'}}></div>
                <Bottom changeMenu={this.changeMenu.bind(this)}/>
            </div>
        )
    }

    onSearchEnter(e){
        if(e.key == "Enter"){
            this.onSearch()
        }
    }
    onSearch(){
        console.log(this.searchText)

        this.programService.searchProgram(this.searchText)
        .then(data =>{
            console.log(data)
            var searchProgram = []
            for( var j = 0 ; j < data.length ; j ++ ) {
                const program = data[j];
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
                searchProgram.push({programId:programId,imageId:imgId})
            }
                
            this.setState({
                'searchProgram' : searchProgram ,                
            })
        })
    }

    onSearchChange(e){
        this.searchText = e.target.value;
    }

    changeMenu(what){
        switch(what){
            case "home":
                this.setState({
                    displayHome: 'block',
                    displaySearch: 'none' , 
                    displayTimeline: 'none'
                });
                break;
            case "search" :
                this.setState({
                    displayHome: 'none',
                    displaySearch: 'block' , 
                    displayTimeline: 'none'
                });
                break;
            case "timeline" :
                this.setState({
                    displayHome: 'none',
                    displaySearch: 'none' , 
                    displayTimeline: 'block'
                });
                break;
        }
    }

    play(productId){
        console.log(productId)
        const src = GlobalValue.getValue("VIDEO_BASE_URL") + "sample" + '.mp4' // GlobalValue.getValue("VIDEO_BASE_URL") + productId + '.mp4'
        console.log ( 'play > ' , src )
        this.setState({
            video:
                <div style={{width:'100%',height:'100%',backgroundColor:'#000000',position:'fixed',zIndex:101}}>
                    <div 
                        style={
                                {width:'100%',position:'fixed',textAlign:'right'}
                            }>
                        <img
                            src='/icon/X.png' 
                            style={{padding:'5px',width:'15px',height:'15px'}} 
                            onClick={()=>{ this.setState({video:''})}} />
                    </div>
                    <video 
                        style={{width:'100%'}}
                        controls 
                        autoPlay 
                        src={src} />
                </div>
        })
    }

    showProgramDetail(programId){
        console.log('showProgramDetail > ' + programId)

        this.programService.getProgramInformation(programId)
        .then(data => {
            console.log(data)

            const genres = data.genres ;
            const imageMeta = data.imageMeta ;
            const products = data.products ;
            const synopsis = data.synopsis ;
            const title = data.title ; 
            const programType = data.programType ;

            var imgId = '0' ; 
            if ( imageMeta.length > 0 ){
                imgId = imageMeta[0].imageId;
            }
            const src = GlobalValue.getBaseUrl() + GlobalValue.getImageUrl() + imgId

            var pid = '' ; 
            for(var i = 0 ; i < products.length ; i ++ ){
                const p = products[i];
                const productId = p.productId;
                const text = p.text ;
                const title = p.title ;
                pid = p.productId;
            }

            this.setState({
                programDetail:
                    <div style={
                        {
                            position:'fixed',
                            width:'100%',
                            height:'100%',
                            backgroundColor:'#000000',
                            color:'#ffffff',
                            zIndex:100
                        }}>
                        <div 
                            style={
                                    {width:'100%',position:'fixed',textAlign:'right'}
                                }>
                            <img
                                src='/icon/X.png' 
                                style={{padding:'5px',width:'15px',height:'15px'}} 
                                onClick={()=>{ this.setState({programDetail:''})}} />
                        </div>
                        <table>
                            <colgroup>
                                <col width="40%"/>
                                <col />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td style={{verticalAlign:'top'}}>
                                        <img 
                                            style={{width:'100%'}}
                                            src={src}
                                            />
                                    </td>
                                    <td style={{verticalAlign:'top'}}>
                                        <div style={{padding:'10px'}}>
                                            {title}
                                        </div>
                                        <div style={{padding:'10px'}}>
                                            {genres}
                                        </div>
                                        <div style={{padding:'10px',fontSize:'0.8em'}}>
                                            {synopsis}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>

                                    </td>
                                    <td>
                                        <p onClick={()=>{this.play(pid)}}>재생</p> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            })
        })
    }

    // getContentAll(){ 
    //     return new Promise((resolve,reject) => {    
    //         RequestUtil.GET(GlobalValue.getValue("CONTENT_LIST_URL"),{})
    //         .then( data => {
    //             if ( ObjectUtil.isNotNull(data)  ){
    //                 if (data.resultCode = "200" && ObjectUtil.isNotNull(data.result)){
    //                     resolve ( data )
    //                 } 
    //             } else { 

    //             }
    //         })
    //         .catch(error => { 
    //             reject(error)
    //         })
    //     });
    // }


}

const programImage = {
    width:'50px',
    height:'70px',
    marginLeft:'5px',
    marginRight:'5px'
}

App.defaultProps = {
    headerTitle : 'Default header',
    contentTitle : 'Default content',
    contentBody : 'Default content body'
}
export default App;