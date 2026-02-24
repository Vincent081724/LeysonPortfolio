export default function Services() {
  return (
    <section
      // id="portfolio"
      className="max-w-7xl item-center relative mx-auto "
    >
      <div className="flex w-full grid grid-cols-2 p-4 mb-3 mt-6 px-[15px]">
        <div className="place-self-center">
          <div className="py-4">
            <h2 className="text-2xl">Your Vision, My Design</h2>
            <h1 className="text-red-400">
              <span className="text-4xl font-bold">My Services</span>
            </h1>
            <p className="text-base my-4">
              Step into a realm where possibilities abound, guided by my
              expertise and passion. With a deep well of knowledge and
              creativity at my disposal, I offer you a spectrum of Services
              designed to elevate your digital presence.
            </p>
          </div>
          <div>
            <button className="border-1 rounded-lg border-gray-800 px-8 py-4">
              Contact
            </button>
            {/* <button className="border-1 rounded-lg border-gray-500 px-8 py-4 ml-auto">
              View Project
            </button> */}
          </div>
        </div>
        {/* <div className="w-[200px] h-[150px] lg:w-[300px] lg:h-[250px] border-2 absolute top-10 left-35 z-10 "></div> */}

        <div className="flix px-[15px]">
          <div className="flex pb-[37px] mb-[52px] border-b border-gray-700">
            <div>
              <img
                className="w-[45px] lg:w-[45px] rounded-xl border-gray-400"
                src="/ServicesUi.svg"
                alt="Services"
              />
            </div>
            <div className="px-4 text-[14px]">
              <h1>UI/UX Design</h1>
              <p>
                User interfaces and experiences that not only captivate but also
                ensure seamless interaction.
              </p>
            </div>
          </div>
          <div className="flex pb-[37px] mb-[52px] border-b border-gray-700">
            <div>
              <img
                className="w-[45px] lg:w-[45px] rounded-xl border-gray-400"
                src="/ServicesUi.svg"
                alt="Services"
              />
            </div>
            <div className="px-4">
              <h1>UI/UX Design</h1>
              <p>
                User interfaces and experiences that not only captivate but also
                ensure seamless interaction.
              </p>
            </div>
          </div>
          <div className="flex pb-[37px] mb-[52px] border-b border-gray-700">
            <div>
              <img
                className="w-[45px] lg:w-[45px] rounded-xl border-gray-400"
                src="/ServicesUi.svg"
                alt="Services"
              />
            </div>
            <div className="px-4">
              <h1>UI/UX Design</h1>
              <p>
                User interfaces and experiences that not only captivate but also
                ensure seamless interaction.
              </p>
            </div>
          </div>
          <div className="flex pb-[37px] mb-[52px] border-b border-gray-700">
            <div>
              <img
                className="w-[45px] lg:w-[45px] rounded-xl border-gray-400"
                src="/ServicesUi.svg"
                alt="Services"
              />
            </div>
            <div className="px-4">
              <h1>UI/UX Design</h1>
              <p>
                User interfaces and experiences that not only captivate but also
                ensure seamless interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// flex gap-6 w-full grid grid-cols-1 lg:grid-cols-2 px-4 mb-3 mt-6
