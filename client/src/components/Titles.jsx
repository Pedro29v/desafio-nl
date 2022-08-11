import React from "react";

function Titles() {
  return (
    <div>
      <div className="grid grid-cols-4 w-full  p-2 bg-slate-200 text-black font-bold ">
        <p className="col-span-2 ml-4 ">Task</p>
        <p className=" text-center"> Priority</p>
        <p className=" text-center">Actions</p>
      </div>
    </div>
  );
}

export default Titles;
