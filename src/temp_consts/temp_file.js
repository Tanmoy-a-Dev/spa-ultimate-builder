<nav className="flex justify-between items-center py-4">
  <div className="flex items-center">
    <Link href="/" legacyBehavior>
      <a className="font-bold text-xl text-gray-800">Bookstore</a>
    </Link>
    <div className="ml-10 flex items-center">
      <div className="relative group">
        <button className="font-semibold text-gray-800 py-2 px-4 hover:text-gray-600 focus:outline-none ">
          Genres
        </button>
        <div className="absolute right-0 left-0 w-[calc(100vw-10vw)] h-80 mt-2 py-2 bg-red-300 rounded-lg shadow-xl z-20 hidden group-hover:block">
          <div className="flex w-full flex-wrap">
            {genres &&
              genres.map((genre, index) => (
                <Link
                  href={`/genres/${genre.toLowerCase()}`}
                  legacyBehavior
                  key={index}
                >
                  <a className="flex-1 basis-1/4 bg-blue-500 px-4 py-2 text-gray-800 hover:bg-gray-200 group-hover:block">
                    {genre}
                  </a>
                </Link>
              ))}
          </div>
          {/* <Link href="/genres/1">
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Action and Adventure
                </a>
              </Link>
              <Link href="/genres/2">
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Classics
                </a>
              </Link> */}
          {/* ... 27 more links */}
        </div>
      </div>

      {/* <div className="relative ml-6">
            <button className="font-semibold text-gray-800 py-2 px-4 hover:text-gray-600 focus:outline-none">
              Blogs
            </button>
            <div className="absolute right-0 w-64 mt-2 py-2 bg-white rounded-lg shadow-xl z-20 hidden">
              <Link href="/blogs/1">
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Book Reviews
                </a>
              </Link>
              <Link href="/blogs/2">
                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Author Interviews
                </a>
              </Link>
              
            </div>
          </div> */}
      <div className="group">
        <button className="text-red-400 hidden group-hover:block">Hello</button>
      </div>
    </div>
  </div>
  {/* Other items for the right side of the navbar */}
</nav>;
