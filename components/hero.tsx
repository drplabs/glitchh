import BackgroundImage from "@/public/images/home1.jpg";

import Image from "next/image";
export default function Hero() {
  return (
    <section>
      <div className="">
        {/* Illustration behind hero content */}
        <Image
          className="max-w-full md:max-w-none h-auto absolute brightness-20 opacity-50 blur-sm rounded--xl"
          src={BackgroundImage}
          alt="Features 01"
        />
        {/* Hero content */}
        <div className=" flex relative pt-32 pb-10 md:pt-80 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl  mx-auto text-center pb-12 md:pb-16 stroke stroke-white">
            <div className="text-7xl drop-shadow-2xl grid grid-col content-end font-extrabold ...">
              <span className=" font-skranji text-white shadow  hover:ease-in duration-300">
                Respawn for Gamers
              </span>
            </div>
            <p
              className="text-xl text-gray-50 mb-8 shadow "
              data-aos="fade-up"
              data-aos-delay="200"
            >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, architecto? Fugiat laboriosam, perspiciatis cupiditate officia dicta dolor fuga, numquam placeat veritatis enim modi magni amet labore. Earum excepturi voluptatum inventore?
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-red-600 hover:bg-amber-500 w-full mb-4 sm:w-auto sm:mb-0  rounded-t-xl"
                  href="#0"
                >
                  Start free trial
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-white bg-amber-500 hover:bg-red-600  w-full sm:w-auto sm:ml-4"
                  href="#0"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
