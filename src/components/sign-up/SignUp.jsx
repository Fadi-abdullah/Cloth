import './SignUp.styles.scss';
import FormInput from '../form-input/FormInput';
import { useState } from 'react';

import {
  createUser,
  createOrGetUserDoc,
  signInUser,
} from '../../utilz/firebase/firebase';

const defaultFormFields = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUser(email, password);
      await createOrGetUserDoc(user, {
        displayName: username,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="signUpSection">
      <h3>Don't have an account ?</h3>
      <span>Sign Up</span>
      <form className="signUpForm" onSubmit={submitHandler}>
        <FormInput
          label={'Username'}
          type="text"
          name="username"
          value={username}
          required
          onChange={changeHandler}
        />
        <FormInput
          label={'Email'}
          type="email"
          name="email"
          value={email}
          required
          onChange={changeHandler}
        />
        <FormInput
          label={'Password'}
          type="password"
          name="password"
          value={password}
          required
          onChange={changeHandler}
        />
        <FormInput
          label={'Confirm Password'}
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={changeHandler}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
