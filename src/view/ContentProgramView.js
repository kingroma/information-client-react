import React, { Component } from 'react';
import GlobalValue from '../util/GlobalValue';
import ObjectUtil from '../util/ObjectUtil';

import ProgramService from '../service/ProgramService'


class ContentProgramView extends Component {
   
    constructor(props){
        super(props)

        this.programService = new ProgramService()
    }

    setDetail(){
        console.log ( 'setDetail > ' + this.programId )
        var prev = document.getElementById('detail')
        
        if ( prev == null || 
            prev.getAttribute("detailId") != this.props.detailId || 
            ( prev.getAttribute("detailId") == this.props.detailId && prev.getAttribute("programId") != this.programId ) ){        
            this.programService.getProgramInformation(this.programId)
            .then( data => {
                
                if ( prev != null && prev != undefined ){
                    prev.remove()
                }
                document.getElementById(this.props.detailId).innerHTML = this.getProgramDetailHtml(data)
        
                $('#detail').slideDown()
            })
            .catch(e=>{

            })
        }
        
    }
    onPlay(){
        console.log('onPlay')
    }
    getProgramDetailHtml(data){
        
        var output = '' 
        let programId = data.programId 
        let title = data.title  
        let synopsis = data.synopsis 
        let programType = data.programType 
        let genres = data.genres 
        let products = data.products 
        let imageMeta = data.imageMeta
        var imageSrc = GlobalValue.getValue('API_BASE_URL') + '/image/get/0'

        if ( imageMeta.length > 0 ){
            imageSrc = GlobalValue.getValue('API_BASE_URL') + '/image/get/' + imageMeta[Math.ceil(Math.random() * 10 ) % imageMeta.length].imageId;
        }

        let detailTableStyle = 'width:100%;height:30%'

        output += 
        (
            "<div id='detail' detailId='" + this.props.detailId + "' programId='"+ programId +"' className='detailDiv' style='display:none'>" + 
            "<table style='" + detailTableStyle + "'>"+
            "<colgroup><col width='30%'/><col /></colgroup>" + 
            "<tbody><tr>" +
            "<td><img src='" + imageSrc + "'/></td>" + 
            "<td style='vertical-align:top'>" + 
            "<div>" + title + "</div>" + 
            "<div>" + genres + "</div>" + 
            "<div>" + synopsis + "</div>" + 
            "</td>" + 
            "</tr></tbody></table>" + 
            "</div>"
        )
        console.log(output)
        return output ; 
    }

    render(){
        let program = this.props.data
        let programId = program.programId;
        this.programId = programId;
        let title = program.title ; 

        let imageMeta = program.imageMeta;
        var imageSrc = '';
        if ( imageMeta.length > 0 ){
            imageSrc = GlobalValue.getValue('API_BASE_URL') + '/image/get/' + imageMeta[Math.ceil(Math.random() * 10 ) % imageMeta.length].imageId;
        }
        var img ; 

        if ( ObjectUtil.isNotNull(imageSrc) ){
            img = <img src={imageSrc} style={image} onClick={(e) => {this.setDetail()}} />
        }
        
        return (
            <td>
                {img}
            </td>
        )
    }
}

const image = {
    width: '80px',
    height: '100px'
}

export default ContentProgramView