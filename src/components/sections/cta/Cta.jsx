import Start from "./components/Start";
import Made from "./components/Made";
import Hutly from "./components/Hutly";

export default function Cta() {
  return (
    <div className="bg-gray-600  text-white p-4">
      <Start></Start>
      <Made></Made>
      <Hutly></Hutly>
    </div>
  );
}
