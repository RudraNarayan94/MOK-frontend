import React from "react";
import { Outlet } from "react-router-dom";

function Multiplayer() {
  return (
    <div className="bg-[#181C22] ">
      <Outlet />
    </div>
  );
}

export default Multiplayer;
