import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt1 } from 'react-icons/hi';
export default function SmHeader({ genres }) {
  return (
    <header>
      {/* logo */}
      <div id="logo" className="">
        <Link href={`/`}>
          <Image
            src={`/images/site_logo.png`}
            alt="Site Logo"
            width={80}
            height={50}
            className="logo"
          />
        </Link>
      </div>
      <div>
        <HiMenuAlt1 />
      </div>
    </header>
  );
}
