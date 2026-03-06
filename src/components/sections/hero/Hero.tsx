import Capital from "./components/Capital";
import Craft from "./components/Craft";
import Vision from "./components/Vision";

export default function Hero() {
  return (
    <div className="grid gap-4 md:grid-cols-3 mb-12">
      <div className="flex flex-col justify-around ">
        <Capital />
        <Vision />
      </div>

      <div className="md:col-span-2">
        <Craft />
      </div>
    </div>
  );
}
