import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import operations from '../../redux/contacts/operations';
import { getFilteredContacts } from '../../redux/contacts/selectors';
import styles from './Contacts.module.css';

export default function Contacts() {
  const contacts = useSelector(getFilteredContacts);
  // const loading = useSelector(getLoadingStatus);
  const dispatch = useDispatch();
  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  const onDelete = id => {
    dispatch(operations.deleteContact(id));
  };

  if (contacts) {
    return (
      <ul className={styles.contacts}>
        {contacts.map(contact => (
          <li className={styles.li} key={contact.id}>
            <p className={styles.contact}>
              {contact.name} : {contact.number}
            </p>
            <button
              className={styles.formBtn}
              type="button"
              onClick={() => onDelete(contact.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
