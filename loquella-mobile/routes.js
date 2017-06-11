import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { HomePage, LoginPage, QuestionPage, ScorePage } from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene 
			key='home'
			component={HomePage}
			style={{ paddingTop: 24 }}
		/>
		<Scene
			key='login'
			component={LoginPage}
			style={{ paddingTop: 24 }}
		/>
		<Scene
			key='question'
			component={QuestionPage}
			style={{ paddingTop: 24 }}
		/>
		<Scene
			key='score'
			component={ScorePage}
			style={{ paddingTop: 24 }}
		/>
	</Router>
);

export default RouterComponent;
