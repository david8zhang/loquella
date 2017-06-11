import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { Navbar } from '../../components';
import { languages } from './dummy';

class HomePage extends Component {
	/**
	 * Render a bunch of language options
	 * @return {Array} an array of language options that,
	 * when clicked, save the language setting in redux
	 */
	renderLanguages() {
		let onPress = () => Actions.onboard();
		if (this.props.learn) {
			onPress = () => Actions.module();
		}
		return languages.map((option) => {
			const { lang, image } = option;
			return (
				<ListItem
					roundAvatar
					onPress={onPress}
					avatar={image}
					key={lang}
					title={lang}
				/>
			);
		});
	}
	render() {
		return (
			<View>
				<Navbar title='Loquella' />
				{
					this.props.teach &&
					<Text 
						style={{ 
							padding: 20, 
							fontSize: 20,
							fontWeight: 'bold'
						}}
					>
						I want to teach...
					</Text>
				}
				{
					this.props.learn &&
					<Text 
						style={{ 
							padding: 20, 
							fontSize: 20,
							fontWeight: 'bold'
						}}
					>
						I want to learn...
					</Text>
				}
				<List containerStyle={{ margin: 20 }}>
					{ this.renderLanguages() }
				</List>	
			</View>
		);
	}
}

export default HomePage;
