"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import Hero01 from "../public/partner-porodici.jpg";
import Hero02 from "../public/kreativno-dete.jpg";
import Hero03 from "../public/istraživacki-duh.jpg";
import Hero04 from "../public/ucimo-kroz-igru.jpg";

import Image from "next/image";
import { ArrowRight, Phone, MapPin } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";

const words = "KUĆA ZNANJA".split(" ");
const Hero2 = () => {
  return (
    <div className="grid md:grid-cols-2 items-center ">
      <div className="text-center flex flex-col justify-center bg-gradient-to-br from-white to-[#f1f1f1] h-full py-5 px-2 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" z-10  mx-auto  space-y-2 md:space-y-8"
        >
          <div className="space-y-2 md:space-y-4 mx-auto text-center">
            <h1 className=" text-4xl sm:text-6xl md:text-7xl font-extrabold md:mb-8">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block z-10 mr-4 last:mr-0"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-primary "
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>

            <h2 className="">Centar za kreativnu edukaciju dece</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Pravo mesto za decu osnovce u Beogradu, gde na kreativan način
              mogu da ispune svoje vreme pre i posle škole!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#programi">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white hover:text-primary hover:border-primary border-2 border-primary px-8 py-3 text-lg"
              >
                Pogledajte programe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="tel:+381603456309">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                +38160 3456309
              </Button>
            </Link>
          </div>

          {/* Contact info */}
          <a
            href="https://maps.google.com/?q=Krunska+40+Beograd+Serbia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm py-2 flex items-center justify-center gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="h-5 w-5 text-primary" />
            Krunska 40 • Vračar
          </a>
        </motion.div>
      </div>

      <div className="relative w-full h-[60dvh] md:h-[100dvh] order-1 md:order-2">
        <Carousel
          className="absolute top-0 left-0 h-[60dvh] md:h-[100dvh] w-full z-[0]"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              stopOnInteraction: false,
              stopOnFocusIn: false,
              delay: 3000,
            }),
            Fade(),
          ]}
        >
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" /> */}
          <CarouselContent>
            <CarouselItem>
              <Image
                src={Hero01}
                alt="kuca-znanja"
                className="w-full h-[60dvh] md:h-[100dvh] object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={Hero02}
                alt="kuca-znanja"
                className="w-full h-[60dvh] md:h-[100dvh] object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={Hero03}
                alt="kuca-znanja"
                className="w-full h-[60dvh] md:h-[100dvh] object-cover"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={Hero04}
                alt="kuca-znanja"
                className="w-full h-[60dvh] md:h-[100dvh] object-cover"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero2;
