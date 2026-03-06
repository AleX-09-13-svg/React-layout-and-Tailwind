import OfferImg from "./components/OfferImg";
import OfferText from "./components/OfferText";

export default function Offer() {
  return (
    <div className="grid gap-4 md:grid-cols-3 m-5">
      <OfferImg />
      <div className="md:col-span-2">
        <OfferText />
      </div>
    </div>
  );
}
