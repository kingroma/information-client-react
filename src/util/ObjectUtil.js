
class ObjectUtil {

    static isNotNull(str){
        if ( str != null && str != undefined && str != '' ){
            return true 
        }
        return false 
    }
}

export default ObjectUtil ;