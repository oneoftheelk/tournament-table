import React from 'react';
import style from './App.module.scss';
import routes from './routes';
import Navigation from './ui/Navigation/Navigation';
import Players from './ui/Players/Players';
import Table from './ui/Table/Table';

const App = () => {
	return (
		<div className={style.app}>
            <div>
                <Navigation routes={routes.filter(route => route.isNavBar)} />
                <Players />
            </div>
            <Table />
		</div>
	);
}

export default App;