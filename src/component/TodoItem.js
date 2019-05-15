import React from 'react';

class TodoItem extends React.Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '5px',
			borderBottom: '1px solid #ccc',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none',
		}
	}

	btnStyle = {
		background: '#dc3545',
		color: '#fff',
		border: 'none',
		borderRadius: '25px',
		float: 'right',
		cursor: 'pointer',
		padding: '4px 7px'
	}

	markComplete(e) {
		console.log(this.props);
	}

	render() {
		const { id, title } = this.props.todo;
		return(
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
					{id}. {title}
					<button style={this.btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
				</p>
			</div>
		);
	}
}

export default TodoItem;