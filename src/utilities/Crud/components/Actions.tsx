import React, { useContext } from "react";
import { Button } from "../../../components";
import type { ActionProps } from "../types";
import { CrudContext } from "../CrudContext";

export const Actions: React.FC<ActionProps> = () => {
  const { tasks, onAddItem, onRemoveAllItem } = useContext(CrudContext);

  return (
    <div className="flex items-center gap-2">
      <Button label="Add" icon="plus" onClick={onAddItem} />
      <Button
        icon="trash"
        color="danger"
        label="Remove All"
        disabled={tasks?.length === 0}
        onClick={onRemoveAllItem}
      />
    </div>
  );
};
