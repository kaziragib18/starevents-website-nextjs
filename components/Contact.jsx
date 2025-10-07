import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Form from "./Form";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@component/public/assets/variants";

const Contact = () => {
  return (
    <section id="contact" className="pt-16 xl:pt-32">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl-px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px] pb-5">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
              {/* contact item */}
              <div className="flex flex-col gap-[40px] mb-16">
                <div className="flex item-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] mb-2 font-semibold font-primary leading-none ">
                      Chat to Us
                    </h5>
                    <p className="mb-4">Our friendly team is here to help</p>
                    <p className="font-semibold text-primary">
                      contact@starevents.com
                    </p>
                  </div>
                </div>
                <div className="flex item-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Office
                    </h5>
                    <p className="mb-4">Come and say hello at our office</p>
                    <p className="font-semibold text-primary">
                      255/A, Kulshi, Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex item-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Phone
                    </h5>
                    <p className="mb-4">Mon-Fri from 8am to 5pm.</p>
                    <p className="font-semibold text-primary">
                      +880 100 000 000
                    </p>
                  </div>
                </div>
              </div>

              <Socials
                containerStyles={`flex gap-[40px]`}
                iconStyles={`text-primary text-[20px]`}
              />
            </div>

            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
