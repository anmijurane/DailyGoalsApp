import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginAsync } from '../../actions/auth';
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';

export default function LoginScreen() {

  const dispatch = useDispatch();
  const { msgError, loading } = useSelector(state => state.ui);

  const { formValues, handleInputChange } = useForm({
    email: 'testuser@gmail.com',
    password: 'passwordTest00'
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if ( validForm() ) {
      dispatch( startLoginAsync(email, password) );
    }
  }

  const handleLoginByGoogle = () => {
    dispatch( startGoogleLogin() );
  }

  const validForm = () => {
    if ( !validator.isEmail( email ) ) {
      dispatch( setError( 'Email isn`t valid' ) );
      return false;
    } 
    if ( validator.isEmpty( password ) ) {
      dispatch( setError( 'The password is empty' ) );
      return false;
    }
    dispatch( removeError() ) ;
    return true;
  }

  return (
    <>
      <h2 className="auth__title">Login</h2>
      <form onSubmit={ handleLogin }>
        {msgError && (
            <p className='alert is-danger'> { msgError } </p>
        )}
        <div className='form__group'>
          <label htmlFor="login_email">
            Email
          </label>
          <input
            className='input__control'
            type="email"
            name="email"
            id="login_email"
            placeholder=""
            autoComplete='off'
            value={email}
            onChange={ handleInputChange }
          />
        </div>

        <div className='form__group'>
          <label htmlFor="login_password">
            Password
          </label>
          <input
            className='input__control'
            type="password"
            name="password"
            id="login_password"
            placeholder=""
            autoComplete='off'
            value={password}
            onChange={ handleInputChange }
          />
        </div>
        
        <div className='form__group'>
          <button
            className={`button is-primary ${ loading ? 'is-blocked' : '' }`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
        </div>

        <div className="or__option">
          <hr /> <span>Or</span> <hr />
        </div>

        <div className="is-center m-4">
          <p className='is-primary'>
            Login with social networks
          </p>
        </div>

        <div className="">
          <div
            className="google-btn"
            onClick={ handleLoginByGoogle }
          >
              <div className="google-icon-wrapper">
                  <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
              <p className="btn-text">
                  <b>Sign in with google</b>
              </p>
          </div>
        </div>

        <div className="or__option">
          <hr /> <span>Or</span> <hr />
        </div>

        <div className="is-center">
          <Link to='/auth/register' className='link' >
            Create New Account
          </Link>
        </div>
      </form>
    </>
  )
}
