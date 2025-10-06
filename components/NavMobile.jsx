"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  {
    label: "Home",
    href: "home",
  },
  {
    label: "About",
    href: "about",
  },
  {
    label: "Services",
    href: "services",
  },
  {
    label: "Events",
    href: "events",
  },
  {
    label: "Contact",
    href: "contact",
  },
];
// Socials
// Logo

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger
        className="text-white flex items-center justify-center text-3xl"
        onClick={() => setOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>

      <SheetContent className="bg-primary border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white uppercase font-primary font-medium tracking-[1.2px]"
                >
                  <ScrollLink
                    to={link.href}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          {/* Socials */}
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
