import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import getFilteredData from '../Helpers/getFilteredData';
import { StyledDiv } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('contacts'));
    if (items?.length) {
      setContacts(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = (name, number) => {
    if (contacts.find(user => user.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prev => [...prev, { name, number, id: crypto.randomUUID() }]);
  };

  const handleInput = e => {
    setFilter(e.target.value);
  };

  const handleDelete = id => {
    setContacts(prev => prev.filter(el => el.id !== id));
  };

  const filteredData = getFilteredData(contacts, filter);

  return (
    <StyledDiv>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />

      <h2>Contacts</h2>
      <Filter onChange={handleInput} />
      <ContactList contacts={filteredData} onDelete={handleDelete} />
    </StyledDiv>
  );
};
