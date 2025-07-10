import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const JoinRoomContext = createContext();

function Multiplayer() {
  const [joinRoom, setJoinRoom] = useState(false);

  return (
    <JoinRoomContext.Provider value={{ joinRoom, setJoinRoom }}>
      <div className="bg-[#181C22] ">
        <Outlet />
      </div>
    </JoinRoomContext.Provider>
  );
}

export default Multiplayer;
