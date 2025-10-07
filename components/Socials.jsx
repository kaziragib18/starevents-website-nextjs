import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterFill,
} from "react-icons/ri";

const socialLinks = [
  {
    icon: <RiFacebookFill />,
    href: "https://www.facebook.com",
  },
  {
    icon: <RiInstagramFill />,
    href: "https://www.instagram.com",
  },
  {
    icon: <RiLinkedinFill />,
    href: "https://www.linkedin.com",
  },
  {
    icon: <RiTwitterFill />,
    href: "https://www.twitter.com",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socialLinks.map((socmed, index) => {
        return (
          <Link href={socmed.href} key={index} className={`${iconStyles}`}>
            {socmed.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
