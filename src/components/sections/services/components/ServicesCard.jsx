export default function ServicesCard({ namber, title, text }) {
  return (
    <div className="flex flex-col  m-5 ">
      <div className="text-h2 text-right">{namber}</div>
      <div className="text-h2 mt-8">{title}</div>
      <div className="text-body mt-4">{text}</div>
    </div>
  );
}
