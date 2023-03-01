"use client";

import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { animate, inView, stagger } from "motion";

import { HiArrowDown } from "react-icons/hi";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import Marquee from "react-fast-marquee";
import { ScrollContext } from "@/lib/ScrollObserver";

type AnimatedWordsProps = {
  title: string;
};
const AninmatedWords = ({ title }: AnimatedWordsProps) => {
  const AnimatedWordContainerRef = useRef<HTMLSpanElement>(null);
  const AnimatedWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!AnimatedWordContainerRef.current) {
      return;
    }
    inView(AnimatedWordContainerRef.current, () => {
      if (!AnimatedWordRef.current) return;
      animate(
        AnimatedWordRef.current,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 1.5,
          delay: 2.5,
        }
      );
    });
  }, []);
  return (
    <span
      className="inline-block overflow-hidden font-black leading-[8vw] ml-16  text-tia-maria-50 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] "
      ref={AnimatedWordContainerRef}>
      <span
        className="inline-block text-[8vw] leading-[8vw] translate-y-[8vw] text-tia-maria-50 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)]  uppercase opacity-0 align-middle"
        ref={AnimatedWordRef}>
        {title}
      </span>
    </span>
  );
};
const Header = ["C", "r", "e", "a", "t", "i", "v", "e"];

const AnimatedLetters = () => {
  const letterContainerRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!letterContainerRef.current) {
      return;
    }
    inView(letterContainerRef.current, () => {
      const letters = document.querySelectorAll(".animated-letter");
      animate(
        letters,
        {
          opacity: 1,
          transform: "none",
        },
        {
          duration: 1.3,
          delay: stagger(0.3),
        }
      );
    });
  }, []);

  return (
    <span
      ref={letterContainerRef}
      className="inline-block font-bsmnt font-black overflow-hidden leading-[8vw] ml-16  text-tia-maria-50 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] ">
      {Header.map((HeaderItem, idx) => (
        <span
          key={idx}
          className="animated-letter text-[8vw] font-bsmnt font-black  inline-block leading-[8vw] align-middle uppercase opacity-0 translate-y-[8vw]  text-tia-maria-50 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] ">
          {HeaderItem}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;
  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);
  return (
    <section
      ref={refContainer}
      className="min-h-screen flex items-center justify-center bg-cover bg-fixed bg-no-repeat sticky py-16 ">
      <div className="flex flex-col py-24">
        <div
          className="mx-auto flex flex-col font-bsmnt font-black  mb-16 "
          style={{ transform: `translate(${progress * 20}vh)` }}>
          <AninmatedWords title="Fullstack" />
          <AnimatedLetters />
          <AninmatedWords title="based in" />{" "}
          <AninmatedWords title="Amsterdam" />
        </div>
        <Marquee
          className="text-tia-maria-50 font-bsmnt font-bold bg-gray-1000 mx-auto space-x-4"
          gradient={false}
          pauseOnClick={true}
          speed={40}>
          Front-end developer with a passion for crafting visually appealing,
          user-friendly web solutions. Expert in HTML, CSS, JavaScript, React &
          Next.js, with a passion for web3, AI & blockchain technologies
        </Marquee>
        <div className="flex flex-row items-center text-center justify-center ">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}>
            <HiArrowDown size={35} className="animate-bounce mt-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
