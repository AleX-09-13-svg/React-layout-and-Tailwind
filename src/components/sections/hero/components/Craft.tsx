export default function Craft() {
  return (
    <div className="">
      <div className="text-h1 font-bold text-left ml-[10%] mb-8">
        We craft the
        <br />
        future dwelling!!!.
      </div>

      <img
        src={`${import.meta.env.BASE_URL}images/hero-img.webp`}
        className="rounded-3xl"
      />
    </div>
  );
}
