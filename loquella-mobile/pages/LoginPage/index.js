import React, { Component } from 'react';
import { View } from 'react-native';
import { Navbar } from '../../components';

class LoginPage extends Component {
	render() {
		return (
			<View>
				<Navbar title='Login' />
			</View>
		);
	}
}

export default LoginPage;
