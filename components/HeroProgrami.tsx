"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  word: string;
  Hero01: string;
  text?: string[];
  imgtext: string;
};

const HeroProgrami = ({ word, Hero01, text, imgtext }: Props) => {
  const words = word.split(" ");
  return (
    <div className="grid md:grid-cols-2 items-center pt-[73px]">
      <div className="text-center flex flex-col justify-center bg-gradient-to-br from-white to-[#f1f1f1] h-full py-5 px-2 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" z-10  mx-auto px-2 md:px-4 space-y-2 md:space-y-8"
        >
          <div className="space-y-2 md:space-y-4 mx-auto text-center">
            <h1 className="uppercase text-4xl sm:text-6xl md:text-7xl font-extrabold md:mb-8">
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
            <div className="text-center mx-auto space-y-1">
              {text &&
                text.map((line, index) => {
                  return <p key={index}>{line}</p>;
                })}
            </div>
          </div>

          {/* CTA Buttons */}

          <Link href="tel:+381653237267">
            <Button
              size="lg"
              variant="outline"
              className="border-primary mt-8 text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              065 323 7267
            </Button>
          </Link>

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
        <Image
          src={Hero01}
          width={1000}
          height={1000}
          alt="kuca-znanja"
          className=" w-full h-[60dvh] md:h-[100dvh] object-cover"
        /> 
        <p className="absolute z-10 top-[70%] text-center left-0 right-0 px-12 text-white font-bold text-5xl">{imgtext}</p>
      </div>
    </div>
  );
};

export default HeroProgrami;
