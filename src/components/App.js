import React from 'react';
import Header from './Header';
import Content from './Content';

// 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.
class App extends React.Component {
    
    sayHey(){
       alert("hey");
    }
    
    render(){
        let text = "Dev-Server";

        let pStyle = {
            color: 'aqua',
            backgroundColor: 'black'
        };

        return  (
            <div>
                <Header />
                <Content />
                <h1> Hello Velopert </h1>
                <h2> Welcome to {text}</h2>
                <button onClick= {this.sayHey}>Click Me</button>
                <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
            </div>
        )   
    }
}
export default App;