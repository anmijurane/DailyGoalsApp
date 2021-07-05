import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginScreen() {
  return (
    <>
      <h2 className="auth__title">Login</h2>
      <form>
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
          />
        </div>

        <div className='form__group'>
          <label htmlFor="login_password">
            Password
          </label>
          <input
            className='input__control'
            type="email"
            name="password"
            id="login_password"
            placeholder=""
            autoComplete='off'
          />
        </div>

        <div className='form__group'>
          <button className='button is-primary'>
            Login
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
          <div className="google-btn">
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
