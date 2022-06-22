import { FaEthereum } from "react-icons/fa";
import React from "react";
import Marquee from "react-fast-marquee";
import data from "../data/creator.json";
export default function Creators() {
  return (
    <div className="py-10 md:py-20" data-aos="fade-up" data-aos-duration="2000">
      <h1 className="font-primary text-center text-tertiary font-bold text-3xl md:text-6xl">
        Top Creators
      </h1>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        className="mt-5 md:mt-10 py-4"
      >
        {data.map((item) => {
          return (
            <div className="flex items-center gap-3  mr-4 md:mr-12 cursor-pointer hover:scale-105 transition-all">
              <img
                src={`/img/${item.image}`}
                alt=""
                className="rounded-full w-1/4 md:w-auto"
              />
              <div className="text-tertiary">
                <p className="font-primary text-lg md:text-2xl font-semibold">
                  {item.name}
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-secondary p-1 md:p-2 mt-1 rounded-full">
                    <FaEthereum color="#ECDBBA" size="1rem" />
                  </div>
                  <p className="text-xs md:text-base">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
      <Marquee
        pauseOnHover={true}
        gradient={false}
        direction="right"
        className="mt-0 md:mt-10 py-4"
      >
        {data.map((item) => {
          return (
            <div className="flex items-center gap-3 mr-4 md:mr-12 cursor-pointer hover:scale-105 transition-all">
              <img
                src={`/img/${item.image}`}
                alt=""
                className="rounded-full w-1/4 md:w-auto"
              />
              <div className="text-tertiary">
                <p className="font-primary text-lg md:text-2xl font-semibold">
                  {item.name}
                </p>
                <div className="flex items-center gap-2">
                  <div className="bg-secondary p-1 md:p-2 mt-1 rounded-full">
                    <FaEthereum color="#ECDBBA" size="1rem" />
                  </div>
                  <p className="text-xs md:text-base">{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
