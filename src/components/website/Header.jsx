import Navbar from './Navbar';
import Link from 'next/link';
// icons
import { HiMenuAlt4, HiScissors } from 'react-icons/hi';
import { useState } from 'react';

export default function Header({ authPage }) {
  const [showNav, setShowNav] = useState(false);

  function isShowNav() {
    setShowNav((prevState) => !prevState);
  }
  return (
    <header className="font-primary text-textColor h-20 w-full flex items-center justify-around border-b-[1px] border-textColor ">
      <Link href={`/`} legacyBehavior>
        <a className="flex items-center">
          <span className="text-3xl font-bold font-secondary">SP</span>
          <span className="ml-2 font-semibold">Website Buider</span>
        </a>
      </Link>
      <div>
        <div className="menuIcon lg:hidden">
          <HiMenuAlt4
            className={`${showNav ? 'hidden' : 'block'} text-4xl`}
            onClick={isShowNav}
          />
          <HiScissors
            className={`${showNav ? 'block' : 'hidden'} text-4xl`}
            onClick={isShowNav}
          />
        </div>
        <div className={`${showNav ? 'block' : 'hidden'} lg:hidden`}>
          <Navbar toggleNav={isShowNav} authPage={authPage} />
        </div>
        <div className="hidden lg:block">
          <Navbar toggleNav={isShowNav} authPage={authPage} />
        </div>
      </div>
    </header>
  );
}
