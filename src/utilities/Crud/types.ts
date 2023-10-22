export type TaskProps = {
  id: string;
};

export type CommonProps = {
  tasks?: TaskProps[];
  onAddItem?: () => void;
  onRemoveItem?: (id: string) => void;
  onRemoveAllItem?: () => void;
  column?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
};

export type TaskListProps = Pick<CommonProps, "column">;

type ActionPickedProps = "tasks" | "onAddItem" | "onRemoveAllItem";

export type ActionProps = Pick<CommonProps, ActionPickedProps>;

export type CrudProps = TaskListProps & {
  onChange?: (tasks: TaskProps[]) => void;
};
