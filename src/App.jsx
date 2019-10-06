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
                    <Col lg='4'><ComposedPlayers /></Col>
                    <Col lg='8' className={style.table}><ComposedTable /></Col>
                </Row>
            </Container>
		</div>
	);
});