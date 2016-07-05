import React from 'react';


export default class TodosList extends React.Component {
	render() {
		return (
			<form onSubmit={this.handleCreate.bind(this)}>
				<input type ="text" placeholder="What do I need to do?" ref=
					"createInput" />
				<button>Create</button>
			</form>
		);
	}

	handleCreate(event)	{
		event.preventDefault();

		const createInput = this.refs.createInput;
		const task = createInput.value;

		this.props.createTask(task);
		this.refs.createInput.value = '';

	}

}