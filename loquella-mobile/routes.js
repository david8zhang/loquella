import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { 
	HomePage, 
	LoginPage, 
	OnboardPage,
	ModulePage,
	NewPage,
	QuestionPage,
	ScorePage
} from './pages';

const RouterComponent = () => (
	<Router hideNavBar>
		<Scene 
			key='home'
			component={HomePage}
			style={sceneStyle}
		/>
		<Scene
			key='login'
			component={LoginPage}
			style={sceneStyle}
		/>
		<Scene
			key='onboard'
			component={OnboardPage}
			style={sceneStyle}
		/>
		<Scene
			key='module'
			component={ModulePage}
			style={sceneStyle}
		/>
		<Scene
			key='new'
			component={NewPage}
			style={sceneStyle}
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

const sceneStyle = { paddingTop: 24 };

export default RouterComponent;
