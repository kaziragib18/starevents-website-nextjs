import { useState } from "react";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "./ui/tabs";
import Image from "next/image";
import Button from "./Button";

import {
  PiKnifeFill,
  PiCalendarFill,
  PiMusicNoteFill,
  PiStarFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "@component/public/assets/variants";

const serviceData = [
  {
    name: "catering",
    icon: <PiKnifeFill />,
    title: "Catering Services",
    description:
      "Exquisite catering for all occasions with customizable menus, fresh ingredients, and professional service.",
    serviceList: [
      "Corporate Events",
      "Weddings",
      "Private Parties",
      "Themed Menus",
      "Buffet & Plated Options",
      "Dessert & Beverage Service",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "event-planning",
    icon: <PiCalendarFill />,
    title: "Event Planning",
    description:
      "We handle all aspects of your event, from concept to execution, ensuring every detail is perfect.",
    serviceList: [
      "Corporate Events",
      "Weddings",
      "Birthday Parties",
      "Anniversaries",
      "Themed Events",
      "Venue Coordination",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "entertainment",
    icon: <PiMusicNoteFill />,
    title: "Entertainment Services",
    description:
      "Providing live music, DJs, performers, and interactive experiences to make your event memorable.",
    serviceList: [
      "Live Bands",
      "DJ Services",
      "Performers & Acts",
      "Photo Booths",
      "Interactive Games",
      "Custom Shows",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
  {
    name: "decor",
    icon: <PiStarFill />,
    title: "Decor & Ambiance",
    description:
      "Creating beautiful event spaces with stunning decor, lighting, and thematic designs.",
    serviceList: [
      "Floral Arrangements",
      "Themed Decor",
      "Lighting & Effects",
      "Table & Chair Styling",
      "Custom Centerpieces",
      "Stage & Backdrops",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-7.jpg" },
      { url: "/assets/img/services/thumb-8.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("catering");

  return (
    <section id="services" className="pt-16 xl:pt-32">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="text-center max-auto mb-20">
          <Pretitle text="Our Services" center={true} />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 mx-auto">
            Offering tailored catering and event management solutions to make
            every occasion unforgettable.
          </p>
        </div>

        <Tabs
          defaultValue="catering"
          onValueChange={(value) => setActiveTab(value)}
          className="flex flex-col xl:flex-row w-full gap-[30px]"
        >
          {/* Tab List */}
          <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
            {serviceData.map((item) => (
              <TabsTrigger
                key={item.name}
                value={item.name}
                className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
              >
                <div
                  className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                    activeTab === item.name
                      ? "bg-primary text-white"
                      : "bg-accent text-primary"
                  }`}
                >
                  <div className="text-8xl">{item.icon}</div>
                </div>
                <div className="uppercase font-primary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                  {item.name.replace("-", " ")}
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
            {serviceData.map((item) => (
              <TabsContent key={item.name} value={item.name} className="m-0">
                <AnimatePresence mode="wait">
                  {activeTab === item.name && (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col md:flex-row gap-[30px]"
                    >
                      <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                        {item.thumbs.map((thumb, index) => (
                          <div
                            key={index}
                            className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                          >
                            <Image
                              src={thumb.url}
                              fill
                              alt=""
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ))}
                      </div>

                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => (
                            <li key={index} className="flex items-center gap-4">
                              <div className="w-[6px] h-[6px] bg-accent"></div>
                              <div className="capitalize font-medium text-primary">
                                {service}
                              </div>
                            </li>
                          ))}
                        </ul>
                        <Button text="Read more" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default Services;
