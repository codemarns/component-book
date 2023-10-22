import { createContext } from "react";
import { CommonProps } from "./types";

export const CrudContext = createContext<CommonProps>({});
export const CrudDispatchContext = createContext({});
