const API_URL = "http://localhost:8000";

export async function getTasks() {
  const res = await fetch(`${API_URL}/tasks`);
  return res.json();
}

export async function createTask(title: string) {
  await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
}

export async function updateTask(id: number, completed: boolean) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
}

export async function deleteTask(id: number) {
  await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
}

export async function generatePlan() {
  const res = await fetch(`${API_URL}/plan/generate`, {
    method: "POST",
  });
  return res.json();
}