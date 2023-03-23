import { useRouter } from 'next/router';
import { useState } from 'react';

export default function VerifyEmail() {
  const router = useRouter();
  const { userId } = router.query;

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const sendEmail = async () => {
    const response = await fetch(
      `/sp-build_export/api/auth//verify-email/${userId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }
    );
    if (response.ok) {
      const { msg } = await response.json();
      setMessage(msg);
      setTimeout(() => {
        setMessage('');
        router.push('/');
      }, 10000);
    } else {
      const { msg } = await response.json();
      setError(msg);
      setTimeout(() => {
        setError('');
      }, 10000);
    }
  };
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold text-center">
        By Clicking below, You will get link to verify your email in your email
        box! Your id is : {userId}
      </h3>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <div className="flex justify-center mt-4">
        <button
          className="border-[1px] border-accentColor rounded-md text-textColor font-bold py-2 px-4"
          onClick={sendEmail}
        >
          Send Verify Link
        </button>
      </div>
    </div>
  );
}
