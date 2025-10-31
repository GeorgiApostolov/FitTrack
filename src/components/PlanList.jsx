import PlanCard from "./PlanCard.jsx";

export default function PlanList({ items = [], onSelect }) {
  if (!items.length) {
    return <p>No plans found.</p>;
  }

  return (
    <div className="grid">
      {items.map((p) => (
        <PlanCard key={p.id} plan={p} onSelect={onSelect} />
      ))}
    </div>
  );
}
