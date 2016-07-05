import React from 'react';
import CreateToDo from './create-todo';
import TodosList from './todos-list';

const todos = [		
{
	task: 'make React tutorial',
	isCompleted: true
},
{
	task: 'eat dinner',
	isCompleted: true
}
];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos
		};
	}
	render() {
		return (
			<div>
				<h1>React ToDos App</h1>
				<CreateToDo createTask={this.createTask.bind(this)}  />
				<TodosList 
					todos={this.state.todos}

				/>
			</div>
		);
	}

	createTask(task) {
		this.state.todos.push({
			task, 
			isCompleted: false
		});
		this.setState({ todos: this.state.todos });
	}
}