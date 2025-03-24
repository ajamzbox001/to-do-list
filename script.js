const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && taskInput.value.trim() !== '') {
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.innerHTML = `<span>${taskText}</span> <button onclick="completeTask(this)">✔️</button>`;
  taskList.appendChild(taskDiv);
}

function completeTask(button) {
  const task = button.parentElement;
  task.classList.toggle('completed');
}
