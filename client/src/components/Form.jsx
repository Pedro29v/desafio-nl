import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [task, setTask] = useState({ priority: "Low" });

  useEffect(() => {}, []);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createTask = async () => {
      try {
        await axios.post("http://localhost:3001/post", task);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    createTask();
  };

  return (
    <div className="w-[35rem] h-auto p-2  m-auto mt-[5rem] text-white  ">
      <form className="text-center " onSubmit={handleSubmit}>
        <div className="flex justify-around">
          <div>
            <p className="mt-2 font-bold"> New task</p>
            <input
              name="name"
              type="text"
              className="w-[15rem] rounded-lg  p-1 outline-none text-black bg-slate-200 "
              onChange={handleChange}
            />
          </div>
          <div>
            <p className="mt-2 font-bold ">Priority</p>
            <select
              name="priority"
              className="w-[5rem] rounded-lg  p-1 outline-none text-black bg-slate-200"
              defaultValue="Low"
              onChange={handleChange}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-[5rem] p-1 rounded-md bg-button text-white mt-8 hover:bg-secondary
                hover:shadow-md hover:shadow-black transition-all duration-500 ease-in-out  "
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
