import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { Text, TextInput, View } from 'react-native';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	renderInputs() {
		const { inputLabel, inputField } = styles;
		return this.props.inputs.map((input) => {
			const { key, label, secureTextEntry } = input;
			return (
				<View key={key}>
					<Text style={inputLabel}>
						{label}
					</Text>
					<TextInput
						secureTextEntry={secureTextEntry}
						style={inputField}
						value={this.state[key]}
						onChangeText={(text) => this.setState({ [key]: text })}
					/>
				</View>
			);
		});
	}

	renderHandlers() {
		const { buttonStyle } = styles;
		return this.props.handlers.map((handler) => {
			const { onPress, title, backgroundColor } = handler;
			return (
				<Button
					key={title}
					buttonStyle={buttonStyle}
					backgroundColor={backgroundColor}
					title={title}
					onPress={onPress}
				/>
			);
		});
	}

	render() {
		return (
			<View>
				{ this.renderInputs() }
				<View>
					{ this.renderHandlers() }
				</View>
			</View>
		);
	}
}

const styles = {
	inputLabel: {
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		paddingLeft: 5,
		color: '#3B5998',
		fontSize: 15
	},
	inputField: {
		height: 40,
		marginLeft: 20,
		marginRight: 20,
		paddingLeft: 5,
		paddingRight: 5
	},
	buttonStyle: {
		margin: 5
	}
};

Form.defaultProps = {
	inputs: [{
		key: 'username',
		label: 'Username'
	}, {
		key: 'password',
		label: 'Password',
		secureTextEntry: true
	}],
	handlers: [{
		title: 'Log In',
		backgroundColor: '#39AEF8',
		onPress: () => console.log('Log In!')
	}, {
		title: 'Sign In',
		backgroundColor: '#00C853',
		onPress: () => console.log('Sign In!')
	}]
};

export default Form;
