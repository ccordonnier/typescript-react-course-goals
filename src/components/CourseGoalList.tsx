import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox.tsx";

import {type courseGoal} from "../App.tsx"
import { ReactNode } from "react";

type CourseGoalListProps = {
    goals:courseGoal[],
    onDelete: (id:number)=>void
}

export default function CourseGoalList({goals, onDelete}:CourseGoalListProps) {
    if(goals.length === 0){
        return (
            <InfoBox mode="hint">You have no course goals yet. Start adding Some !</InfoBox>
        )
    }

    let warningBox: ReactNode;
    if(goals.length>=4){
        warningBox = <InfoBox mode="warning" severity="medium">You're collecting a lot of goals. Don't put too much on your plate!</InfoBox>
            
    }
    return (
        <>
        {warningBox}
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal onDelete={onDelete} id={goal.id} title={goal.title}>
                        {goal.description}
                    </CourseGoal>
                </li>
            ))}
        </ul>
        </>
    );
};
