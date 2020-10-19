export function tasksFiltered(state) {
  let tasksFiltered = {};
  if (state.search) {
    Object.keys(state.tasks).forEach(key => {
      let task = state.tasks[key];
      if (task.name.toLowerCase().includes(state.search.toLowerCase())) {
        tasksFiltered[key] = task;
      }
    });

    return tasksFiltered;
  }
  return state.tasks;
}

export function tasks(state, getters) {
  let tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(key => {
    let task = tasksFiltered[key];
    if (!task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}

export function tasksCompleted(state, getters) {
  let tasksFiltered = getters.tasksFiltered;
  let tasks = {};
  Object.keys(tasksFiltered).forEach(key => {
    let task = tasksFiltered[key];
    if (task.completed) {
      tasks[key] = task;
    }
  });
  return tasks;
}
