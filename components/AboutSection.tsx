/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const skills = [
  { skill: "HTML" },
  { skill: "Figma" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "Headless CMS" },
  { skill: "GitHub" },
  { skill: "GraphQL" },
  { skill: "Prisma" },
  { skill: "Solidity" },
  { skill: "Web3" },
  { skill: "Polygon" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="pb-12 my-12 md:pt-16 md:pb-48">
        <h1 className="text-6xl text-center uppercase">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 border-0 rounded bg-tia-maria-500"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-5 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2 text-xl font-medium text-gray-500 font-default">
            <p>
              Hi, my name is Ryan and I am a{" "}
              <span className="font-bold dark:text-tia-maria-500 ">
                {"highly skilled"}
              </span>
              ,{" "}
              <span className="font-bold dark:text-tia-maria-500">
                {"passionate"}
              </span>
              , and{" "}
              <span className="font-bold dark:text-tia-maria-500">
                {"driven"}
              </span>{" "}
              Technology Advisor and Product Developer based in Almere, the
              Netherlands.
            </p>
            <br />
            <p>
              Fueled by 25 years of passion for music, creativity, and
              technology, I bring a unique perspective to my work, allowing me
              to create impactful solutions and build meaningful connections.💻
            </p>
            <br />
            <p>
              I believe that technology should{" "}
              <span className="font-bold dark:text-tia-maria-500">
                {"empower"}
              </span>
              , not hinder. That's why I offer my clients a unique blend of
              technical expertise and strategic thinking, to help them harness
              the full potential of technology and deliver game-changing
              products and experiences.🎯
            </p>
            <br />
            <p>
              Aside from my tech-savvy side, I'm a proud father of two kids and
              a dog 🐕, born and raised in Amsterdam with roots from Suriname
              🇸🇷. I believe in the importance of community, and I'm always
              looking for new ways to bring people together and make a positive
              impact..🤓
            </p>
            <br />
            <p>
              If you're looking for a creative, highly skilled, and motivated
              professional with a strong work ethic and a passion for
              technology, look no further! 🔥
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <Image
              src="/portrait-1.png"
              alt=""
              width={325}
              height={325}
              className="hidden object-cover aspect-square rotate-3 rounded-2xl md:relative md:bottom-4 md:left-32 md:z-0 md:block "
            />
            <h1 className="mb-6 text-2xl font-bold">My Skills</h1>
            <Marquee
              pauseOnHover={true}
              gradient={false}
              className="font-inter ">
              <div className="flex flex-row flex-wrap justify-center md:justify-start">
                {skills.slice(0, 6).map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="px-4 py-2 mt-2 mr-2 transition-all duration-75 ease-in bg-gray-900 rounded-md group-hover:bg-opacity- text-tia-maria-500">
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </Marquee>
            <br />
            <Marquee
              pauseOnHover={true}
              gradient={false}
              className="font-inter "
              direction="right"
              speed={35}>
              <div className="flex flex-row flex-wrap justify-center md:justify-start">
                {skills.slice(4, 10).map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="relative px-4 py-2 mt-2 mr-2 transition-all duration-75 ease-in bg-gray-900 rounded-md text-tia-maria-500 group-hover:bg-opacity-0">
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </Marquee>
            <br />
            <Marquee
              pauseOnHover={true}
              gradient={false}
              className="font-inter "
              speed={15}>
              <div className="flex flex-row flex-wrap justify-center md:justify-start">
                {skills.slice(7).map((item, idx) => {
                  return (
                    <p
                      key={idx}
                      className="px-4 py-2 mt-2 mr-2 transition-all duration-75 ease-in bg-gray-900 rounded-md group-hover:bg-opacity- text-tia-maria-500">
                      {item.skill}
                    </p>
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
