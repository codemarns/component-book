import React from "react";
import { SvgIcon } from "../../../components";
import { layoutStyles } from "../../../styles";

type Props = {
  onClick?: () => void;
};

export const Header: React.FC<Props> = ({ onClick }) => {
  const { header } = layoutStyles;

  return (
    <header className={header.base}>
      <SvgIcon
        size="lg"
        path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        className={header.icon.base}
        onClick={onClick}
      />
    </header>
  );
};
