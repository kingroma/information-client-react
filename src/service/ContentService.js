import RequestUtil from '../util/RequestUtil'
import ObjectUtil from '../util/ObjectUtil'
import GlobalValue from '../util/GlobalValue'

class ContentService {
    constructor(){
        
    }

    getContentAll(){ 
        return new Promise((resolve,reject) => {    
            RequestUtil.GET(GlobalValue.getValue("CONTENT_LIST_URL"),{'token':GlobalValue.getToken()})
            .then( data => {
                if ( ObjectUtil.isNotNull(data)  ){
                    if (data.resultCode = "200" && ObjectUtil.isNotNull(data.result)){

                    } 
                } else { 

                }
            })
            .catch(error => { 
                rejoect(error)
            })
        });
    }
}

export default ContentService;