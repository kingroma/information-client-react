
const  values = {
        TOKEN: '' ,
        USERNAME: '' , 
        PASSWORD: '' ,

        API_BASE_URL: 'http://127.0.0.1:8080/api',
        LOGIN_URL: '/user/login' , 
        CONTENT_LIST_URL: '/content/listAll'
        }

class GlobalValue {

    static setValue(key , value){
        values[key] = value;
    }

    static getValue(key){
        return values[key];
    }

    static getBaseUrl(){
        return values["API_BASE_URL"];
    }

    static getToken(){
        return values["TOKEN"];
    }
}

export default GlobalValue ;