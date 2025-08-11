"use client";

import Image from "next/image";
import Logo from "../public/kuca-znanja-logo.png";
import Link from "next/link";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { Fragment } from "react";
import { navList } from "@/constants/index";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const mobTitleStyles = "text-lg py-2";

interface NavItem {
  title: string;
  link: string;
  dropdown?: Array<{
    title: string;
    link: string;
    dropdown?: Array<{
      title: string;
      link: string;
    }>;
  }>;
}

const MobileMenu = ({ navigation }: { navigation: NavItem[] }) => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-primary cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navigation.map((item, index) => {
              if (item.dropdown)
                return (
                  <Fragment key={index}>
                    <Accordion type="single" collapsible>
                      <AccordionItem className="border-none" value="item-1">
                        <motion.div
                          whileHover={{ color: "hsl(var(--primary))" }}
                        >
                          <AccordionTrigger
                            className={`${mobTitleStyles} hover:no-underline`}
                          >
                            {item.title}
                          </AccordionTrigger>
                        </motion.div>
                        <AccordionContent>
                          {item.dropdown.map((link, index2) => (
                            <div key={`${index}.${index2}`}>
                              {link.dropdown ? (
                                <Accordion type="single" collapsible>
                                  <AccordionItem className="border-none" value={`item-${index}-${index2}`}>
                                    <motion.div
                                      whileHover={{ color: "hsl(var(--primary))" }}
                                    >
                                      <AccordionTrigger
                                        className={`${mobTitleStyles} hover:no-underline pl-6`}
                                      >
                                        {link.title}
                                      </AccordionTrigger>
                                    </motion.div>
                                    <AccordionContent>
                                      {link.dropdown.map((subLink, index3) => (
                                        <Link
                                          className="pl-12 block font-light py-2"
                                          key={`${index}.${index2}.${index3}`}
                                          href={subLink.link}
                                        >
                                          <motion.li
                                            whileHover={{ color: "hsl(var(--primary))" }}
                                          >
                                            <SheetTrigger>{subLink.title}</SheetTrigger>
                                          </motion.li>
                                        </Link>
                                      ))}
                                    </AccordionContent>
                                  </AccordionItem>
                                </Accordion>
                              ) : (
                                <Link
                                  className="pl-6 block font-light py-2"
                                  href={link.link}
                                >
                                  <motion.li
                                    whileHover={{ color: "hsl(var(--primary))" }}
                                  >
                                    <SheetTrigger>{link.title}</SheetTrigger>
                                  </motion.li>
                                </Link>
                              )}
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </Fragment>
                );
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = ({ navigation }: { navigation: NavItem[] }) => (
  <ul className="hidden gap-8 lg:flex  text-xl">
    {navigation.map((item, index) => {
      if (item.dropdown)
        return (
          <HoverCard key={index} openDelay={100} closeDelay={300}>
            <HoverCardTrigger>
              <motion.div
                whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
                className="flex gap-1 transition-colors"
              >
                {item.title}
                <ChevronDownIcon className="w-[18px]" />
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="p-0" side="bottom" align="start">
              {item.dropdown.map((link, index2) => (
                <motion.li
                  key={`${index}.${index2}`}
                  whileHover={{
                    backgroundColor: "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                  }}
                >
                  {link.dropdown ? (
                    <HoverCard openDelay={100} closeDelay={300}>
                      <HoverCardTrigger>
                        <div className="px-2 py-2 block flex items-center justify-between">
                          {link.title}
                          <ChevronDownIcon className="w-3 h-3 ml-2" />
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="p-0 ml-2" side="right" align="start">
                        {link.dropdown.map((subLink, index3) => (
                          <motion.li
                            key={`${index}.${index2}.${index3}`}
                            whileHover={{
                              backgroundColor: "hsl(var(--primary))",
                              color: "hsl(var(--primary-foreground))",
                            }}
                          >
                            <Link className="px-2 py-2 block" href={subLink.link}>
                              {subLink.title}
                            </Link>
                          </motion.li>
                        ))}
                      </HoverCardContent>
                    </HoverCard>
                  ) : (
                    <Link className="px-2 py-2 block" href={link.link}>
                      {link.title}
                    </Link>
                  )}
                </motion.li>
              ))}
            </HoverCardContent>
          </HoverCard>
        );
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors underline-animation"
            whileHover={{ color: "hsl(var(--primary))", scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [navigation, setNavigation] = useState<NavItem[]>(navList);

  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const response = await fetch('/api/navigation');
        if (response.ok) {
          const data = await response.json();
          setNavigation(data);
        }
      } catch (error) {
        console.error('Error fetching navigation:', error);
        // Fallback na statičku navigaciju
        setNavigation(navList);
      }
    };

    fetchNavigation();
  }, []);

  return (
    <header
      className={`flex justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md fixed top-0 left-0 right-0 z-[30] transition-colors`}
    >
      <nav className="flex items-center justify-between px-4 md:px-16 md:pr-64 py-2 container w-full text-primary font-bold">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src={Logo}
            alt="Centar za kreativnu edukaciju dece"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold ">KUĆA ZNANJA</h1>
          </div>
        </Link>
        <DesktopNav navigation={navigation} />
       
        <MobileMenu navigation={navigation} />
      </nav>
    </header>
  );
}
