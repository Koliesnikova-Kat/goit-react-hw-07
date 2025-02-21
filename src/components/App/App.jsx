import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();

  const { items, isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1 className={s.h1}>PhoneBook</h1>

      <ContactForm />

      <SearchBox />

      {isLoading && !error && <p>Contacts are loading...</p>}

      {error && <p>{error}</p>}

      {items.length > 0 && <ContactList />}
    </>
  );
}
