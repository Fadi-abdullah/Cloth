import './Auth.styles.scss';
import SignUp from '../../components/sign-up/SignUp';
import SignIn from '../../components/sign-in/SignIn';

const Auth = () => {
  return (
    <div className="auth">
      <SignUp />
      <SignIn />
    </div>
  );
};
export default Auth;
