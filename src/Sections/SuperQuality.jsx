import Button from "../components/Buttons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about_us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is desgined to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-10">
          <Button label="View Details" />
        </div>
      </div>

      <div className="">
        <img
          src={shoe8}
          alt="shoe8"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
