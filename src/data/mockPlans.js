// Масив с примерни планове – докато нямаме бекенд/API
export const mockPlans = [
  {
    id: "p1", // уникален идентификатор (ще го ползваме като key)
    title: "Full Body – Beginner", // име на плана
    level: "Beginner", // ниво
    durationWeeks: 4, // продължителност в седмици
    sessionsPerWeek: 3, // тренировки на седмица
    goal: "General fitness", // цел
  },
  {
    id: "p2",
    title: "Push/Pull/Legs – Intermediate",
    level: "Intermediate",
    durationWeeks: 6,
    sessionsPerWeek: 5,
    goal: "Muscle gain",
  },
  {
    id: "p3",
    title: "HIIT + Core – Quick Fat Loss",
    level: "Intermediate",
    durationWeeks: 3,
    sessionsPerWeek: 4,
    goal: "Fat loss",
  },
];
