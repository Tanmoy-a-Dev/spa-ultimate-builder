import Link from 'next/link';
export default function SmNavbar({ genres }) {
  return (
    <nav>
      {/* genres */}
      <div id="genres" className="group">
        <button className="text-xl text-borderColor">
          Genres <span className="ml-2">+</span>
        </button>
        <div className="flex">
          <Link href={`/genres/art`} legacyBehavior>
            <a className="flex-1 md:basis-1/4 basis-1/3 my-1 mx-2 ">art</a>
          </Link>
          <Link href={`/genres/creative`} legacyBehavior>
            <a className="flex-1 md:basis-1/4 basis-1/3 my-1 mx-2 ">creative</a>
          </Link>
        </div>
      </div>
      {/* blogs */}
      <div id="blogs" className="text-xl text-slate-500">
        <button>
          Blogs <span>+</span>
        </button>
      </div>
    </nav>
  );
}
