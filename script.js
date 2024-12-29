const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearListBtn = document.getElementById('clearListBtn');

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    li.onclick = function () {
      li.classList.toggle('completed');
    };
    removeBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please enter a task');
  }
}
function clearList() {
  taskList.innerHTML = '';
}
