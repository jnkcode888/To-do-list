function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabName).style.display = 'block';
}

document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const dateTimeInput = document.getElementById('dateTimeInput');
    const goalInput = document.getElementById('goalInput');
    
    const taskText = taskInput.value.trim();
    const dateTimeText = dateTimeInput.value.trim();
    const goalText = goalInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${taskText}</strong><br>${dateTimeText ? "Due: " + dateTimeText : ""}<br>${goalText ? "Goal: " + goalText : ""}`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeBtn);
        document.getElementById('tasks').appendChild(li);
        taskInput.value = ''; // Clear the input
        dateTimeInput.value = ''; // Clear the date/time input
        goalInput.value = ''; // Clear the goal input
    }
});
