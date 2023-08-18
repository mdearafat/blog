const Home = () => {
  return (
    <section className="bg-gray-100 h-[90vh] flex justify-center items-center">
      <div className="max-w-5xl mx-auto  px-3 flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            A Kitchen Adventure: Exciting
            <span className="text-orange-500"> new recipes </span>
            to try
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
