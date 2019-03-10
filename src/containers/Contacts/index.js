import React, { Component } from 'react';
import ContactsBar from '../../components/ContactsBar';
import ContactCard from '../../components/ContactCard';
import './style.scss';
const API = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    }
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ contacts: data }));
  }
  render() {
    return (
      <div className="contacts">
        <ContactsBar />
        <div className="contactsList">
        {this.state.contacts.map((contact, index) => <ContactCard contact={contact} key={index} />)}
        </div>
      </div>
    )
  }
}