import AuthForm from '../../components/basics/forms/AuthForm';

const SignIn = () => {
  return (
    <div>
      <h1 className="text-xl pl-4 mt-4 text-center lg:text-left font-bold">
        Log into your Account
      </h1>
      <AuthForm formType="signIn" />
    </div>
  );
};

export default SignIn;
