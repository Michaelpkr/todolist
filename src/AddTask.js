let taskList = []

const addsTask = () => {
	taskList.push(document.getElementById("taskInput").value)
	console.log(taskList)
	return taskList
}

const AddTaskComponent = () => {
	return(
		<div>
			<h2>Task List Creator</h2>
			<input type="text" id="taskInput" placeholder="Enter Task Here">
			</input>
			<button onClick={addsTask}>Add Task</button>
			<ul>{taskList.map(task =>(<li>{task}</li>))}</ul>
		</div>
	)
}

export default AddTaskComponent