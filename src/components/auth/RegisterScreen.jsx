import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';
import { useDispatch, useSelector } from 'react-redux';
import { starRegisterWithEmailAnsPassword } from '../../actions/auth';

export default function RegisterScreen() {

  const dispatch = useDispatch();
  const stateUse = useSelector( state => state.ui );
  console.log(stateUse);
  
  const { formValues, handleInputChange } = useForm({
    name: 'testuser',
    email: 'testuser@gmail.com',
    password: 'passwordTest00',
    password2: 'passwordTest00',
  });

  const {
    name, email, password, password2
  } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( validForm() ) {
      dispatch( starRegisterWithEmailAnsPassword( email, password, name ) );
    }
  }
  const validForm = () => {
    if(validator.isEmpty(name)) {
      dispatch( setError('name is empty') );
      return false;
    }
    if ( !validator.isEmail(email) ) {
      dispatch( setError('email is invalid') );
      return false;
    }
    if ( validator.isEmpty(password) || validator.isEmpty(password2) ) {
      dispatch( setError('the password is empty') );
      return false;
    }
    if ( password !== password2 ) {
      dispatch( setError('the password is`t equals') );
      return false;
    }
    dispatch( removeError() );
    return true;
  }

  return (
    <>
      <h2 className="auth__title">Register</h2>
      <form onSubmit={handleSubmit} >

        <div className='form__group'>
          <label htmlFor="register_name">
            Name
          </label>
          <input
            className='input__control'
            type="text"
            name="name"
            id="register_name"
            placeholder=""
            autoComplete='off'
            value={name}
            onChange={handleInputChange}
          />
        </div>
        
        <div className='form__group'>
          <label htmlFor="register_email">
            Email
          </label>
          <input
            className='input__control'
            type="email"
            name="email"
            id="register_email"
            placeholder=""
            autoComplete='off'
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className='form__group'>
          <label htmlFor="register_password">
            Password
          </label>
          <input
            className='input__control'
            type="password"
            name="password"
            id="register_password"
            placeholder=""
            autoComplete='off'
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div className='form__group'>
          <label htmlFor="register_password2">
            Confirm Password
          </label>
          <input
            className='input__control'
            type="password"
            name="password2"
            id="register_password2"
            placeholder=""
            autoComplete='off'
            value={password2}
            onChange={handleInputChange}
          />
        </div>

        <div className='form__group'>
          <button className='button is-primary'>
            Register
          </button>
        </div>

        <div className="or__option">
          <hr /> <span>Or</span> <hr />
        </div>

        <div className="is-center">
          <Link to='/auth/login' className='link' >
            Already account?
          </Link>
        </div>
      </form>
    </>
  )
}
