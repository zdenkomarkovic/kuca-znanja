"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className=" py-8  shadow-[0px_-2px_5px_rgba(0,0,0,0.1)] bg-gradient-to-br from-blue-400 via-[#00aceb] to-indigo-600 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left md:grid md:grid-cols-3 gap-8 mx-auto">
          <div>
            <ul className="pb-5 flex justify-around items-center md:pb-0 md:block md:space-y-2 text-center">
              <li className=" transform-origin-center transition-transform duration-300 hover:scale-105 ">
                <Link href="/">Početna</Link>
              </li>

             
          

              <li className=" transform-origin-center transition-transform duration-300 hover:scale-105 ">
                <Link href="/#programi">Program</Link>
              </li>

              <li className=" transform-origin-center transition-transform duration-300 hover:scale-105 ">
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 pb-5 md:pb-0 text-center">
            <div>
              {" "}
              <a href="tel:+381653237267">
                <p className=" transform-origin-center transition-transform duration-300 hover:scale-105">
                  Mobilni: 065 323 7267
                </p>
              </a>
            </div>
            <div>
              {" "}
              <a href="tel:+381113237267">
                <p className=" transform-origin-center transition-transform duration-300 hover:scale-105">
                  Fiksni: +381 11 3237 267
                </p>
              </a>
            </div>
            <div>
              <a href="mailto:centarkucaznanja@gmail.com" target={"_blank"}>
                <p className="text-wrap  transform-origin-center transition-transform duration-300 hover:scale-105">
                  Email: centarkucaznanja@gmail.com
                </p>
              </a>
            </div>
            <div className="flex space-x-4 justify-center ">
              <a
                href="https://www.facebook.com/rucnovedukativnicentar"
                target={"_blank"}
                className=" transform-origin-center transition-transform duration-300 hover:scale-110"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/rucnovedukativnicentar/"
                target={"_blank"}
                className=" transform-origin-center transition-transform duration-300 hover:scale-110"
              >
                <Instagram />
              </a>
            </div>
          </div>
          <div className="md:col-span-1 col-span-2 text-center">
            <h3 className="text-lg text-white font-semibold mb-2 md:mb-4">
              KUĆA ZNANJA RUČNOV
            </h3>

            <p className=" font-bold ">Centar za kreativnu edukaciju</p>
            <a
              href="https://maps.google.com/?q=Krunska+40+Beograd+Serbia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg mt-2 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300"
            >
              <MapPin className="h-6 w-6" />
              Krunska 40 • 11000 Beograd
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t-[1px] border-cool-green mt-10 pt-5">
          <p>&copy; 2025 Kuća znanja Ručnov. Sva prava zadržana.</p>
          <p>
            {" "}
            izrada sajta:{" "}
            <a href="https://www.manikamwebsolutions.com/" target="_blank">
              <span className="font-bold  hover:scale-105 transition-transform duration-300">
                {" "}
                ManikamWebSolutions
              </span>
            </a>{" "}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
