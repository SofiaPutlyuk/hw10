import React, { Fragment } from "react";
import styled from 'styled-components';
const List = styled.li`
list-style:none;

`
const ContainerList = styled.div`
width:400px;
height:300px;
display:flex;
align-items:center;
justify-content:center;
gap:10px;
`
const Form = styled.div`
background-color:white;
box-shadow: 5px  12px 25px 10px #6569C8;
border-radius:20px ;
border: 0.5cm #474EFF;
display:flex;
flex-direction:column;
border-radius:20px;
height: 100%;
width:300px;
margin:auto;
padding-bottom:50px;
gap:30px;
`
const InputForm = styled.input`
width:200px;
height:30px;
border:none;
border-radius:25px;
background: linear-gradient(135deg, #a78bfa, #60a5fa);
text-align:center;
margin:auto;
`
const Text = styled.h2`
  font-size: 30px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  letter-spacing: 2px;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
  text-align:center;
`
const Button = styled.button`
background: linear-gradient(135deg, #4f46e5, #3b82f6);
border:none;
width:100px;
height:45px;
border-radius:10px;
margin:auto;
`
const UlContainer = styled.ul`
 background: linear-gradient(135deg, #e0e7ff, #c7d2fe); 
 border:none;
 border-radius:20px;
 width:400px;
 height:100%;
 margin:auto;
 margin-top:50px;
 padding:20px;
`
class Phonebook extends React.Component {

    render() {
        return (
            <Fragment>
                <Form>
                <Text>Phonebook</Text>
                    <InputForm
                        type="text"
                        name="name"
                        value={this.props.name}
                        placeholder="Введи ім'я контакту"
                        onChange={this.props.handleContact}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                      <InputForm
                        type="text"
                        name="name"
                        value={this.props.filter}
                        placeholder="Пошук контакту"
                        onChange={this.props.handleFilter}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <InputForm
                        type="tel"
                        name="number"
                        value={this.props.tel}
                        placeholder="Введи номер контакту"
                        onChange={this.props.handleContactTel}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <Button type="button" onClick={(e) => { e.preventDefault(); this.props.handleAddContact() }}>Add Contact</Button>
                    </Form>
                <UlContainer>
                <Text>Contact List</Text>
                    {this.props.contact.map((elem) => (
                        <List key={elem.id}>
                            <ContainerList>
                                <p>{elem.name}</p>
                                <p>{elem.number}</p>
                                <Button onClick={(e) => {
                                    e.preventDefault();
                                    this.props.handleDelete(elem.id);
                                }}>Delete</Button>
                            </ContainerList>
                        </List>
                    ))}
</UlContainer>
            </Fragment>
        )
    }
}
export default Phonebook;