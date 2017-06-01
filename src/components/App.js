import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';

// 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.
class App extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            value : Math.round(Math.random() * 100)
        }
        this.updateValue = this.updateValue.bind(this);
    }
    updateValue(randomValue){
        this.setState({
            value : randomValue
        });
    }
    
    render(){      
        return  (
            <div>
                <Header title={this.props.headerTitle} />
                <Content title={this.props.contentTitle}
                         body={this.props.contentBody}/>
                <RandomNumber number={this.state.value}
                              onUpdate={this.updateValue}  />

                <Contacts />              
            </div>
        )   
    }
}

App.defaultProps = {
    headerTitle : 'Default header',
    contentTitle : 'Default content',
    contentBody : 'Default content body'
}
export default App;