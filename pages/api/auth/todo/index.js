import connectDB from "../../../../config/connectDB";
import todoModel from "../../../../models/todoModel";

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
    console.log(session);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
