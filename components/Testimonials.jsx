import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";
import { motion } from "framer-motion";
import { fadeIn } from "@component/public/assets/variants";

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row relative">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="flex-1 xl:pt-[54px] mb-12 xl:mb-8 max-w-full"
          >
            <Pretitle text={"Testimonials"} />
            <h2 className="h2 mb-6 text-[28px] sm:text-[32px] xl:text-[40px] leading-snug">
              Built On Trust, Proven By Results
            </h2>
            <p className="mb-10 text-base sm:text-lg leading-relaxed max-w-full">
              From homes to commercial spaces, our clients share their
              experience of working with us. See how we've helped them bring
              their dreams to life with expert craftmanship.
            </p>
            <Button text={"Work with us"} />
          </motion.div>

          {/* image and slider */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end relative"
          >
            {/* main image only on xl */}
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[500px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt="alt"
                fill
                className="object-cover"
                quality={100}
              />
            </div>

            {/* slider */}
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.8 }}
              className="relative xl:absolute xl:bottom-0 xl:right-[160px] max-w-full"
            >
              {/* quote icon image */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                className="absolute z-20 -top-4 left-[20px] sm:left-[60px]"
                alt=""
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
