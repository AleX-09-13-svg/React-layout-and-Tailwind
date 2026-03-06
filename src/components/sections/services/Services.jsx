import ServicesCard from "./components/ServicesCard";

export default function Services() {
  return (
    <div>
      <div className="text-h1 mb-8 ">Services</div>

      <div className="grid gap-4 md:grid-cols-3 mb-12 ">
        <div className="bg-gray-500 rounded-2xl">
          <ServicesCard
            namber="01"
            title="Furniture Design"
            text="The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences."
          ></ServicesCard>
        </div>

        <div className="bg-white">
          <ServicesCard
            namber="02"
            title="Interior Details"
            text="Incorporating interior detailing introduces dimension, tactile qualities, and captivating visual elements to a room, enhancing the overall design through the addition of those final embellishments."
          ></ServicesCard>
        </div>

        <div className="bg-white">
          <ServicesCard
            namber="03"
            title="Home Revamping"
            text="The design of furniture holds substantial influence over the aesthetics, ambiance, and usability of an area, exerting a profound effect on our everyday experiences."
          ></ServicesCard>
        </div>
      </div>
    </div>
  );
}
