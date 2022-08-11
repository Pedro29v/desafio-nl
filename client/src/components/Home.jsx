import React from "react";
import Tasks from "./Tasks";
import Form from "./Form";

function Home() {
  return (
    <div className=" w-screen h-auto bg-back   flex flex-col ">
      <Form />
      <Tasks />
    </div>
  );
}

export default Home;
