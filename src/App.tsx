import goalsImg from "./assets/goals.jpg"
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";

export type courseGoal = {
  title: string,
  description: string,
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<courseGoal[]>([]);

  function handleAddGoal(goal:string, summary:string ) {
    setGoals(prevGoal => {
      const newGoal: courseGoal = {
        title: goal,
        description: summary,
        id: Math.random(),
      }
      return [...prevGoal, newGoal]
    })
  }

  function onDelete(id:number) {
    setGoals(prevGoals => prevGoals.filter((goal)=> goal.id !== id))
  }

  return <main>
    <Header image={{ src: goalsImg, alt: "A list of goals" }}>
      <h1>Your course goals</h1>
    </Header>
    <NewGoal onAddGoal={handleAddGoal}/>
    <CourseGoalList goals={goals} onDelete={onDelete}/>
  </main>;
}
