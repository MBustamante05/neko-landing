import { ArrowRightCircle } from "lucide-react";

function Projects() {
  return (
    <div className="h-screen bg-black text-white px-10 pt-20">
      <div className="grid grid-cols-8 h-full gap-4">
        <div className="flex flex-col col-span-5 h-full gap-4">
          <div className="relative h-1/2 rounded-3xl bg-[url('/main-photo2.jpeg')] bg-cover bg-center p-10">
            <h1 className="text-9xl font-bold uppercase text-white">main</h1>
            <h1 className="text-9xl font-bold uppercase text-white]">
              Projects
            </h1>
            <p className="w-2/3 uppercase font-medium text-white/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
              doloremque, eos veritatis laborum sapiente dignissimos optio
              officiis cupiditate illo consequuntur aliquam, fugit suscipit
              nemo, natus quibusdam placeat? Consequatur, numquam velit.
            </p>
          </div>
          <div className="grid grid-cols-5 gap-4 h-1/2">
            <div className="relative rounded-3xl col-span-2">
              <img
                src="/art1.jpeg"
                className="absolute rounded-3xl grayscale bg-cover bg-center"
              />
              <div className="absolute brightness-90 hover:brightness-100 transition-all duration-300 ease-in-out inset-0 bg-black rounded-3xl opacity-50 hover:opacity-10 z-10"></div>
              <div className="relative z-20 h-full p-10 flex items-end">
                <ArrowRightCircle className="text-[var(--main-color)] p-2 w-32 h-32 hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer" />
              </div>
            </div>
            <div className="relative rounded-3xl bg-[url(/art2.jpeg)] grayscale bg-cover bg-center col-span-3">
              <div className="absolute brightness-90 hover:brightness-100 transition-all duration-300 ease-in-out inset-0 bg-black rounded-3xl opacity-50 hover:opacity-10 z-10"></div>
              <div className="relative z-20"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-3 gap-4 ">
          <div className="relative rounded-3xl h-3/4">
            <img
              src="/art4.jpeg"
              className="absolute rounded-3xl grayscale bg-cover bg-center"
            />
            <div className="absolute brightness-90 hover:brightness-100 transition-all duration-300 ease-in-out inset-0 bg-black rounded-3xl opacity-50 hover:opacity-10 z-10 "></div>
            <div className="relative z-20 p-10 flex items-start justify-between">
              <h1 className="uppercase text-5xl text-[var(--secondary-color)] border border-[var(--secondary-color)] rounded-full px-12 py-2 font-bold">
                Simple
              </h1>
              <div className="bg-[var(--secondary-color)] w-30 h-30 rounded-full"></div>
            </div>
          </div>
          <div className="rounded-3xl bg-[var(--main-color)] text-white h-1/4 p-4 flex flex-col justify-center gap-1">
            <h1 className="text-9xl uppercase font-bold leading-none tracking-tighter">
              Designs
            </h1>
            <div className="flex justify-between items-center px-2">
              <div className="flex flex-col">
                <span>Look at for more projects</span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
              </div>
              <ArrowRightCircle className="p-2 w-20 h-20 hover:translate-x-2 transition-transform duration-300 ease-in-out cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
