import Link from 'next/link';
// icons
import { HiArrowSmRight } from 'react-icons/hi';
export default function Navbar({ toggleNav, authPage }) {
  return (
    <nav className="absolute top-20 left-0 lg:static px-4 lg:px-0 h-[calc(100vh-5rem)] lg:h-full w-screen lg:w-auto bg-secondaryColor">
      <ul className="space-y-4 lg:space-y-0 pt-4 lg:pt-0 text-lg lg:flex lg:items-center lg:space-x-4 lg:text-sm">
        <li className="">
          <Link href={`/docs`} onClick={toggleNav}>
            Docs
          </Link>
        </li>
        <li>
          <Link href={`/blogs`} onClick={toggleNav}>
            Blog
          </Link>
        </li>
        {authPage === false && (
          <>
            <li className="">
              <Link
                href={`/design`}
                className="border-b-2 border-accentColor lg:border-none lg:text-accentColor font-semibold pb-1"
                onClick={toggleNav}
              >
                Demo
              </Link>
            </li>
            <li className="flex items-center lg:border-l-2  lg:pl-1 border-textColor rounded-lg hover:font-semibold">
              <Link href={`/auth/signin`} onClick={toggleNav}>
                SignIn
              </Link>
              <HiArrowSmRight className="text-2xl ml-2 lg:hidden" />
            </li>
            <li className="hidden lg:block ">|</li>
            <li className="flex items-center lg:border-r-2 lg:pr-1 border-textColor rounded-lg hover:font-semibold">
              <Link href={`/auth/signup`} onClick={toggleNav}>
                SignUp
              </Link>
              <HiArrowSmRight className="text-2xl ml-2 lg:hidden" />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
