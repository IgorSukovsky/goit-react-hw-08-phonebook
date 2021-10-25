import { useState } from 'react';
import { useDispatch } from 'react-redux';

import authOperations from '../redux/authorization/auth-operations';
import styles from './styles.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [type, setType] = useState('password');
  const toggleType = () => {
    setType(prev => (prev === 'password' ? 'text' : 'password'));
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={styles.text}>LOG-IN PAGE</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="mail:"
          />
        </label>

        <label className={styles.label}>
          <input
            className={styles.input}
            type={type}
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password:"
          />
          <button
            className={styles.passwordControl}
            type="button"
            onClick={toggleType}
          >
            &#128065;
          </button>
        </label>

        <button type="submit" className={styles.formBtn}>
          Go!
        </button>
      </form>
    </div>
  );
}
