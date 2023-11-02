import React, { useEffect, useState } from "react";
import cn from "classnames";
import { SvgIcon } from "../../components";
import { layoutStyles } from "../../styles";
import { SidebarProps } from "./types";

export const Sidebar: React.FC<SidebarProps> = () => {
  const [expandSidebar, setExpandSidebar] = useState(true);
  const [mobileScreen, setMobileScreen] = useState(window.innerWidth <= 768);
  const [defaultScreen, setDefaultScreen] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    setExpandSidebar(defaultScreen ? true : false);
  }, [defaultScreen]);

  useEffect(() => {
    const updateDimension = () => {
      setMobileScreen(window.innerWidth <= 768);
      setDefaultScreen(window.innerWidth >= 1280);
    };

    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [defaultScreen, mobileScreen]);

  const toggleSidebar = () => {
    setExpandSidebar(!expandSidebar);
  };

  const { main, sidebar, wrapper, container, header, content, footer } =
    layoutStyles;

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

  const wrapperClasses = cn(
    wrapper.base,
    mobileScreen
      ? wrapper.screen.mobile.base
      : defaultScreen
      ? expandSidebar
        ? wrapper.screen.default.appearance.auto.base
        : wrapper.screen.default.appearance.contain.base
      : expandSidebar
      ? wrapper.screen.default.appearance.auto.base
      : wrapper.screen.default.appearance.contain.base
  );

  return (
    <main className={main.base}>
      <aside className={sidebarClasses}>
        <div className={sidebar.header.base}>
          {expandSidebar && !defaultScreen && (
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
              <b className={expandSidebar ? "text-success" : "text-default"}>
                {expandSidebar ? "true" : "false"}
              </b>
            </span>
            <hr />
            <span>
              {`Window Size >= 1024: `}
              <b className={defaultScreen ? "text-success" : "text-default"}>
                {defaultScreen ? "true" : "false"}
              </b>
            </span>
            <hr />
            <span>
              {`Mobile Size <= 768: `}
              <b className={mobileScreen ? "text-success" : "text-default"}>
                {mobileScreen ? "true" : "false"}
              </b>
            </span>
          </div>
          <footer className={footer.base}>Footer</footer>
        </div>
      </div>
    </main>
  );
};
