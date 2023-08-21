import express from "express";
import Todo from "../models/todoModel.js";

const router = express.Router();

router.get("/todo/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    console.log("received at /todo/" + todoId);
    const todo = await Todo.findOne({
      where: {
        id: todoId,
      },
    });
    if (!todo) {
      return res.status(404).json({ error: "todo not found" });
    }

    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.get("/todo", async (req, res) => {
  try {
    console.log("received at /todo");
    const todos = await Todo.findAll();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.post("/todo", async (req, res) => {
  try {
    console.log("received at POST /todo");
    const { title, description, dueDate, completed, priority } = req.body;
    // console.log(title, description, dueDate, completed, priority);
    if (!title) {
      return res.status(400).json({ error: "title is empty" });
    }
    const newTodo = await Todo.create({
      title,
      description,
      dueDate,
      completed,
      priority,
    });

    res.status(201).json(newTodo);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.put("/todo/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    console.log("received at PUT /todo/" + todoId);
    const { title, description, dueDate, completed, priority } = req.body;
    console.log(title, description, dueDate, completed, priority);
    const todo = await Todo.findOne({
      where: {
        id: todoId,
      },
    });
    if (!todo) {
      return res.status(404).json({ error: "todo not found" });
    }
    if (title) todo.title = title;
    if (description) todo.description = description;
    if (dueDate) todo.dueDate = dueDate;
    if (completed) todo.completed = completed;
    if (priority) todo.priority = priority;

    todo.save();
    return res.status(200).json(todo);
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.delete("/todo/:id", async (req, res) => {
  try {
    const todoId = req.params.id;
    console.log("received at delete /todo/" + todoId);
    const todo = await Todo.findOne({
      where: {
        id: todoId,
      },
    });
    if (!todo) {
      return res.status(404).json({ error: "todo not found" });
    }
    await todo.destroy();
    return res.status(200).json({ message: "deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default router;
