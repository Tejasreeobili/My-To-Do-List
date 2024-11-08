let tasks = [];
let completedTasks = [];
let notes = [];

function addTask() {
  const taskInput = document.getElementById('taskInput').value;
  const taskDateTime = document.getElementById('taskDateTime').value;
  const taskPriority = document.getElementById('taskPriority').value;

  if (!taskInput || !taskDateTime) {
    alert('Please enter task details.');
    return;
  }

  const task = {
    id: Date.now(),
    text: taskInput,
    dateTime: new Date(taskDateTime),
    priority: taskPriority,
    completed: false,
  };

  tasks.push(task);
  renderTasks();
  document.getElementById('taskInput').value = '';
  document.getElementById('taskDateTime').value = '';
}

function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `${task.text} - ${task.priority} - ${task.dateTime.toLocaleString()} 
                    <button onclick="completeTask(${task.id})">Complete</button>`;

    taskList.appendChild(li);
  });
}

function completeTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id);
  if (taskIndex !== -1) {
    const [completedTask] = tasks.splice(taskIndex, 1);
    completedTasks.push(completedTask);
    renderTasks();
    renderCompletedTasks();
  }
}



function saveNote() {
  const note = document.getElementById('noteArea').value;
  if (note) {
    notes.push(note);
    document.getElementById('noteArea').value = '';
    renderNotes();
  }
}

function renderNotes() {
  const savedNotes = document.getElementById('savedNotes');
  savedNotes.innerHTML = '';
  notes.forEach((note, index) => {
    const div = document.createElement('div');
    div.textContent = `${index + 1}. ${note}`;
    savedNotes.appendChild(div);
  });
}
