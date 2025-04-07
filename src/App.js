import './App.css';
import Phonebook from './components/Phonebook';
import { Component } from 'react';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("Contact")) || [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: ''
  }
  handleContact = ({target : {value}}) => {
    this.setState({
     name : value,
     filter : value
    })
  }
  handleContactTel = ({target : {value}}) => {
    this.setState({
     number : value
    })
  }
  handleAddContact = () => {
   const {contacts ,name, number} = this.state
   const contactExists = contacts.some(contact =>
    contact.name.toLowerCase() === name.toLowerCase() 
  );
 if (contactExists) {
    alert("Такий контакт вже існує");
    return; 
  }
   const updateContact = [...contacts, {id:nanoid(),name,number}]
   this.setState({
    contacts:updateContact,
    name:"",
    number:""
   })
   localStorage.setItem("Contact",JSON.stringify(updateContact))
  }
  handleFilterContact = () => {
    const {contacts,filter} = this.state
    const filterContact = filter.toLowerCase()

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterContact)
    );

  }
  handleDeleteTask = (deletedTask) => {
   const {contacts} = this.state
   const updateContact = contacts.filter(contact => contact.id !== deletedTask) 
   this.setState({
     contacts:updateContact
   })
   localStorage.setItem("Contact",JSON.stringify(updateContact))
  }
    render(){
    const {name,number} = this.state
     return(
      <Phonebook name={name} handleContact={this.handleContact} handleAddContact={this.handleAddContact} contact={this.handleFilterContact()} tel={number} handleContactTel={this.handleContactTel} handleDelete={this.handleDeleteTask}/>
    )
  }
}

export default App;
