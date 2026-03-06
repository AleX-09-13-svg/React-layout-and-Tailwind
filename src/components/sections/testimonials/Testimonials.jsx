import data from "../../../data/testimonials";
import TestimonialsCard from "./components/TestimonialCard";

export default function Testimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-12">
      <div className=" md:col-span-2 text-h1 text-left ml-[10%] mt-[5%]">
        What our <br /> customers say
      </div>
      {data.map((item) => (
        <div className="flex">
          <TestimonialsCard key={item.id} {...item} />
        </div>
      ))}
    </div>
  );
}
