import axios from 'axios';
import ObjectUtil from './ObjectUtil'
import GlobalValue from './GlobalValue'

class RequestUtil {
    RequestUtil(){
    }

    static GET(url , json){
        return new Promise((resolve,reject) => {
            var param = '?';
        
            if ( ObjectUtil.isNotNull(json) ){
                for ( var key in json ){
                    param += key + '=' + json[key] + '&';
                }

                param = param.substr( 0 , param.length -1 )
            } else { 
                param = '';
            }

            url = GlobalValue.getBaseUrl() + url + param ;

            console.log("GET > " + url )

            axios({ 
                    method: 'get',
                    headers: {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'},
                    url: url ,
            })
            .then( response => { 
                console.log(response); 
                resolve(response.data)
            })
            .catch( e => {
                console.log(e);
                reject(e)
            })
        })
    }

    static POST(url,json){
        return new Promise((resolve,reject) => {
            var param = '?';
        
            if ( ObjectUtil.isNotNull(json) ){
                for ( var key in json ){
                    param += key + '=' + json[key] + '&';
                }

                param = param.substr( 0 , param.length -1 )
            } else { 
                param = '';
            }

            url = GlobalValue.getBaseUrl() + url + param ;

            console.log("POST > " + url )

            axios({ 
                    method: 'post',
                    headers: {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'},
                    url: url ,
            })
            .then( response => { 
                console.log(response); 
                resolve(response.data)
            })
            .catch( e => {
                console.log(e);
                reject(e)
            })
        })
    }

    requestFetch(data){
        fetch("https://api.example.com/items")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          // 주의: 컴포넌트의 실제 버그에서 발생하는 예외사항들을 넘기지 않도록 
          // 에러를 catch() 블록(block)에서 처리하기보다는 
          // 이 부분에서 처리하는 것이 중요합니다.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    
}

export default RequestUtil;