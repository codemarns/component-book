import React from "react";
import cn from "classnames";
import { layoutStyles } from "../../../styles";
import { SvgIcon } from "../../../components";
import styled from "styled-components";
type Props = {
  mobileScreen?: boolean;
  defaultScreen?: boolean;
  expandSidebar?: boolean;
  onClick?: () => void;
};

const dummy_menus = [
  {
    id: "dashboard",
    name: "dashboard",
    path: [
      "M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z",
      "M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z",
    ],
  },
  {
    id: "employees",
    name: "employees",
    path: "M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z",
    active: true,
  },
  {
    id: "sales",
    name: "sales",
    path: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  },
  {
    id: "inventory",
    name: "inventory",
    path: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
  {
    id: "stocks",
    name: "stocks",
    path: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605",
  },
  {
    id: "notification",
    name: "notification",
    path: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0",
  },
  {
    id: "settings",
    name: "settings",
    path: [
      "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z",
      "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
    ],
  },
];

export const Sidebar: React.FC<Props> = (props) => {
  const { expandSidebar, defaultScreen, mobileScreen, onClick } = props;

  const { sidebar } = layoutStyles;

  const sidebarClasses = cn(
    sidebar.base,
    mobileScreen
      ? expandSidebar
        ? sidebar.screen.mobile.appearance.show.base
        : sidebar.screen.mobile.appearance.hide.base
      : defaultScreen
      ? expandSidebar
        ? sidebar.screen.default.appearance.expand.base
        : sidebar.screen.default.appearance.minimize.base
      : expandSidebar
      ? sidebar.screen.default.appearance.expand.base
      : sidebar.screen.default.appearance.minimize.base
  );

  return (
    <StyledSidebar className={sidebarClasses}>
      <div className={sidebar.header.base}>
        <img
          src={"/codemarns-logo.svg"}
          alt="codemarns logo"
          className="w-14"
        />
        {expandSidebar && (
          <span className="text-success text-xl font-medium mr-auto">
            code<span className="text-default">marns</span>
          </span>
        )}
        {expandSidebar && !defaultScreen && (
          <SvgIcon
            size="lg"
            path="M6 18L18 6M6 6l12 12"
            className={sidebar.header.icon.base}
            onClick={onClick}
          />
        )}
      </div>
      <nav className="w-[256px] py-2">
        <ul className="space-y-2">
          {dummy_menus.map((menu) => (
            <li
              key={menu.id}
              className={cn(
                "cursor-pointer select-none group h-12 px-6 flex items-center border-l-4 capitalize transition-all overflow-hidden truncate text-clip",
                menu.active
                  ? "border-success text-white hover:bg-default-800"
                  : "border-transparent hover:bg-default-800 hover:text-white hover:border-default-700"
              )}
            >
              <SvgIcon
                path={menu.path}
                className={
                  menu.active
                    ? "text-white"
                    : "text-default-300 group-hover:text-white"
                }
              />
              {expandSidebar && <span className="ml-3">{menu.name}</span>}
            </li>
          ))}
        </ul>
      </nav>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.aside`
  /* width */
  &::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #323945;
  }
`;
