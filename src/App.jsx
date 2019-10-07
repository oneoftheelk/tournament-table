import React from 'react';
import style from './App.module.scss';
// import routes from './routes';
// import Navigation from './ui/Navigation/Navigation';
import { ComposedPlayers } from './ui/Players/Players';
import { ComposedTable } from './ui/Table/Table';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const App = React.memo(() => {
	return (
		<div className={style.app}>
            <Container>
                <Row>
                    <Col xl='4' lg='12'><ComposedPlayers /></Col>
                    <Col xl='8' lg='12' className={style.table}><ComposedTable /></Col>
                </Row>
            </Container>
		</div>
	);
});