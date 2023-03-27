import Header from '../website/Header';
import Footer from '../website/Footer';
import { useEffect, useState } from 'react';

export default function WebsitelLayout({ children }) {
  const [isAuthPage, setIsAuthPage] = useState(false);
  useEffect(() => {
    if (children[1].type.name === 'SignIn') {
      setIsAuthPage(true);
    } else if (children[1].type.name === 'SignUp') {
      setIsAuthPage(true);
    } else if (children[1].type.name === 'VerifyEmail') {
      setIsAuthPage(true);
    } else {
      setIsAuthPage(false);
    }
  }, [children]);

  console.log(children);

  return (
    <>
      <Header authPage={isAuthPage} />
      <main>{children}</main>
      <Footer authPage={isAuthPage} />
    </>
  );
}
