import React, { useEffect, useState } from "react";
import cn from "classnames";
import { SvgIcon } from "../../components";
import { layoutStyles } from "../../styles";
import { SidebarProps } from ".";

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const { transition = "move along" } = props;

  const [expandSidebar, setExpandSidebar] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    setExpandSidebar(screenSize ? true : false);
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
    setExpandSidebar(!expandSidebar);
  };

  const { main, sidebar, wrapper, container, header, content, footer } =
    layoutStyles;

  const sidebarClasses = cn(
    sidebar.base,
    expandSidebar
      ? sidebar.appearance.expand.base
      : sidebar.appearance.minimize.base
  );

  const wrapperClasses = cn(
    wrapper.base,
    expandSidebar
      ? wrapper.transition[transition].appearance.expand.base
      : wrapper.transition[transition].appearance.minimize.base
  );

  console.log("Expand Sidebar:", expandSidebar);

  return (
    <main className={main.base}>
      <aside className={sidebarClasses}>
        <div className={sidebar.header.base}>
          {transition === "overlay" && expandSidebar && !screenSize && (
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
            <span>
              Expand Sidebar:{" "}
              <b className={expandSidebar ? "text-primary" : "text-default"}>
                {expandSidebar ? "true" : "false"}
              </b>
            </span>
            <hr />
            <span>
              {`Window Size >= 1024: `}
              <b className={screenSize ? "text-primary" : "text-default"}>
                {screenSize ? "true" : "false"}
              </b>
            </span>
          </div>
          <footer className={footer.base}>Footer</footer>
        </div>
      </div>
    </main>
  );
};
