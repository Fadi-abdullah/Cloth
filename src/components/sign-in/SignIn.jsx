import './SignIn.styles.scss';
import FormInput from '../form-input/FormInput';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { signInUser, createOrGetUserDoc } from '../../utilz/firebase/firebase';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const navigate = useNavigate();

  const resetFormFields = () => setFormFields(defaultFormFields);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signInUser(email, password);
      await createOrGetUserDoc(user);
      resetFormFields();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="signInSection">
      <h3>Don't have an account ?</h3>
      <span>Sign Up</span>
      <form className="signInForm" onSubmit={submitHandler}>
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
        <div className="buttonsDiv">
          <button type="submit">Sign In</button>
          <button type="button">Google Sign In</button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
