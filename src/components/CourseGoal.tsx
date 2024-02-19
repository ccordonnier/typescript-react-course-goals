import { type PropsWithChildren } from "react";

type CourseGoalProps= {
    title: string,
    id: number,
    onDelete:(id:number)=>void
}

export default function CourseGoal({ title, id, onDelete, children }:PropsWithChildren<CourseGoalProps> ) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    );
}