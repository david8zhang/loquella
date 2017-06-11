/* global require */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableOpacity } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Navbar } from '../../components';

class ModulePage extends Component {
	renderModules() {
		const { moduleStyle } = style;
		return this.props.modules.map((module) => {
			const { 
				author, 
				title, 
				description,
				category, 
				difficulty 
			} = module;
			const SubTitle = (
				<View style={moduleStyle}>
					<TouchableOpacity 
						onPress={() => Actions.question()}
 						style={{ flex: 2, paddingRight: 20 }}
					>
						<View>
							<Text style={{ fontWeight: 'bold' }}>
								{author}
							</Text>
							<Text 
								style={{ 
									fontStyle: 'italic',
									paddingBottom: 5 
								}}
							>
								{category}
							</Text>
							<Text>{description}</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => Actions.question()}
						style={{ padding: 10 }}
					>
						<View>
							<Text>Difficulty</Text>
							<Text style={{ textAlign: 'center', fontSize: 20 }}>
								{difficulty}
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			);
			return (
				<ListItem
					key={title}
					title={title}
					subtitle={SubTitle}
					hideChevron
				/>
			);
		});
	}
	render() {
		console.log('language', this.props.language);
		return (
			<View>
				<Navbar title='Browse Modules' />
				<List>
					{ this.renderModules() }
					{
						this.props.creator &&
						<ListItem
							onPress={() => Actions.new()}
							title='Add a New Module'
							titleStyle={{ textAlign: 'center' }}
							hideChevron
						/>
					}
				</List>
			</View>
		);
	}
}

const style = {
	moduleStyle: {
		paddingLeft: 10,
		paddingTop: 5,
		flexDirection: 'row'
	},
	dividerStyle: {
		padding: 1
	}
};

ModulePage.defaultProps = {
	modules: [{
		author: 'Author 1',
		title: 'Module 1',
		description: 'A sample module used to hold the place of a real module',
		category: 'Samples',
		difficulty: 1
	}, {
		author: 'Author 2',
		title: 'Module 2',
		description: 'A sample module used to hold the place of a real module',
		category: 'Samples',
		difficulty: 1
	}]
};

const mapStateToProps = (state) => (
	{
		language: state.language
	}	
);

export default connect(mapStateToProps, null)(ModulePage);
