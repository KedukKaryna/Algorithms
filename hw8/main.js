class Task {
    constructor(name, time, cost) {
      this.name = name;
      this.time = time; 
      this.cost = cost;
    }
  }
  
  class TaskScheduler {
    static maximizeTasks(tasks, maxTime) {
      tasks.sort((a, b) => a.time - b.time);
  
      const selectedTasks = [];
      let totalTime = 0;
  
      for (const task of tasks) {
        if (totalTime + task.time <= maxTime) {
          selectedTasks.push(task);
          totalTime += task.time;
        } else {
          break; 
      }
      return selectedTasks;
    }
  }
  

  const tasks = [
    new Task("Task1", 2, 100),
    new Task("Task2", 1, 200),
    new Task("Task3", 4, 150),
    new Task("Task4", 3, 120),
  ];
  
  const maxTime = 5;
  const selectedTasks = TaskScheduler.maximizeTasks(tasks, maxTime);
  
  console.log("Selected tasks:");
  selectedTasks.forEach(task => console.log(`Name: ${task.name}, Time: ${task.time}, Cost: ${task.cost}`));
  