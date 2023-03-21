import AuthForm from '../../components/basics/forms/AuthForm';

const SignUp = () => {
  return (
    <div>
      <h1 className="text-xl pl-4 mt-4 text-center lg:text-left font-bold">
        Start Designing for{' '}
        <span className="text-accentColor font-semibold tracking-wider">
          FREE !
        </span>
      </h1>
      <AuthForm formType="signup" />
    </div>
  );
};

export default SignUp;
