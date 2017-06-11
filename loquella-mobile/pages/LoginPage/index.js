import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Image } from 'react-native';
import { Form } from '../../components';

class LoginPage extends Component {
	render() {
		const handlers = [{
			title: 'Log In',
			backgroundColor: '#39AEF8',
			onPress: () => Actions.module({ creator: true })
		}, {
			title: 'Sign In',
			backgroundColor: '#00C853',
			onPress: () => Actions.module({ creator: true })
		}];
		const { imageStyle, imageWrapperStyle } = styles;
		return (
			<View>
				<View style={imageWrapperStyle}>
					<Image
						style={imageStyle}
						source={require('../../images/logo.png')}
					/>
				</View>
				<Form handlers={handlers} />
			</View>
		);
	}
}

const styles = {
	imageStyle: {
		height: 300,
		width: 300,
		resizeMode: 'contain',
	},
	imageWrapperStyle: {
		alignItems: 'center'
	}
};

export default LoginPage;
