import React from 'react';
import ContactInfo from './ContactInfo';
import ContactCreator from './ContactCreator';
import update from 'react-addons-update';
import ContactRemover from './ContactRemover';
import ContactEditor from './ContactEditor';

export default class Contacts extends React.Component {

  constructor(props) {
    super(props);
    // 새로운 state 를 사용 할 땐, 언제나 초기 값을 설정해줘야합니다. (그렇지 않으면 오류가 발생하기 쉽상입니다.)
    this.state = {
      contactData : [
        {name:"ales", phone:"010-0000-0001"},
        {name:"Betty", phone:"010-0000-0002"},
        {name:"Chalie", phone:"010-0000-0003"},
        {name:"dyna", phone:"010-0000-0004"}
      ], 
      selectedKey : -1,
      selected : {
        name : '',
        phone : ''
      }
    }
  }
  _insertContact(name, phone) {
    let newState = update(this.state,{
      contactData :{
        $push : [{"name":name, "phone":phone}]  
      }      
    });
    this.setState(newState);
  }

  _onSelect(key){
    if(key == this.state.selectedKey){
      console.log('key select cancelled');
      this.setState({
        selectedKey : -1,
        selected : {
          name : '',
          phone : ''
        }
      });
      return;
    }
    this.setState({
      selectedKey : key,
      selected : this.state.contactData[key]
    });
    console.log(key + 'is selected');
  }
  _isSelected(key){
    if(this.state.selectedKey == key){
      return true;
    }else{
      return false;
    }
  }

  _removeContact(){
    if(this.state.selectedKey == -1){
      console.log('contact not selected');
      return;
    }
    this.setState({
      contactData : update(this.state.contactData,{
        $splice : [[this.state.selectedKey, 1]]
      }),
      selectedKey : -1
    });
  }

  _editContact(name, phone){
    this.setState({
      contactData : update(
        this.state.contactData, 
        {
          [this.state.selectedKey] : {
            name : {$set : name},
            phone : {$set : phone}
          }
        }
      ),
      selected : {
        name : name,
        phone : phone
      }
    });

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
                                contactKey={i}
                                isSelected={this._isSelected.bind(this)(i)}
                                onSelect={this._onSelect.bind(this)}
                  />);
          })}

          <ContactCreator onInsert={this._insertContact.bind(this)}/>

          <ContactRemover onRemove={this._removeContact.bind(this)}/>

          <ContactEditor onEdit={this._editContact.bind(this)}
                        isSelected={(this.state.selectedKey != -1)}
                        contact={this.state.selected} />
        </ul>
      </div>
    );
  }
}