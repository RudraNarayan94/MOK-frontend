import { useState } from "react";
import TypingTestKeyboard from "../components/KeyboardLayout/KBLayout";
import TextBox from "../components/practice_page/TextBox";

const Practice = () => {
  const [fullscreen, setFullscreen] = useState(false);
  let bestScore = '32 wpm';
  let todayHighScore = '29 wpm';

  return (
    <div className="bg-[#181C22] text-white font-mono flex flex-col justify-center items-center ">
      <div className="flex w-[80%] justify-between px-5 py-2 mt-5 ">
        <div className="text-2xl">30</div>
        <div className="bg-[#00000045] p-2 rounded-xl text-[gray] ">Best Score:{bestScore} | Today's High Score:{todayHighScore}</div>
        <div>
          <img
            className="w-[30px] cursor-pointer "
            src={fullscreen ? "/exitscreen.png" : "/fullscreen.png"}
            alt="fullscreen"
            onClick={() => setFullscreen(prev => !prev)}
          />
        </div>
      </div>
      <TextBox />
      <TypingTestKeyboard />
    </div>
  );
};

export default Practice;
