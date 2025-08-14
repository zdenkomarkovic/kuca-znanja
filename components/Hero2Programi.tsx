"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";

const words = "MUDRE SOVE".split(" ");
const Hero2Programi = ({
  Hero01,
  Hero02,
}: {
  Hero01: string;
  Hero02: string;
}) => {
  return (
    <div className="grid md:grid-cols-2 items-center pt-[73px]">
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

            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Produzeni boravak za decu od 7 do 15 godina
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center">
            <Link href="tel:+381653237267">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                065 323 7267
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
                width={1000}
                height={1000}
                alt="kuca-znanja"
                className="w-full h-[60dvh] md:h-[100dvh] object-cover"
              />
               <p className="absolute top-[70%] text-center left-0 right-0 px-12 text-white font-bold text-3xl md:text-5xl">Mudre sove</p>
            </CarouselItem>
            <CarouselItem>
              <Image
                src={Hero02}
                width={1000}
                height={1000}
                alt="kuca-znanja"
                className="w-full h-[60dvh] md:h-[100dvh] object-cover"
              />
              <p className="absolute top-[70%] text-center left-0 right-0 px-12 text-white font-bold text-3xl md:text-5xl">Mudre sovice</p>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero2Programi;
