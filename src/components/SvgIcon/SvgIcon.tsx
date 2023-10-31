import React from "react";
import cn from "classnames";
import { svgIconStyles } from "../../styles";

export type IconProps = {
  className?: string;
  path: string[] | string;
  size?: "sm" | "md" | "lg" | "xl";
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "default"
    | "black"
    | "white";
  onClick?: () => void;
};

export const SvgIcon: React.FC<IconProps> = (props) => {
  const {
    className,
    path,
    size: propSize = "md",
    color: propColor = "default",
    onClick,
  } = props;

  const {
    root: { base, size, color },
  } = svgIconStyles;

  const newArray = Array.isArray(path);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={cn(base, size[propSize], color[propColor], className)}
      onClick={onClick}
    >
      {newArray ? (
        path.map((newPath, index) => (
          <path
            key={index}
            d={newPath}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))
      ) : (
        <path d={path} strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
};
