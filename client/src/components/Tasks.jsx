import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Tasks() {
  const [state, setState] = useState(["hola"]);

  useEffect(() => {
    const getTask = async () => {
      const resp = await axios.get("http://localhost:3001/task");
      setState(resp.data);
    };

    getTask();
  }, []);
  return (
    <div className=" w-screen h-auto bg-back flex ">
      <div className="w-[40rem] h-auto m-auto  p-2 rounded-[20px]  mt-[2rem] ">
        <div className="grid grid-cols-5 w-full  p-2 bg-secondary rounded-md text-white ">
          <p className="col-span-2 ml-4 ">Task</p>
          <p className=" text-center"> Priority</p>
          <p className=" text-center">Status</p>
          <p className=" text-center">Actions</p>
        </div>

        {state.map((e, i) => {
          return (
            <div
              key={i}
              className={
                e.priority === "Low"
                  ? "bg-low"
                  : e.priority === "Medium"
                  ? "bg-mediun"
                  : "bg-high rounded-lg "
              }
            >
              <div className="grid grid-cols-5  w-full p-2 m-auto mt-2  text-white">
                <p className="col-span-2 ml-4">{e.name}</p>
                <p className=" text-center">{e.priority}</p>
                <p className=" text-center">
                  {e.status === true ? "Complete" : "Pending"}
                </p>
                <p className="  flex justify-center ">
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="mr-4 hover:cursor-pointer "
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="hover:cursor-pointer"
                  />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
