import React from 'react';

export default class ContactInfo extends React.Component {
  
  handleClick(){
    this.props.onSelect(this.props.contactKey);
  }

  shouldComponentUpdate(nextProps, nextState){
    return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }
  render(){
    let getStyle = isSelect => {
      if(!isSelect) return;
      let style = {
        fontWeight : 'bold',
        backgroundColor : '#4efcd8'
      }
      return style;
    }
    // 필요없는 렌더링을 하고 있음. shouldComponentUpdate()를 사용해서 해결한다.
    console.log("rendered: " + this.props.name);
    return(      
      <li onClick={this.handleClick.bind(this)}
          style={getStyle(this.props.isSelected)} >
          {this.props.name} {this.props.phone}
      </li>
    );
  }
}

