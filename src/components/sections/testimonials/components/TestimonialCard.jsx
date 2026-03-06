export default function TestimonialsCard({ text, author, stars }) {
  return (
    <div>
      <div>{text}</div>
      <div className="text-small font-bold">{author}</div>
      <div className="text-yellow-400">{stars}</div>
    </div>
  );
}
