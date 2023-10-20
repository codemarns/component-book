import React from "react";
import cn from "classnames";
import { buttonStyles } from "../../styles";
import { DefaultColorEnum } from "../../shared";

type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  icon?: string;
  label?: string;
  loading?: boolean;
  disabled?: boolean;
  layout?: "auto" | "block";
  size?: "sm" | "md" | "lg" | "xl";
  type?: "button" | "reset" | "submit";
  variant?: "solid" | "outline" | "ghost";
  corner?: "flat" | "soft-edge" | "rounded";
  color?: keyof typeof DefaultColorEnum;
};

const Button: React.FC<TButtonProps> = (props) => {
  const {
    className,
    icon,
    label,
    children,
    id = "button",
    size = "md",
    layout = "auto",
    type = "button",
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
    layout === "block" ? root.block.base : "",
    className
  );

  return (
    <button
      {...restProps}
      id={id}
      type={type}
      className={baseClasses}
      aria-disabled={disabled || loading}
      aria-label={label}
    >
      {icon && (
        <i
          className={cn(
            { ["cm-icon-" + icon]: icon },
            root.icon.base,
            root.icon.sizes[size]
          )}
        />
      )}
      {loading ? "Loading..." : label || children}
    </button>
  );
};

export default Button;
