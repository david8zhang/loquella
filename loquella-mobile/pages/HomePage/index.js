import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import * as actions from '../../actions';
import { Navbar } from '../../components';
import { languages } from './dummy';

class HomePage extends Component {
	/**
	 * Render a bunch of language options
	 * @return {Array} an array of language options that,
	 * when clicked, save the language setting in redux
	 */
	renderLanguages() {
		let onPress = (value) => {
			this.props.setLanguage(value);
			Actions.onboard();
		};
		if (this.props.learn) {
			onPress = (value) => {
				this.props.setLanguage(value);
				Actions.module();
			};
		}
		return languages.map((option) => {
			const { lang, image } = option;
			const langCode = {
				'اللهجة الشامية': 1,
				English: 2
			};
			return (
				<ListItem
					roundAvatar
					onPress={() => onPress(langCode[lang])}
					avatar={image}
					key={lang}
					title={lang}
				/>
			);
		});
	}
	render() {
		console.log('language', this.props.language);
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

const mapStateToProps = (state) => {
	return {
		language: state.language
	};
};

export default connect(mapStateToProps, actions)(HomePage);
