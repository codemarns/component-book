import React from "react";
import cn from "classnames";
import { buttonStyles } from "../../styles";
import { DefaultColorEnum } from "../../shared";

type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "ghost";
  corner?: "flat" | "soft-edge" | "rounded";
  color?: keyof typeof DefaultColorEnum;
};

const Button: React.FC<TButtonProps> = (props) => {
  const {
    className,
    label,
    children,
    id = "button",
    size = "md",
    color = "primary",
    variant = "solid",
    corner = "soft-edge",
    disabled = false,
    loading = false,
    ...restProps
  } = props;

  const { root } = buttonStyles;

  const baseClasses = cn(
    "cm-button",
    root.base,
    root.sizes[size],
    root.corners[corner],
    root.variants[variant].colors[color].base,
    disabled || loading
      ? [root.cursors.disable, root.variants[variant].colors[color].disable]
      : [root.cursors.default, root.variants[variant].colors[color].default],
    className
  );

  return (
    <button
      {...restProps}
      id={id}
      className={baseClasses}
      aria-disabled={disabled || loading}
      aria-label={label}
    >
      {label || children}
    </button>
  );
};

export default Button;
