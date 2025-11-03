import PlanList from "../components/PlanList.jsx";
import { mockPlans } from "../data/mockPlans.js";

export default function Plans() {
  function handleSelect(plan) {
    alert(`Selected plan: ${plan.title}`);
  }
  return (
    <section>
      <h2>Public Plans</h2>
      <PlanList items={mockPlans} onSelect={handleSelect} />
    </section>
  );
}
