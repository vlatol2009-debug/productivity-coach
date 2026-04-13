"use client";

import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  generatePlan,
} from "../services/api";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [plan, setPlan] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  async function handleAdd() {
    if (!input.trim()) return;
    await createTask(input);
    setInput("");
    loadTasks();
  }

  async function handleToggle(task: Task) {
    await updateTask(task.id, !task.completed);
    loadTasks();
  }

  async function handleDelete(id: number) {
    await deleteTask(id);
    loadTasks();
  }

  async function handleGenerate() {
    const res = await generatePlan();
    setPlan(res.data.plan);
  }

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 600 }}>
      <h1>Productivity Coach</h1>

      <div style={{ display: "flex", gap: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <h2>Tasks</h2>
      {tasks.map((t) => (
        <div key={t.id} style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => handleToggle(t)}
          />
          <span
            style={{
              textDecoration: t.completed ? "line-through" : "none",
            }}
          >
            {t.title}
          </span>
          <button onClick={() => handleDelete(t.id)}>x</button>
        </div>
      ))}

      <button onClick={handleGenerate} style={{ marginTop: 20 }}>
        Generate Plan
      </button>

      <h2>Plan</h2>
      {plan.map((t, i) => (
        <div key={t.id}>
          {i + 1}. {t.title}
        </div>
      ))}
    </div>
  );
}