import React from 'react';
import style from './App.module.scss';
// import routes from './routes';
// import Navigation from './ui/Navigation/Navigation';
import { ComposedPlayers } from './ui/Players/Players';
import { ComposedTable } from './ui/Table/Table';

export const App = React.memo(() => {
	return (
		<div className={style.app}>
            <div>
                {/* <Navigation routes={routes.filter(route => route.isNavBar)} /> */}
                <ComposedPlayers />
            </div>
            <ComposedTable />
		</div>
	);
});