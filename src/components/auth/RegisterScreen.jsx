import React from 'react'
import { Link } from 'react-router-dom'

export default function RegisterScreen() {
  return (
    <>
      <h2 className="auth__title">Register</h2>
      <form>

        <div className='form__group'>
          <label htmlFor="login_email">
            Name
          </label>
          <input
            className='input__control'
            type="text"
            name="name"
            id="register_name"
            placeholder=""
            autoComplete='off'
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
