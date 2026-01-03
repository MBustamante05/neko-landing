"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
export default function Contact() {
  return (
    <div className="relative h-screen bg-black to-[var(--main-color)] text-white w-full py-20 px-10 overflow-hidden">
      <div className="relative">
        <motion.h1
          className="relative text-[24rem] text-white font-bold uppercase leading-none tracking-tighter text-center z-20"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        >
          Contact
        </motion.h1>
        {/* <motion.h1
          className="absolute top-3 left-10 text-[24rem] text-white/30 font-bold uppercase leading-none tracking-tighter text-center z-10"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
        >
          Contact
        </motion.h1> */}
      </div>
      <div className="grid grid-cols-2 items-center">
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="w-1/2 ms-30 mt-10 px-10 text-neutral-400 "
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius culpa
          vel cupiditate, ea suscipit aliquam quam distinctio corporis et quae
          numquam officiis.
        </motion.p>
        <motion.div
          initial={{ y: 200, opacity: 0, borderRadius: "50px 50px 0 0" }}
          whileInView={{ y: 0, opacity: 1, borderRadius: "0px" }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="absolute right-10 bottom-0 bg-[var(--main-color)]/100 text-white w-fit z-20"
        >
          <div className="grid grid-cols-2 items-center px-24 pt-10 pb-20 gap-24">
            <div className="flex flex-col ">
              <h2 className="text-9xl font-bold mb-4 leading-none tracking-tighter">
                Let's get <br />
                in touch
              </h2>
              <ArrowUpRight className="w-48 h-48" />
            </div>
            <div className="flex flex-col ">
              <form className="flex flex-col gap-10 py-10">
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="name" className="text-blue-100 font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="px-2 py-2 border border-x-transparent border-t-transparent outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="email"
                    className="text-blue-100 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-2 py-2 border border-x-transparent border-t-transparent outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="message"
                    className="text-blue-100 font-semibold"
                  >
                    Message
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="px-2 border border-x-transparent border-t-transparent outline-none"
                    rows={5}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-black px-6 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-colors mt-5"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <footer>
            <p className="text-center text-sm text-white/50 py-4 px-10">
              &copy; 2024 Neko Swag. All rights reserved.
            </p>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
