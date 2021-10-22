import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import operations from '../redux/contacts/operations';

import Container from '../components/Container/Container';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import Contacts from '../components/Contacts/Contacts';
import styles from './styles.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div className="">
      <Container>
        <h1 className={styles.text}>PHONEBOOK</h1>
        <Form />
        <h2 className={styles.text}>CONTACTS</h2>
        <Filter />
        <Contacts />
      </Container>
    </div>
  );
}
