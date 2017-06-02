import React from 'react';
import ContactInfo from './ContactInfo';

export default class Contacts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contactData : [
        {name:"ales", phone:"010-0000-0001"},
        {name:"Betty", phone:"010-0000-0002"},
        {name:"Chalie", phone:"010-0000-0003"},
        {name:"Chalie", phone:"010-0000-0004"}
      ]
    }
  }


  render(){
    return(
      <div>
        <h1>연락처</h1>
        <ul>
          {this.state.contactData.map((contact,i) => {
            return (<ContactInfo name={contact.name} 
                                phone={contact.phone}
                                key={i}
                  />);
          })}
        </ul>
      </div>
    );
  }
}