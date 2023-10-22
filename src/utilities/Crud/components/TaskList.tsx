import React, { useContext } from "react";
import cn from "classnames";
import { Task } from "./Task";
import { NoRecord } from "./NoRecord";
import { CrudContext } from "../CrudContext";
import type { TaskListProps } from "../types";

export const TaskList: React.FC<TaskListProps> = () => {
  const { tasks, column = 1 } = useContext(CrudContext);

  const taskListStyles = {
    root: {
      base: "grid grid-cols-1 gap-4 p-4 bg-default-50 rounded-xl",
      column: {
        1: "grid-cols-1",
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
        6: "grid-cols-6",
        7: "grid-cols-7",
        8: "grid-cols-8",
        9: "grid-cols-9",
        10: "grid-cols-10",
        11: "grid-cols-11",
        12: "grid-cols-12",
      },
    },
  };
  const { root } = taskListStyles;

  if (tasks?.length === 0) return <NoRecord />;

  return (
    <div className={cn(root.base, root.column[column])}>
      {tasks?.map((e) => (
        <Task key={e.id} id={e.id} />
      ))}
    </div>
  );
};
