import React from "react";

type TButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

const Button: React.FC<TButtonProps> = (props) => {
  const { label, children, ...restProps } = props;

  return <button {...restProps}>{label || children}</button>;
};

export default Button;
