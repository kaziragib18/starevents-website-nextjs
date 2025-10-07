import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@component/public/assets/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="mt-16 xl:mt-32 bg-primary text-border"
    >
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="py-16 xl:py-[100px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image
                src={"/assets/logo.png"}
                width={230}
                height={48}
                alt="Event & Catering Logo"
              />
            </Link>
            <p className="max-w-sm leading-relaxed">
              We craft unforgettable events with exquisite catering, creative
              planning, and flawless execution. From intimate gatherings to
              grand celebrations, we make every moment memorable.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="h4 text-white mb-6">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <RiMapPin2Fill className="text-accent text-xl mt-1" />
                <p>255/A, Kulshi, Chittagong, Bangladesh</p>
              </li>
              <li className="flex items-start gap-3">
                <RiPhoneFill className="text-accent text-xl mt-1" />
                <p>+880 100 000 000</p>
              </li>
              <li className="flex items-start gap-3">
                <RiMailFill className="text-accent text-xl mt-1" />
                <p>contact@starevents.com</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="h4 text-white mb-6">Newsletter</h4>
            <p className="mb-6">
              Subscribe for event inspirations, catering tips & special offers.
            </p>
            <div className="relative w-full max-w-[370px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-secondary placeholder:text-secondary w-full h-14 rounded-md pl-5 pr-14 outline-none"
              />
              <button
                type="submit"
                className="bg-accent w-10 h-10 rounded-full absolute top-2 right-2 text-primary text-lg flex items-center justify-center hover:scale-105 transition"
              >
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/20 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-center md:text-left">
            &copy; 2025 Star Events. All rights reserved.
          </p>
          <Socials
            containerStyles="flex gap-5"
            iconStyles="text-white hover:text-accent transition-all"
          />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
