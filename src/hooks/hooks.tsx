import { v4 as uuidv4 } from "uuid";
import { TaskProps } from "../utilities";

type CrudActionProps = TaskProps & {
  type: "add" | "remove" | "remove-all";
};

export function useCrudReducer(tasks: TaskProps[], action: CrudActionProps) {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: uuidv4(),
          // ...new params
        },
      ];
    case "remove":
      return tasks.filter((task) => task.id !== action.id);
    case "remove-all":
      return [];
    default:
      throw Error("Unkown type: " + action.type);
  }
}
