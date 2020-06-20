
const  values = {
    TOKEN: '' ,
    USERNAME: '' , 
    PASSWORD: '' ,

    API_BASE_URL: 'http://127.0.0.1:8080/api',
    VIDEO_BASE_URL: 'http://127.0.0.1:8283/sample/',
    LOGIN_URL: '/user/login' , 
    CONTENT_LIST_URL: '/content/listAll',
    PROGRAM_URL: '/program/information',
    PROGRAM_SEARCH_URL: '/program/search',
    TIMELINE_URL: '/timeline/listAll',
    IMAGE_URL: '/image/get/'
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

static getImageUrl(){
    return values["IMAGE_URL"];
}
}

export default GlobalValue ;