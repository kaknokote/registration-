import React, { useRef } from 'react';
import styles from './RegistrationForm.module.css'
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.log(data);
    submitButtonRef.current.focus();
  }

  const password = watch('password', '');

  const submitButtonRef = useRef(null);

  return (
    <div className={styles.RegistrationForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email обязателен',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Введите корректный email'
              }
            })}
          />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label>Пароль:</label>
        <input
          type="password"
          {...register('password', {
            required: 'Пароль обязателен',
            minLength: {
              value: 6,
              message: 'Пароль должен содержать минимум 6 символов'
            }
          })}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
      </div>

      <div>
        <label>Подтвердите пароль:</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Подтверждение пароля обязательно',
            validate: (value) => value === password || 'Пароли не совпадают'
          })}
        />
        {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
      </div>
      
      <button type="submit" ref={submitButtonRef} disabled={!isValid}>Зарегистрироваться</button>
    </form>
    </div>
  );
}

export default RegistrationForm;
