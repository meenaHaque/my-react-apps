// Fetch Tasks
console.log("DOES IT WORK NOW");
export const fetchTasks = async () => {
console.log("DOES IT WORK NOW 2");
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();

  return data;
};

