export default function Home() {
  return (
    <section
      //id="home"
      className="min-h-screen max-w-7xl item-center relative mx-auto "
    >
      <div className="flex gap-6 w-full grid grid-cols-1 lg:grid-cols-2 p-4 mb-3 mt-6">
        <div className="place-self-center">
          <div className="py-4">
            <h1 className="text-4xl">Design That Sells,</h1>
            <h1 className="text-red-400">
              <span className="text-4xl font-bold">Transform Experiences</span>
            </h1>
            <p className="text-base my-4">
              Let your web design comes into life, do care most about satisfying
              your needs, and will go the extra mile to meet your specific
              requests. Half-cooked outputs aren’t an option for me. Thus, Get
              in touch and see what i can work on you for today!
            </p>
          </div>
          <div>
            <button className="border-1 rounded-lg border-gray-500 px-8 py-4">
              Contact
            </button>
            {/* <button className="border-1 rounded-lg border-gray-500 px-8 py-4 ml-auto">
              View Project
            </button> */}
          </div>
        </div>
        <div className="m-auto center px-6 relative">
          {/* <div className="w-[200px] h-[150px] lg:w-[300px] lg:h-[250px] border-2 absolute top-10 left-35 z-10 "></div> */}
          <div className="relative z-20 ">
            <img
              className="w-[300px] lg:w-[600px] rounded-xl border-gray-400"
              src="/HomeAvatar.png"
              alt="HomeAvatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
