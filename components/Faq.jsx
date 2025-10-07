import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@component/public/assets/variants";

const faqItemsData = [
  {
    title: "What catering options do you provide?",
    description:
      "We offer customizable menus for corporate events, weddings, private parties, and themed events with buffet or plated options.",
  },
  {
    title: "Can you handle event planning from start to finish?",
    description:
      "Yes, our team manages every aspect of your event, including venue selection, coordination, and scheduling.",
  },
  {
    title: "Do you provide entertainment services?",
    description:
      "We provide live music, DJs, performers, and interactive experiences to make your event memorable.",
  },
  {
    title: "Can you design the decor and ambiance?",
    description:
      "Absolutely! We create beautiful event spaces with custom lighting, floral arrangements, themed decor, and stage setups.",
  },
  {
    title: "How much notice do you need to organize an event?",
    description:
      "We recommend contacting us at least 4-6 weeks prior, but urgent requests can often be accommodated depending on availability.",
  },
  {
    title: "Do you provide consultation for event budgeting?",
    description:
      "Yes, our experts help plan budgets, recommend cost-effective solutions, and ensure your event stays within your financial plan.",
  },
];

// animation variants for FAQ items
const faqItemsVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We've Got You Covered</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From event planning to catering details, we've answered the most
            common questions to help you plan an unforgettable occasion.
          </p>
        </motion.div>

        {/* FAQ items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemsVariants}
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: false, amount: 0.8 }}
                custom={index} //pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
