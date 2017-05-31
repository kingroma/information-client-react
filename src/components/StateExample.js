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