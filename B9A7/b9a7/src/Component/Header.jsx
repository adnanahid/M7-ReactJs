const Static = () => {
  return (
    <div>
      <nav className="bg-white">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-3xl font-bold md:w-[300px] text-start">
            Recipe Calories
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-green-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Recipes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-500">
                Search
              </a>
            </li>
          </ul>
          <div className="flex justify-between items-center gap-4">
            <label className="input input-bordered flex items-center gap-2 rounded-3xl h-9">
              <input type="text" className="grow" placeholder="Search" />
            </label>
            <button className="border rounded-full">
              <i className="fa-solid fa-user p-4"></i>
            </button>
          </div>
        </div>
      </nav>

      <section className="relative bg-gray-900 text-white rounded-xl">
        <img
          src="../src/assets/pngtree-man-with-chef-coat-working-in-kitchen-of-a-restaurant-close-picture-image_2662771.jpg"
          alt="Cooking background"
          className="absolute inset-0 w-full h-full object-cover opacity-50 rounded-xl"
        />
        <div className="container relative z-10 flex flex-col items-center py-32 md:w-8/12 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="text-center text-xl mb-8">
            Learn and Master Basic Programming, Data Structures, Algorithms,
            OOP, Database and solve 500+ coding problems to become an
            exceptionally well world-class Programmer.
          </p>
          <div className="flex space-x-4">
            <button className="btn btn-primary rounded-3xl">Explore Now</button>
            <button className="btn text-white btn-outline rounded-3xl">
              Our Feedback
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-6 md:w-8/12">
        <h2 className="text-3xl font-bold text-center mb-4">Our Recipes</h2>
        <p className="text-center text-gray-600 mb-4">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.
        </p>
      </section>
    </div>
  );
};

export default Static;
