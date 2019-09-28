import React from 'react';
import './App.scss';
import Navigation from './ui/Navigation';
import routes from './routes';
import Players from './ui/Players';

function App() {
	return (
		<div>
			<Navigation routes={routes.filter(route => route.isNavBar)} />
			<Players />
		</div>
	);
}

export default App;
