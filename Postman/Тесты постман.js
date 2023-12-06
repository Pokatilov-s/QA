var id_task = pm.response.json().tasks[0].id;

pm.collectionVariables.set("task_id", id_task);