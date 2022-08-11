import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import Titles from "./Titles";
import DeleteTaskComp from "./DeleteTaskComp";

function Tasks() {
  const [state, setState] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [oldTask, setOldTask] = useState({ name: "", priority: "" });
  const [newTask, setNewTask] = useState({});

  function openModal(e) {
    setIsOpen(true);
    state.map((t) => {
      if (t.id === parseInt(e.target.value)) {
        return setOldTask({
          ...oldTask,
          id: t.id,
          name: t.name,
          priority: t.priority,
        });
      }
      return 0;
    });
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/task/${oldTask.id}`, newTask);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTask = async () => {
      const resp = await axios.get("http://localhost:3001/task");
      setState(resp.data);
    };

    getTask();
  }, []);

  return (
    <div className=" w-screen h-auto bg-back flex ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="bg-back h-[5rem] w-[35rem] m-auto rounded-md text-white"
      >
        <form className="text-center  ">
          <div className="flex justify-around mt-[10rem]  ">
            <div>
              <p className="mt-2 font-bold"> New task</p>
              <input
                name="name"
                type="text"
                className="w-[15rem] rounded-lg  p-1 outline-none text-black "
                placeholder={oldTask.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <p className="mt-2 font-bold ">Priority</p>
              <select
                name="priority"
                className="w-[5rem] rounded-lg  p-1 outline-none text-black "
                defaultValue={oldTask.priority}
                onChange={handleChange}
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                className="w-[5rem] p-1 rounded-md bg-button text-white mt-8 hover:bg-secondary
                hover:shadow-md hover:shadow-black transition-all duration-500 ease-in-out  "
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </Modal>

      <div className="w-[40rem] h-auto m-auto  p-2 rounded-[20px]  mt-[2rem] ">
        <Titles />

        {state.map((e, i) => {
          return (
            <div
              key={i}
              className={
                e.priority === "Low"
                  ? "bg-low rounded-lg"
                  : e.priority === "Medium"
                  ? "bg-mediun rounded-lg"
                  : "bg-high rounded-lg "
              }
            >
              <div className="grid grid-cols-4  w-full p-2 m-auto mt-2  text-white">
                <p className="col-span-2 ml-4">{e.name}</p>
                <p className=" text-center">{e.priority}</p>

                <div className="flex justify-center">
                  <button
                    name="Edit"
                    value={e.id}
                    onClick={openModal}
                    className="hover:bg-white hover:text-black text-white bg-green-700 rounded-lg w-[3rem] mr-2  "
                  >
                    Edit
                  </button>

                  <DeleteTaskComp id={e.id} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
