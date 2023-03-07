import { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import NumberList from './NumberList/NumberList';
import Filter from './Filter/Filter';

import style from './App.module.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContact = JSON.parse(contacts);
    if (parseContact) {
      setContacts(parseContact);
    }
  }, []);

  const addNumber = objNumber => {
    const { id, name, number } = objNumber;
    if (contacts.filter(e => e.name === name).length !== 0) {
      alert(`${name}is already in contacts.`);
      return;
    }
    setContacts(prevState => {
      localStorage.setItem(
        'contacts',
        JSON.stringify([{ id, name, number }, ...prevState])
      );
      return [{ id, name, number }, ...prevState];
    });
  };

  const onFilterChage = e => {
    const value = e.currentTarget.value;
    setFilter(value);
  };

  const deleteContact = id => {
    const newListContact = contacts.filter(contact => contact.id !== id);
    setContacts(newListContact);
    localStorage.setItem('contacts', JSON.stringify(newListContact));
  };

  const normilizeFilter = filter.toLowerCase();
  const visibleContact = contacts
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(normilizeFilter)
      )
    : '';
  return (
    <div className={style.App__container}>
      <div>
        <h1 className={style.App__title}>Phonebook</h1>
        <ContactForm addNumber={addNumber} />
        <h2 className={style.App__title}>Contacts</h2>
        <Filter filter={filter} onFilterChage={onFilterChage} />
        <NumberList list={visibleContact} deleteContact={deleteContact} />
      </div>
    </div>
  );
}

export default App;
