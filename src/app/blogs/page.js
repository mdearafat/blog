import data from "../data/data.json";
import Link from "next/link";
const Blogs = () => {
  const posts = data.items;

  return (
    <section className="bg-gray-100">
      <div className="max-w-5xl mx-auto px-3">
        <div className="grid grid-cols-3 py-20 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/blogs/${post.id}`}>
                <img className="rounded-t-lg" src={post.imgSrc} alt="" />
              </Link>
              <div className="p-5">
                <Link href={`/blogs/${post.id}`}>
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    {post.title}
                  </h5>
                </Link>
                <Link
                  href={`/blogs/${post.id}`}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Read more
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
