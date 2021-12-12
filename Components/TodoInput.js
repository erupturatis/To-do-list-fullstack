import axios from "axios";
import React, { useState } from "react";

const TodoInput = () => {
  const [todo, setTodo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/todo", { todo });

    console.log(res);
  };

  return (
    <div>
      <div className=" text-center text-2xl text-gray-500">To do list</div>
      <div className=" w-5/6 flex justify-center ">
        <form
          className=" mt-4 mb-5 shadow-xl border-2 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={todo}
            className="border-2"
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className=" w-6 h-6 border-2" type="submit">
            Submit dis
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoInput;
