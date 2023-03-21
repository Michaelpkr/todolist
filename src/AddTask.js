import { useState } from 'react';

const AddTaskComponent = () => {
	const [taskList, setTaskList] = useState();

	const handleClick = () => {
		setTaskList(taskList.push(document.getElementById("taskInput").value))
	}

	return(
		<div>
			<h2>Task List Creator</h2>
			<input type="text" id="taskInput" placeholder="Enter Task Here">
			</input>
			<button onClick={handleClick}>Add Task</button>
		</div>
	)
}

export default AddTaskComponent