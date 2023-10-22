import React, { useContext } from "react";
import { Button } from "../../../components";
import { TaskProps } from "../types";
import { CrudContext } from "../CrudContext";

export const Task: React.FC<TaskProps> = ({ id }) => {
  const { onRemoveItem } = useContext(CrudContext);

  const taskStyles = {
    root: {
      base: "group h-auto p-4 space-y-8 bg-white border hover:shadow-lg hover:scale-[1.0025] rounded-xl transition-all",
      header: {
        base: "",
        title: {
          base: "group-hover:text-primary break-words",
        },
      },
      actions: {
        base: "flex-1 flex items-center justify-end",
      },
    },
  };

  const { root } = taskStyles;

  return (
    <div id={id} className={root.base}>
      <p>
        Task ID: <b className={root.header.title.base}>{id}</b>
      </p>
      <div className={root.actions.base}>
        <Button
          label="Remove"
          icon="trash"
          color="danger"
          variant="outline"
          onClick={() => onRemoveItem!(id)}
        />
      </div>
    </div>
  );
};
