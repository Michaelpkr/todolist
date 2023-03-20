let taskList = []

const AddTaskComponent = () => {
	return(
	<div>
		<span>Task Name: </span>
		<input
			id="task"
			name="task"
			type="text"
		/>
		<button onClick={addsTask}>Add Task</button>
	</div>
	)
}


const addsTask = () => {
	taskList.push(document.getElementById("task").value)
	alert(taskList)
}

export default AddTaskComponent;