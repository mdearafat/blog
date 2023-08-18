import data from "../../data/data.json";

const SingleBlog = ({ params }) => {
  const id = params.id;
  const item = data.items.find((singleItem) => singleItem.id === Number(id));
  if (item) {
    return (
      <section className="bg-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-3">
          <img src={item.imgSrc} className="w-[70%]" alt={item.title} />
          <h1 className="text-black font-bold text-4xl py-5">{item.title}</h1>
          <p className="text-black">{item.description}</p>
        </div>
      </section>
    );
  }
};

export default SingleBlog;
