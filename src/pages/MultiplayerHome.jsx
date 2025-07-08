import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { JoinRoomContext } from "./Multiplayer";

function MultiplayerHome() {
  const { joinRoom, setJoinRoom } = useContext(JoinRoomContext);
  const [roomId, setRoomId] = useState({ id: "" });
  function handleChange(e) {
    setRoomId({ ...roomId, [e.target.name]: e.target.value });
  }

  return (
    <div className="overflow-hidden">
      <header className="font-mono text-center text-white ">
        <h1 className="text-5xl mb-3 p-3 font-semibold bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text ">
          Multiplayer Arena
        </h1>
        <p className="text-xl font-semibold underline underline-offset-2">
          Real-Time Typing, Real-Time Fun!
        </p>
      </header>
      <div className="flex min-h-[70vh] w-screen font-mono text-white overflow-hidden ">
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
                  className="md:w-[50vh] w-[40vh] rounded-lg p-3 font-semibold outline-none text-orange-500 focus:ring-2 focus:ring-[orange] "
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
    </div>
  );
}

export default MultiplayerHome;
