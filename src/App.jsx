import React, { useRef } from 'react';
import styles from './App.module.css'
import { useForm } from 'react-hook-form';
import RegistrationForm from './RegistrationForm';

const App = () => {
  return (
    <div className={styles.App}>
        <h1>Добро пожаловать</h1>
        <RegistrationForm />
    </div>
  );
}

export default App;
