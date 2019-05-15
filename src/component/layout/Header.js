import React from 'react';

function Header() {
	return (
		<header style={headerStyle}>
			<h1>To Do List</h1>
		</header>
	);
}

const headerStyle = {
	textAlign: 'center',
	backgroundColor: '#2980b9',
	color: '#fff',
	padding: '5px 0px',
}

export default Header;