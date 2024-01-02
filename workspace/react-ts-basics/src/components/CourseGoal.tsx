import { type FC, ReactNode } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  deleteFn: (id: number) => void;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal: FC<CourseGoalProps> = ({ id, title, children, deleteFn }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => deleteFn(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;

// export default function CourseGoal({ title, children }: CourseGoalProps) {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// }
