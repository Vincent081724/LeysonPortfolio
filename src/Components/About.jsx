export default function About() {
  return (
    <section
      // id="about"
      className=" max-w-7xl item-center relative mx-auto "
    >
      {/* container */}
      <div className="flex gap-6 w-full grid grid-cols-1 lg:grid-cols-2 p-4 mb-3 mt-6">
        <div className="m-auto center px-6 relative">
          <div className="w-[200px] h-[150px] lg:w-[300px] lg:h-[250px] border-2 absolute top-10 left-35 z-10 "></div>
          <div className="relative z-20 ">
            <img
              className="w-[300px] lg:w-[400px] border-10 rounded-xl border-gray-400"
              src="/AboutAvatar.jpg"
              alt="AboutAvatar"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="py-4">
            <h2 className="text-lg">Mastering Design Experience sample</h2>
            <h1 className="text-4xl">About Me</h1>
            <p className="text-base my-4">
              With over 10 years of immersive experience in the world of design,
              I am your guide through the captivating realm of UI/UX and Graphic
              & Web Design.
            </p>
            <p className="text-base my-4">
              My journey began with a passion for creating visually stunning and
              intuitive interfaces, and it’s evolved into a relentless pursuit
              of perfection in every pixel. From crafting user-centered
              experiences to forging memorable brand identities, I bring both
              expertise and artistry to the table.
            </p>
            <p className="text-base  my-4 ">
              In this ever-evolving digital landscape, I’ve honed my skills to
              adapt and innovate, ensuring your projects are always at the
              forefront of design trends. My mission is clear: to elevate your
              brand, engage your audience, and transform your vision into a
              compelling reality.
            </p>
          </div>
          <div className="place-self-center">
            <button className="border-1 rounded-lg border-gray-500 px-8 py-4">
              Contact
            </button>
            {/* <button className="border-1 rounded-lg border-gray-500 px-8 py-4 ml-auto">
              View Project
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
