export default function PlanCard({ plan, onSelect }) {
  return (
    <article className="card">
      <h3>{plan.title}</h3>
      <p>
        <b>Level:</b> {plan.level}
      </p>
      <p>
        <b>Duraiton:</b> {plan.durationWeeks} weeks
      </p>
      <p>
        <b>Sessions/week:</b> {plan.sessionsPerWeek}
      </p>
      <p>
        <b>Goal:</b> {plan.goal}
      </p>

      <button onClick={() => onSelect?.(plan)} style={{ marginTop: 8 }}>
        View details
      </button>
    </article>
  );
}
