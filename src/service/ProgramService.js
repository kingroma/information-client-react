import RequestUtil from '../util/RequestUtil'
import ObjectUtil from '../util/ObjectUtil'
import GlobalValue from '../util/GlobalValue'

class ProgramService {
    constructor(){

    }

    getProgramInformation(programId){
        return new Promise((resolve,reject)=>{
            console.log ("GET PROGRAM INFORMATION : " + programId)

            if( ObjectUtil.isNotNull(programId) ){
                RequestUtil.GET(
                    GlobalValue.getValue("PROGRAM_URL") + '/' + programId ,
                    {'token':GlobalValue.getToken()}
                ).then( data => {
                    if ( ObjectUtil.isNotNull(data)  ){
                        
                        if (data.resultCode = "200" && ObjectUtil.isNotNull(data.result)){
                            
                            resolve(data.result)
                        }else {
                            reject('resultMessage : '+ data.resultMessage);
                        }
                    }else {
                        reject("login fail")
                    }
                })
            } else {
                reject('programId is empty')
            }
        });
    }
}
export default ProgramService;