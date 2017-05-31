# react-basic

Velopert님 강의(https://velopert.com/reactjs-tutorials)을 연습하는 공간입니다.

## Package 설명
1. **babel** – 아직 ECMAScript6 를 지원하지 않는 환경에서 ECMAScript6 Syntax를 사용 할 수 있게 해줍니다.
2. **webpack** – 모듈 번들러로서, Browserify 처럼 브라우저 위에서 import (require) 을 할 수 있게 해주고 자바스크립트 파일들을 하나로 합쳐줍니다.
3. **webpack-dev-server** – wepback에서 지원하는 간단한 개발서버로서 별도의 서버를 구축하지 않고도 웹서버를 열 수 있으며 hot-loader를 통하여 코드가 수정될때마다 자동으로 리로드 되게 할 수 있습니다.

## JSX
### 장점
1. JSX는 컴파일링 되면서 최적화 되므로, 빠르다
2. Type-safe (어떠한 연산도 정의되지 않은 결과를 내놓지 않는것, 즉 예측 불가능한 결과를 나타내지 않는 것)하며 컴파일링 과정에서 에러를 감지 할 수 있다.
3. HTML에 익숙하다면, JSX를 사용하여 더 쉽고 빠르게 템플릿을 작성 할 수 있다.

```javascript
import React from 'react';
class App extends React.Component {
    render(){
        return (
                <h1>Hello Velopert</h1>
        );
    }
}
export default App;
```
React JSX 는 XML-like Syntax 를 native Javascript로 변환해줍니다.  따라서 ” ” 로 감싸지 않는 점 주의하시구요, ( ) 를 사용하지 않아도 오류는 발생하지 않지만 가독성을 위하여 사용하는것이 좋습니다.

### 확장자에 대해서
- JSX 파일의 확장자의 경우, 이전에는 개발자들이 .jsx 확장자를 사용하였지만 요즘은 .js 를 사용하는 추세로 전환되어 가고 있습니다. 페이스북의 오픈소스 에디터인 draftjs 는 구별을 제대로 하기 위하여 .react.js 확장자를 사용하기도 합니다. 

### Nested Elements
- 컴포넌트에서 여러 Element 를 렌더링 해야 할 때, 그 element들을 필수적으로 container element 안에 포함시켜줘야됩니다

```javascript
        // error
        return  (
            <h1> Hello Velopert</h1>
            <h2> Welcome </h2>
        );
```
다음과 같이 div element 를 wrapper 로 사용하면 오류가 발생하지 않습니다.
```javascript
        // success
        return  (
          <div>
            <h1> Hello Velopert</h1>
            <h2> Welcome </h2>
          </div>  
        );
```

### Javascript Expression
- JSX 안에서, JavaScript 표현을 사용하는 방법은 매우 간단합니다. 그냥 { } 로 wrapping 하면 됩니다.

```javascript
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
                <h1> Hello Velopert </h1>
                <h2> Welcome to {text}</h2>
                <button onClick={this.sayHey}>Click Me</button>
                <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
            </div>
        );
    }
```
 ES6 에 도입된 let 키워드는 var 과 비슷하지만, var 변수의 scope는 기본적으로 함수 단위인데 let 은 블럭 범위 내에서 변수를 선언합니다. 따라서 가끔 발생하는 javascript 의 Scope관련 문제를 해결 할 수 있습니다. 지금 이 상황에선 let 을 사용하는것이 필수는 아니지만, ES6 에선 평상시 let 을 쓰고 var은 필요한 상황에서만 사용하는게 좋습니다. 
 <br />
 **{ text }** 를 사용하여 text Javascript 변수를 렌더링합니다.
 <br />
 **{this.sayHey}** 를 통해 버튼이 클릭되면 해당 메소드가 실행되게 할 수 있습니다. () 가 뒤에 안붙어있다는점을 주의해주세요. 만약에 () 가 붙으면 페이지가 로드 될때도 실행되고, 클릭할때도 실행됩니다. 
 <br />
 React의 Inline Style 에서는, string 형식이 사용되지 않고 **key 가 camelCase 인 Object 가 사용**됩니다.

#### if-else 사용불가
 - JSX 안에서 사용되는 JavaScript 표현에는 If-Else 문이 사용 불가합니다. 이에 대한 대안은 ternary (condition ? true : false ) 표현을 사용하는 것입니다.

 ```javascript
  <p>{1 == 1 ? 'True' : 'False'}</p>
 ```

### 주석
```javascript
{ /* comments */ }
```
- JSX 안에서 주석을 작성할 때엔, 위 형식으로 작성하면 됩니다. 여기에 작성된 주석은 브라우저상 source 에서 나타나지 않습니다.

## Component 생성 및 모듈화
- 하나의 js 파일안에 여러개의 컴포넌트를 만들수 있지만 유지보수가 좋지 않아서 js파일을 나누어서 관리하는게 좋습니다.
```javascript
// Header.js
import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <h1>Header</h1>      
    );
  }
}

export default Header;
// Content.js
import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>Content</h2>
        <p> Hey !</p>
      </div>
    )
  }
}

export default Content;

// App.js
import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    render(){
        return  (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;

```

## props
컴포넌트에서 변동되지 않는(immutable) 데이터를 사용할때는 prpos를 사용한다. parent 컴포넌트에서 child 컴포넌트로 데이터를 전달할때 사용됩니다.
```javascript
// Header.js
import React from 'react';

class Header extends React.Component {
  render(){
    return (
      <h1>{this.props.title}</h1>      
    );
  }
}

export default Header;

// App.js
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
export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDOM.render(<App headerTitle="Welcome !"
                     contentTitle="Stranger !"
                     contentBody="Welcomde to exapmle app"/>, rootElement);

```

### 디폴트 props 설정
- 기본값을 설정 할 땐, 컴포넌트 클래스 하단에 className.defaultProps = { propName: value } 를 삽입하면 됩니다.
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
    render(){
        return  (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                          body={ this.props.contentBody }/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;
```
### Type검증(Validate)
 - 컴포넌트 에서 원하는 props 의 Type 과 전달 된 props 의 Type 이 일치하지 않을 때 콘솔에서 오류 메시지가 나타나게 하고 싶을 땐, 컴포넌트 클래스의 propTypes 객체를 설정하면 됩니다. 또한, 이를 통하여 필수 props 를 지정할 수 있습니다. 즉, props 를 지정하지 않으면 콘솔에 오류 메시지가 나타납니다.

```javascript
import React from 'react';
 

class Content extends React.Component {
    render(){
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p> { this.props.body } </p>
            </div>
        );
    }
}

Content.propTypes = {
    title: React.PropTypes.string,
    body: React.PropTypes.string.isRequired
};

export default Content;
```
body는 .isRequired 를 추가하여 필수 props 로 설정하였습니다.


#### propTypes 사용법이 react v15.5.0에서 변경됨 
```javascript
import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p> {this.props.body}</p>
      </div>
    )
  }
}

Content.propType = {
  title : PropTypes.string,
  body : PropTypes.string.isRequired
}

export default Content;
```


#### propTypes 예제들
```javascript
import React from 'react';


class ValidationExample extends React.Component {
    /* ... */
}

Content.propTypes = {

    // JS primitive types
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // anything that can be rendered ( numbers, string, elements, array, fragment)
    optionalNode: React.PropTypes.node,

    // React element
    optionalElement: React.PropTyps.element,

    // instance of specific class
    optionalMessage: React.PropTypes.instanceOf(Message),

    // limited to specific values
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // one of many types
    optionalUnion: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.propTypes.number
    ]),

    // array of specific type
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // object with property values of a certain type
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // object with particular shape
    optionalObjectWithShape: React.PropTypes.shape({
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
    }),

    // Required function
    requiredFunc: React.PropTypes.func.isRequired,

    // Required prop with any data type
    requiredAny: React.PropTypes.any.isRequired,

    // custom validator
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
};
/* ... */

export default ValidationExample;

```

## state
컴포넌트에서 유동적인 데이터를 다룰 때, state 를 사용합니다. React.js 어플리케이션을 만들 땐, state를 사용하는 컴포넌트의 갯수를 최소화 하는 것 을 노력해야합니다. 예를들어, 10 개의 컴포넌트에서 유동적인 데이터를 사용 하게 될 땐, 각 데이터에 state를 사용 할 게 아니라, props 를 사용하고 10 개의 컴포넌트를 포함시키는 container 컴포넌트를 사용하는것이 효율적입니다.

```javascript
import React from 'react';

class StateExample extends React.Component {
  constructor(porps) {
    super(props);
    this.state = {
      header : 'Header init state',
      content : 'content init state'
    };
  }
  updateHeader(text){
    this.setState({
      header:'Header has change'
    });
  }

  render() {
    return (
        <div>
          <h1>{this.state.header}</h1>
          <h2>{this.state.content}</h2>
          <button onClick={this.updateHeader.bind(this)}>update</button>
        </div>
    );
  }
}
export default StateExample;
```
- state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정합니다.
- state 를 렌더링 할 때는 { this.state.stateName } 을 사용합니다.
- state 를 업데이트 할 때는 this.setState() 메소드를 사용합니다. ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 **bind** 해주어야 합니다. (bind 하지 않으면 React Component 가 가지고있는 멤버 함수 및 객체에 접근 할 수 없습니다.)

##### props 와 state, 생긴건 비슷하지만 용도는 다릅니다. 헷갈리지 않도록 다음 특성을 기억하세요.
- parent 컴포넌트에 의해 값이 변경 될 수 있는가? 예(props) 아니오(state) 
컴포넌트 내부에서 변경 될 수 있는가? 아니오(props) 예(state) 
