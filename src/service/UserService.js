import RequestUtil from '../util/RequestUtil'
import ObjectUtil from '../util/ObjectUtil'
import GlobalValue from '../util/GlobalValue'


class UserService {
    constructor(){

    }

    login(username,password){ 
        return new Promise((resolve,reject) => {    
            console.log('LOGIN  : ' + username + ' / ' + password);

            username = ObjectUtil.isNotNull(username) ? username : GlobalValue.getValue("USERNAME");
            password = ObjectUtil.isNotNull(password) ? password : GlobalValue.getValue("PASSWORD");

            if ( ObjectUtil.isNotNull(username) && ObjectUtil.isNotNull(password) ) {
                RequestUtil.POST(
                    GlobalValue.getValue("LOGIN_URL"),
                    {'userId':username,'userPw':password}
                ).then( data => {
                    if ( ObjectUtil.isNotNull(data)  ){
                        
                        if (data.resultCode = "200" && ObjectUtil.isNotNull(data.result)){
                            var token = data.result;
                            GlobalValue.setValue("USERNAME",username);
                            GlobalValue.setValue("PASSWORD",password);
                            GlobalValue.setValue("TOKEN",token);

                            resolve(token)
                        } else {
                            reject('resultMessage : '+ data.resultMessage);
                        }
                    } else {
                        reject("login fail")
                    }
                });
            } else {
                reject("username or password is empty")
            }
        });
    }
}

export default UserService;