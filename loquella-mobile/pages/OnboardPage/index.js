/* eslint-disable global-require */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Divider } from 'react-native-elements';

class OnboardPage extends Component {
	render() {
		const { 
			onboardStyle, 
			contentStyle, 
			studentStyle,
			dividerStyle,
			textStyle,
			imageStyle
		} = styles;
		return (
			<View style={onboardStyle}>
				<View style={contentStyle}>
					<TouchableHighlight onPress={() => Actions.login()}>
						<View style={contentStyle}>
							<Image 
								source={require('../../images/lightbulb.png')}
								style={imageStyle}
							/>
							<Text style={textStyle}>
								I'm a content creator
							</Text>
						</View>
					</TouchableHighlight>
				</View>
				<Divider style={dividerStyle} />
				<View style={studentStyle}>
					<TouchableHighlight onPress={() => Actions.home({ learn: true })}>
						<View>
							<Image 
								source={require('../../images/graduation-cap.png')} 
								style={imageStyle}
							/>
							<Text style={textStyle}>
								I'm a student
							</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const styles = {
	onboardStyle: {
		flexDirection: 'column',
		flex: 1
	},
	contentStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	studentStyle: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	dividerStyle: {
		padding: 2
	},
	textStyle: {
		fontSize: 30
	},
	imageStyle: {
		width: 200,
		height: 200,
		resizeMode: 'contain'
	}
};

export default OnboardPage;
