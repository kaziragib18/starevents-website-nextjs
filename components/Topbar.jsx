import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      className="bg-[#e8afb0] py-4 xl:py-0 xl:h-16 flex items-center"
      id="home"
    >
      <div className="container mx-auto w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center text-primary gap-4 sm:gap-0">
          <div className="flex items-center gap-3 order-2 sm:order-1">
            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-lg">
              <RiMailFill />
            </div>
            <span className="font-medium text-sm sm:text-base">
              contact@starevents.com
            </span>
          </div>

          <div className="order-1 sm:order-2">
            <Socials
              containerStyles="flex items-center gap-6"
              iconStyles="text-primary text-lg hover:text-white transition-colors duration-300"
            />
          </div>

          <div className="flex items-center gap-3 order-3">
            <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-lg">
              <RiPhoneFill />
            </div>
            <span className="font-medium text-sm sm:text-base">
              +880 100 000 000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
