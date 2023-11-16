import React, { useEffect, useState } from "react";
import cn from "classnames";
import { Header } from "./components/Header";
import { Sidebar as Aside } from "./components/Sidebar";
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

  const { main, wrapper, container, content, footer } = layoutStyles;

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
    <main className={cn("responsive-layout", main.base)}>
      <Aside
        defaultScreen={defaultScreen}
        expandSidebar={expandSidebar}
        mobileScreen={mobileScreen}
        onClick={toggleSidebar}
      />
      <div className={wrapperClasses}>
        <div className={container.base}>
          <Header onClick={toggleSidebar} />
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
