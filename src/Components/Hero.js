import Button from "./Button";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <>
      <div className="bg-tertiary py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
          <div
            className="flex flex-col gap-8 text-center items-center md:text-left md:items-start"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-5xl text-center md:text-left md:text-8xl font-primary font-semibold text-primary">
              Discover{" "}
              <span className="text-secondary underline decoration-solid">
                Rare 3D Collections
              </span>{" "}
              in the{" "}
              <span className="text-secondary underline decoration-solid">
                World
              </span>
            </h1>
            <p className="text-primary md:text-xl">
              The largest 3D NFT marketplace authentic and truly unique digital
              creation. Create yout own NFT dream gallery
            </p>
            <div className="flex justify-between w-3/4">
              <div className="text-primary text-center">
                <h1 className=" text-xl md:text-3xl font-semibold">$278M</h1>
                <p className="text-sm md:text-base">Trading Volume</p>
              </div>
              <div className="text-primary text-center">
                <h1 className=" text-xl md:text-3xl font-semibold">300K</h1>
                <p className="text-sm md:text-base">Art Work</p>
              </div>
              <div className="text-primary text-center">
                <h1 className=" text-xl md:text-3xl font-semibold">1.8M</h1>
                <p className="text-sm md:text-base">Total Users</p>
              </div>
            </div>
            <div>
              <Button text="Join Now" size="lg" variant="primary-outline" />
            </div>
          </div>
          <div
            className="hidden md:block"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Spline
              scene="https://prod.spline.design/Lvazvm6W3wlOASSk/scene.splinecode"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}
