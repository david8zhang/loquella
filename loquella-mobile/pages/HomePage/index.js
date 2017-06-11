import React, { Component } from 'react';
import { View } from 'react-native';
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
		return languages.map((option) => {
			const { lang, image } = option;
			return (
				<ListItem
					roundAvatar
					onPress={() => Actions.login()}
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
				<List containerStyle={{ margin: 20 }}>
					{ this.renderLanguages() }
				</List>	
			</View>
		);
	}
}

export default HomePage;
