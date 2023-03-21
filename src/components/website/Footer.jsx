import Link from 'next/link';

export default function Footer({ authPage }) {
  return (
    <footer
      className={`border-t-[1px] border-textColor mt-4 py-4 px-2 ${
        authPage && 'flex justify-between flex-row-reverse'
      }`}
    >
      <div className="upperFooter flex justify-between md:px-2 lg:px-6">
        {!authPage && (
          <div id="general">
            <p className="footer_headers">General Resources</p>
            <ul className="space-y-2 md:space-y-0 lg:space-x-2 md:flex md:flex-wrap">
              <li className="footer_list_link">
                <Link href={`/`}>About</Link>
              </li>
              <li className="footer_list_link">
                <Link href={`/`}>Docs</Link>
              </li>
              <li className="footer_list_link">
                <Link href={`/`}>Blog</Link>
              </li>
              <li className="footer_list_link">
                <Link href={`/`}>Demo</Link>
              </li>
            </ul>
          </div>
        )}
        <div id="legal">
          <p className="footer_headers">Legal</p>
          <Link href={`/legal/privacy-policy`}>Privacy Policy</Link>
        </div>
      </div>
      <div
        className={`lowerFooter ${
          !authPage && 'my-4'
        } md:px-2 lg:flex lg:flex-col lg:items-center`}
      >
        <p>
          <span className="font-semibold block">Creator : </span>Tanmoy Sen
          <small className={`block ${authPage && 'mt-4 lg:mt-0'}`}>
            Copyright &copy; <span className="font-semibold">2023</span>. All
            Rights Reserved
          </small>
        </p>
      </div>
    </footer>
  );
}
