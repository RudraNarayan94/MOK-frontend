import React, { useState } from "react";

function CreateRoom() {
  const[custom,setCustom] = useState(false)
  function handleSelect(e){
    // console.log(e.target.value);
    if(e.target.value === 'custom' ) setCustom(true)
    else setCustom(false)
  }
  return (
    <>
      <div className="min-h-[70vh] font-mono text-white">
        <form action="" className="w-[350px] h-[400px] flex flex-col">
          <label htmlFor="orgName">Organization Name:</label>
          <input
            type="text"
            id="orgName"
            required
            placeholder="Enter your Org. name ..."
          />
          <label htmlFor="content">Content:</label>
          <textarea
            type="text"
            id="content"
            placeholder="Write or Paste your content here..."
            required
          />
          <label htmlFor="duration">Duration:</label>
          <select onChange={handleSelect} name="duration" id="duration" className="text-black">
            <option value="60">60s</option>
            <option value="120">120s</option>
            <option value="custom">Custom</option>
          </select>
          {custom && <input
            type="text"
            id="duration"
            placeholder="Enter duration..."
            required
          />}
          <label htmlFor="members">Members allowed:</label>
          <input
            type="text"
            id="members"
            placeholder="Enter no. of maximum members:"
            required
          />
          <button type="submit">Create Room</button>
        </form>
      </div>
    </>
  );
}

export default CreateRoom;
