import React from 'react';

class AddTodo extends React.Component {
	state = {
		title: '',
	}

	handleInput = (e) => {
		this.setState({
			title: e.target.value,
		})
		console.log(this.state.title);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({
			title: '',
		})
	}

	render() {		
		return(
			<div>
				<form style={formStyle} onSubmit={this.handleSubmit}>
					<input type="text" name='title' placeholder="Add to do" style={inputStyle} onChange={this.handleInput} value={this.state.title}/>
					<input type="submit" style={submitStyle} />
				</form>
			</div>
		);
	}
}

const formStyle = {
	display: 'flex',
}

const inputStyle = {
	padding: '5px 5px',
	flexGrow: '8',
}

const submitStyle = {
	padding: '5px 5px',
	flexGrow: '1',
	backgroundColor: '#007bff',
	
	border: 'none',
	color: 'white',
	cursor: 'pointer'
}

export default AddTodo;