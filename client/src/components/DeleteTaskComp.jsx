import React from "react";
import axios from "axios";

function DeleteTaskComp({ id }) {
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/delete/${id.target.value}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        name="Delete"
        value={id}
        onClick={deleteTask}
        className="hover:bg-white hover:text-black text-white bg-red-700 rounded-lg w-[3rem]  "
      >
        Del
      </button>
    </div>
  );
}

export default DeleteTaskComp;
