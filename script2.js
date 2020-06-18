// We must remember that everything is stored as string in the localStorage. But that doesn't mean we cannot storage arrays or objects in the localStorage. Here is what we do this !!!

const todos = [
  {
    todo: 'develop more apps and do it fast',
    assignedTo: 'Imran Rafiq Rather'
  },
  {
    todo: 'Play with bootstrap-4 and update your profile',
    assignedTo: 'emmeiwhite'
  },
  {
    todo: 'develop more apps and do it fast',
    assignedTo: 'Kaku'
  },
];

// Step-1: Convert the array into string
localStorage.setItem("todos", JSON.stringify(todos));

// Step 2: Retreiving the stored Array back in the original form

const receiveBackTodos = JSON.parse(localStorage.getItem("todos"));
console.log(receiveBackTodos);