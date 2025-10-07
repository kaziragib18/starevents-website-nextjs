import { motion } from "framer-motion";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Image from "next/image";
import { fadeIn } from "@component/public/assets/variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              className="max-w-[540px]"
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
            >
              <Pretitle text="About Us" />
              <h2 className="h2 mb-6">Focused On Excellence In Every Event</h2>
              <p className="mb-11">
                Our unwavering commitment to excellence drives every event we
                manage and every dish we serve. From planning to execution, we
                deliver seamless event management and exceptional catering that
                reflect quality, precision, and creativity.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  alt="Signature"
                  width={154}
                  height={30}
                />
                <p>Company CEO</p>
              </div>
              <Button text="Contact Us" />
            </motion.div>
          </div>

          {/* image */}
          <div className="flex-1 xl:flex xl:justify-center relative">
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="xl:w-[444px] xl:h-[493px] relative"
            >
              {/* yellow box stays behind image, offset 10px down and left */}
              <div className="hidden xl:flex w-full h-full bg-accent absolute top-5 left-5 -z-5 rounded-lg"></div>

              {/* image fully visible */}
              <div className="w-full h-full relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/img/about/img.jpg"
                  alt="About Image"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
