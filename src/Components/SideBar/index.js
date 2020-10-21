import React, { useMemo } from "react";

import SideBarItem from "./SideBarItem";

const SideBar = ({ visible }) => {
  const sideBar = useMemo(() => {
    if (visible) {
      return <SideBarItem />;
    }
  }, [visible]);

  return <>{sideBar}</>;
};

export default SideBar;
