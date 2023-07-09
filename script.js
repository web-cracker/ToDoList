const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
  
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
  
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskList.appendChild(taskItem);
  
    taskInput.value = '';
  }
});