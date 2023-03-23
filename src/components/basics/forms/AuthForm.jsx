import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import FormField from './FormField';

export default function AuthForm({ formType }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    username: null,
    email: null,
    password: null,
  });
  const [errorText, setErrorText] = useState('');
  const expression = [
    {
      name: 'username',
      testAgainst: /^[a-zA-Z][a-zA-Z0-9]{3,5}$/,
    },
    {
      name: 'email',
      // eslint-disable-next-line no-useless-escape
      testAgainst: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i,
    },
    {
      name: 'password',
      testAgainst: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?=.{8,})/,
    },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // check for errors
    const expressionObj = expression.find((exp) => exp.name === name);
    const regex = new RegExp(expressionObj.testAgainst);
    const isValid = regex.test(value);

    setError((prevState) => ({
      ...prevState,
      [name]: isValid ? false : true,
    }));
  };

  const isSignUpForm = formType === 'signup';

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSignUpForm) {
      const response = await fetch('/sp-build_export/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle successful response
        const {
          userData: { id },
        } = await response.json();
        console.log(id);
        router.push(`/auth/verify-email/${id}`);
      } else {
        // Handle error response
        const errorData = await response.json();
        console.log(errorData);
        if (errorData.errorType == 'Validation Error') {
          errorData.errors.map(
            (singleError) =>
              // eslint-disable-next-line no-prototype-builtins
              error.hasOwnProperty(singleError.field) &&
              setError((prevState) => ({
                ...prevState,
                [singleError.field]: singleError.msg,
              }))
          );
        } else {
          setErrorText(errorData.msg);
          setFormData({
            username: '',
            email: '',
            password: '',
          });
        }
      }
    }
  };

  return (
    <>
      {errorText && <p className="auth_form_error">{errorText}</p>}
      <form onSubmit={handleSubmit} className="p-4 max-w-lg mx-auto">
        {isSignUpForm && (
          <FormField
            name="username"
            label="Username"
            type="text"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
            error={error.username}
          />
        )}
        {typeof error.username === 'string' && (
          <p className="auth_form_error">**{error.username}</p>
        )}

        <FormField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
          error={error.email}
        />

        {typeof error.email === 'string' && (
          <p className="auth_form_error">**{error.email}</p>
        )}

        <FormField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleInputChange}
          error={error.password}
        />

        {typeof error.password === 'string' && (
          <p className="auth_form_error">**{error.password}</p>
        )}

        <div className="w-full flex items-center justify-center">
          <button
            className="border-[1px] border-accentColor rounded-md text-textColor font-bold py-2 px-4 lg:order-2 lg:ml-[-20px]"
            type="submit"
          >
            {isSignUpForm ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
        {!isSignUpForm && (
          <div className="flex justify-between mt-4">
            <Link href={`/signup`} className="auth_forms_links">
              Don&apos;t have an account?
            </Link>
            <Link href={`/signup`} className="auth_forms_links">
              Forgot Password?
            </Link>
          </div>
        )}
      </form>
      <div id="google" className="flex flex-col items-center">
        <p className="font-semibold text-xl font-secondary tracking-wider mb-4">
          Or
        </p>
        <div>
          <Link
            href={`/auth/google`}
            className="border-[1px] bg-accentColor rounded-md text-textColor mx-auto font-bold py-2 px-4 flex items-center justify-between"
          >
            <Image
              src={`/images/google_logo.png`}
              alt="Google Logo"
              width={20}
              height={20}
            />
            <span className="ml-3">
              Sign{isSignUpForm ? 'Up' : 'In'} with Google
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
