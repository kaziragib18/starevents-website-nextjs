import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@component/public/assets/variants";

const workData = [
  {
    img: "/assets/img/work/img_1.jpg",
    name: "Wedding Catering",
    description: "Tailored menus",
    href: "#",
  },
  {
    img: "/assets/img/work/img_2.jpg",
    name: "Corporate Events",
    description: "Event planning",
    href: "#",
  },
  {
    img: "/assets/img/work/img_3.jpg",
    name: "Private Party Planning",
    description: "Elevated experiences",
    href: "#",
  },
  {
    img: "/assets/img/work/img_4.jpg",
    name: "Event Decor & Design",
    description: "Elevate your event",
    href: "#",
  },
];

const Work = () => {
  return (
    <section id="events" className="pt-16 xl:pt-32">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        {/* Section Header */}
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Work" center />
          <h2 className="h2 mb-3">Discover Our Events</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing expert services designed to deliver quality and innovation
            in every event we undertake.
          </p>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {workData.map((item, index) => (
            <div
              key={index}
              className="w-full h-[320px] sm:h-[400px] lg:h-[492px] relative overflow-hidden group flex justify-center rounded-md"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Overlay info */}
              <div
                className="w-[92%] sm:w-[90%] h-auto py-4 px-5 bg-primary 
                absolute bottom-3 flex flex-col sm:flex-row justify-between items-center gap-3 
                text-white rounded-md transition-all duration-500 
                translate-y-0 md:translate-y-[108px] md:group-hover:translate-y-0"
              >
                {/* Text Content */}
                <div className="flex-1">
                  <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase text-sm sm:text-base">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-sm mt-1">
                    <RiCheckboxCircleFill className="text-accent text-2xl sm:text-3xl" />
                    <p>{item.description}</p>
                  </div>
                </div>

                {/* Arrow Link - hidden on mobile */}
                <Link
                  href={item.href}
                  className="hidden sm:flex w-[50px] h-[50px] bg-accent text-primary text-2xl justify-center items-center rounded-full mt-0"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
