import connectDB from "../../../config/connectDB";
import todoModel from "../../../models/todoModel";

import { getSession } from "next-auth/react";

connectDB();

export default async function handler(req, res) {
  if (req.method == "POST") {
    await createTodo(req, res);
  }
}

const createTodo = async (req, res) => {
  try {
    const session = await getSession({ req });
    console.log({ session, todo: req.body.todo });
    if (!session) {
      return res.status(400).json({ msg: "Invalid Authentification" });
    }

    const { userId } = session;
    const { todo } = req.body;

    if (!todo) {
      return res.status(400).json({ msg: "Please add todo" });
    }
    console.log("ajuns1");
    const newTodo = new todoModel({
      name: todo.toLowerCase(),
      user: userId,
    });
    console.log("ajuns2");
    await newTodo.save();
    res.json({ msg: "Succes created ne todo" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
