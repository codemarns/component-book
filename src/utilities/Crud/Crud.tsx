import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCrudReducer } from "../../hooks";
import { Actions, TaskList } from "./components";
import { CrudContext, CrudDispatchContext } from "./CrudContext";
import type { CrudProps, TaskProps } from "./types";

const initialData: TaskProps[] = [];

export const Crud: React.FC<CrudProps> = (props) => {
  const { column = 1, onChange } = props;
  const [tasks, dispatch] = useReducer(useCrudReducer, initialData);

  const handleAddItem = () => {
    dispatch({
      type: "add",
      id: uuidv4(),
    });
  };

  const handleRemoveItem = (id: string) => {
    dispatch({
      type: "remove",
      id: id,
    });
  };

  const handleRemoveAllItem = () => {
    dispatch({
      type: "remove-all",
      id: "",
    });
  };

  React.useEffect(() => {
    if (!onChange) return;
    onChange(tasks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks]);

  return (
    <CrudContext.Provider
      value={{
        tasks,
        column,
        onAddItem: handleAddItem,
        onRemoveItem: handleRemoveItem,
        onRemoveAllItem: handleRemoveAllItem,
      }}
    >
      <CrudDispatchContext.Provider value={dispatch}>
        <div className="space-y-4">
          <Actions />
          <TaskList />
        </div>
      </CrudDispatchContext.Provider>
    </CrudContext.Provider>
  );
};
