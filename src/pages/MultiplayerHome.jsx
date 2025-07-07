import React, { useState } from "react";
import { Link } from "react-router-dom";

function MultiplayerHome() {
  const [joinRoom, setJoinRoom] = useState(false);
  const [roomId, setRoomId] = useState({id:""});
  function handleChange(e){
    // setRoomId(e.target.value)
    setRoomId({...roomId,[e.target.name]:e.target.value})
  }
  // console.log(roomId);


  return (
    <>
      <header className="font-mono text-center text-white ">
        <h1 className="text-3xl underline ">Multiplayer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vel
          quidem sed doloribus sequi
        </p>
      </header>
      <div className="flex min-h-[80vh] w-screen font-mono text-white overflow-hidden ">
        <section className="w-[50%] flex flex-col items-center justify-center text-center p-[20px] ">
          <h1 className="text-6xl leading-tight text-orange-500 font-semibold ">
            Sync Your Speed
          </h1>
          <h2 className="text-2xl text-orange-400 mb-8 ">
            Real-Time Typing Duels Await!!
          </h2>
          <p>Join the battle hold your nerves and Ready Steady Type....</p>
          {!joinRoom ? (
            <div className="flex flex-col gap-[19px] mt-11">
              <button
                onClick={() => setJoinRoom((prev) => !prev)}
                className="border-2 w-[50vh] bg-[orange] p-2.5 rounded-3xl hover:bg-orange-500 "
              >
                Join Room
              </button>
              <Link to="create">
                <button className="border-2 w-[50vh] bg-[orange] p-2.5 rounded-3xl hover:bg-orange-500 ">
                  Create Room
                </button>
              </Link>
            </div>
          ) : (
            <div className="mt-11 flex items-center flex-col gap-2 md:flex-row">
              <div className="flex items-center gap-1.5">
                <Link to="create">
                  <button className="text-2xl bg-[orange] p-2 w-12 rounded-lg hover:bg-orange-500 ">
                    +
                  </button>
                </Link>
                <input
                  type="text"
                  name="id"
                  value={roomId.id}
                  placeholder="Enter room code..."
                  onChange={handleChange}
                  required
                  className="md:w-[50vh] w-[40vh] rounded-lg p-3 font-semibold outline-none text-orange-500 focus:ring-2 focus:ring-black "
                />
              </div>
              <button className="p-3 bg-[orange] rounded-lg w-[20vh] md:w-24 hover:bg-orange-500 ">
                Join
              </button>
            </div>
          )}
        </section>
        <section className="w-[50%]  flex items-center justify-center relative ">
          <img
            className="w-[90vh] h-[70vh] absolute  right-0 top-[-5%] "
            src="./multi_sec-removebg-preview.png"
            alt="multiplayer"
          />
        </section>
      </div>
    </>
  );
}

export default MultiplayerHome;
