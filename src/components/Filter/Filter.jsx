import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import actions from '../../redux/contacts/actions';
import { getContactsFilter } from '../../redux/contacts/selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(actions.changeFilter(event.target.value));
  return (
    <label>
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder="Find contact by name!!!"
      />
    </label>
  );
}
