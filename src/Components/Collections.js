import Button from "./Button";
import { FaEthereum } from "react-icons/fa";

import data from "../data/item-nft.json";

export default function Collections() {
  return (
    <>
      <div
        className="container mx-auto py-4 md:py-20 px-3 md:px-0"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="flex justify-between items-center">
          <h1 className="font-primary text-tertiary font-bold text-3xl md:text-5xl">
            Hot Drops
          </h1>
          <Button text="View More" variant="secondary" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-14 py-8">
          {data.map((item) => {
            return (
              <div data-aos="fade-up" data-aos-duration="3000">
                <div className="border-2 md:border-4 bg-background rounded-2xl border-tertiary w-full p-3 flex flex-col gap-4 hover:scale-105 transition-all cursor-pointer">
                  <img
                    src={`/img/${item.image}`}
                    alt=""
                    className="w-full rounded-xl"
                  />
                  <div>
                    <h1 className="font-primary text-tertiary font-bold text-xl md:text-3xl">
                      {item.title}
                    </h1>
                    <p className="text-tertiary">@{item.username}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-tertiary font-bold">{item.price} ETH</p>
                    <div className="bg-secondary p-2 rounded-full">
                      <FaEthereum color="#ECDBBA" size="1rem" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
