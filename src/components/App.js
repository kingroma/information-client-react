import React from 'react';
import Header from './Header';
import Content from './Content';

// 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention 입니다.
class App extends React.Component {  
    render(){      
        return  (
            <div>
                <Header title={this.props.headerTitle} />
                <Content title={this.props.contentTitle}
                         body={this.props.contentBody}/>
                
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