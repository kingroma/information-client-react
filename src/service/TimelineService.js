import RequestUtil from '../util/RequestUtil'
import ObjectUtil from '../util/ObjectUtil'
import GlobalValue from '../util/GlobalValue'

class TimelineService {
    constructor(){

    }

    getTimeline(offset, limit){
        return new Promise((resolve,reject)=>{
            console.log ("GET TIMELINE " + offset + ' / ' + limit)

            
            RequestUtil.GET(
                GlobalValue.getValue("TIMELINE_URL"),
                {'token':GlobalValue.getToken(),'offset':offset,'limit':limit}
            ).then( data => {
                if ( ObjectUtil.isNotNull(data)  ){
                    if (data.resultCode = "200" && ObjectUtil.isNotNull(data.result)){
                        
                        resolve(data.result)
                    }else {
                        reject('resultMessage : '+ data.resultMessage);
                    }
                }else {
                    reject("GET PROGRAM INFORMATION fail")
                }
            })
        });
    }
}
export default TimelineService;