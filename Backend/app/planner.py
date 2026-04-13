def generate_plan(tasks):
    active_tasks = [t for t in tasks if not t.completed]
    sorted_tasks = sorted(active_tasks, key=lambda x: x.created_at)

    plan = []
    for index, task in enumerate(sorted_tasks, start=1):
        plan.append({
            "id": task.id,
            "title": task.title,
            "order": index
        })

    return {
        "status": "ok",
        "data": {
            "plan": plan
        }
    }