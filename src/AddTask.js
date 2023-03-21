let taskList = []

const AddTaskComponent = () => {
	return(
		<div>
			<h2>Task List Creator</h2>
			<input type="text" id="taskInput" placeholder="Enter Task Here"></input>
			<button onClick={addsTask}>Add Task</button>
		</div>
	)
}

const addsTask = () => {
	taskList.push(document.getElementById("taskInput").value)
	console.log(taskList)
}

export default AddTaskComponent