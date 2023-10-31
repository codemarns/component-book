import React, { useEffect, useState } from "react";
import cn from "classnames";
import { SidebarProps } from "./types";
import { layoutStyles } from "../../styles";
import { SvgIcon } from "../../components";

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { appearance = "minimize", transition = "move along" } = props;

  const [showSidebar, setShowSidebar] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    setShowSidebar(screenSize ? true : false);
  }, [screenSize]);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const { main, sidebar, wrapper, container, header, content, footer } =
    layoutStyles;

  const sidebarClasses = cn(
    sidebar.base,
    showSidebar
      ? sidebar.appearance[appearance].show
      : sidebar.appearance[appearance].hide
  );

  const wrapperClasses = cn(
    wrapper.base,
    showSidebar
      ? wrapper.appearance[appearance].transition[transition].addPadding
      : wrapper.appearance[appearance].transition[transition].removePadding
  );

  return (
    <main className={main.base}>
      <aside className={sidebarClasses}>
        <div className={sidebar.header.base}>
          {transition === "overlay" && !screenSize && (
            <SvgIcon
              size="lg"
              path="M6 18L18 6M6 6l12 12"
              className={sidebar.header.icon.base}
              onClick={toggleSidebar}
            />
          )}
        </div>
      </aside>
      <div className={wrapperClasses}>
        <div className={container.base}>
          <header className={header.base}>
            <SvgIcon
              size="lg"
              path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              className={header.icon.base}
              onClick={toggleSidebar}
            />
          </header>
          <div className={content.base}>
            <span className="block">{`window.innerWidth >= 1024`}: <b>{screenSize ? "true" : "false"}</b></span>
            <hr />
            <span className="block">appearance: <b>{appearance}</b></span>
            <span className="block">transition: <b>{transition}</b></span>
          </div>
          <footer className={footer.base}>Footer</footer>
        </div>
      </div>
    </main>
  );
};
