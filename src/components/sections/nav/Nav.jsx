import Hutly from "./components/Hutly";
import NavButton from "./components/NavButton";

export default function Nav() {
  return (
    <div className="flex justify-between items-center text-small">
      <div className="flex">
        <Hutly></Hutly>
      </div>
      <div className="flex ">
        <NavButton props="Home"></NavButton>
        <NavButton props="Project"></NavButton>
        <NavButton props="About Us"></NavButton>
        <NavButton props="FAQs"></NavButton>
      </div>
    </div>
  );
}
