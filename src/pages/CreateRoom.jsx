import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { JoinRoomContext } from "./Multiplayer";

function CreateRoom() {
  const { setJoinRoom } = useContext(JoinRoomContext);
  const [custom, setCustom] = useState(false);
  const [content, setContent] = useState("");

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  function handleChange(e) {
    setContent(e.target.value);
  }
  function handleSelect(e) {
    // console.log(e.target.value);
    if (e.target.value === "custom") setCustom(true);
    else setCustom(false);
  }
  return (
    <>
      <div className="min-h-[70vh] font-mono bg-[orang] text-white w-screen flex items-center justify-center">
        <form
          action=""
          className="w-[70%] md:w-[60%] h-[] flex flex-col m-[10px_0px_50px] border p-[20px_40px] bg-gradient-to-br from-red-600 via-orange-500 to-pink-500 rounded-xl shadow-2xl shadow-[#ff5500]"
        >
          <h1 className="text-4xl text-center underline font-semibold mt-5 ">
            Room Details
          </h1>
          <p className="text-center font-semibold mt-2 mb-5">
            The battle begins...
          </p>
          <div className="flex justify-center">
            <line className="h-0.5 mb-4 w-[90%] flex bg-gray-200"></line>
          </div>
          <label className="pl-1 mb-1" htmlFor="orgName">
            Organization Name:
          </label>
          <input
            type="text"
            id="orgName"
            required
            placeholder="Enter your org. name ..."
            className="p-1.5 mb-6 text-black outline-none rounded-md font-semibold focus:ring-2 focus:ring-black"
          />
          <label className="pl-1 mb-1" htmlFor="content">
            Content:
          </label>
          <textarea
            type="text"
            id="content"
            ref={textareaRef}
            value={content}
            onChange={handleChange}
            placeholder="Write or Paste your content here..."
            required
            className="p-1.5 h-fit mb-6 text-black outline-none rounded-md font-semibold focus:ring-2 focus:ring-black"
          />
          <label className="pl-1 mb-1" htmlFor="duration">
            Duration:
          </label>
          <div className="flex flex-col md:flex-row md:gap-5">
            <select
              onChange={handleSelect}
              name="duration"
              id="duration"
              className="text-black md:w-[35vh] w-full p-1.5 mb-6 outline-none rounded-md font-semibold focus:ring-2 focus:ring-black"
            >
              <option className="bg-orange-300" value="60">
                60s
              </option>
              <option className="bg-orange-300" value="120">
                120s
              </option>
              <option className="bg-orange-300" value="custom">
                Custom
              </option>
            </select>

            <input
              type="text"
              id="duration"
              placeholder="Enter duration..."
              disabled={!custom}
              required
              className="text-blac w-full p-1.5 h-fit mb-6 outline-none rounded-md font-semibold focus:ring-2 focus:ring-black"
            />
          </div>
          <label className="pl-1 mb-1" htmlFor="members">
            Members allowed:
          </label>
          <input
            type="text"
            id="members"
            placeholder="Enter no. of maximum members:"
            required
            className="text-black p-1.5 h-fit mb-6 outline-none rounded-md font-semibold focus:ring-2 focus:ring-black"
          />
          <div className="flex flex-col mt-3 items-center gap-3 justify-center mb-3">
            <button
              className=" text-black font-semibold border-2 w-[25vh] bg-[orange] p-2.5 rounded-lg hover:bg-orange-500 "
              type="submit"
            >
              Create Room
            </button>
            <p className="text-black">
              Already have room code ?{" "}
              <Link to='/multiplayer'>
                <span onClick={() => setJoinRoom(true)} className=" cursor-pointer underline hover:underline-offset-2 text-white">
                  Join Room
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateRoom;
