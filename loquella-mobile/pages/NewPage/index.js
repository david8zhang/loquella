import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, TextInput, Text } from 'react-native';
import { Divider, Button, List, ListItem } from 'react-native-elements';
import { Navbar } from '../../components';

class NewPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			problem: '',
			numOptions: 1
		};
	}
	renderOptions() {
		const options = [];
		const { optionsStyle } = styles;
		for (let index = 0; index < this.state.numOptions; index++) {
			options.push(
				<View key={index} style={optionsStyle}>
					<Text>{`Option ${index + 1}`}</Text>
					<TextInput
						style={{ 
							height: 40, 
							paddingTop: 10, 
							paddingBottom: 15, 
							paddingLeft: 5 
						}}
						onChange={(value) => this.setState({ [`option${index}`]: value })}
					/>
				</View>
			);
		}
		return options;
	}
	render() {
		console.log('language', this.props.language);
		const { problemStyle, answerStyle, buttonGroupStyle } = styles;
		return (
			<View>
				<Navbar title='New Module' />
				<View style={problemStyle}>
					<Text style={{ fontWeight: 'bold', paddingLeft: 2 }}>
						Problem
					</Text>
					<TextInput
						style={{ 
							height: 80, 
							paddingTop: 10,
							paddingBottom: 15,
							paddingLeft: 5
						}}
						onChange={(problem) => this.setState({ problem })}
						numberOfLines={4}
						multiline
					/>
				</View>
				{ this.renderOptions() }
				<List>
					<ListItem
						title='Add new option'
						titleStyle={{ textAlign: 'center' }}
						onPress={() => this.setState({ numOptions: this.state.numOptions + 1 })}
					/>
				</List>
				<Divider />
				<View style={answerStyle}>
					<Text style={{ fontWeight: 'bold', paddingLeft: 2 }}>
						Answer
					</Text>
					<TextInput 
						style={{ 
							height: 40,
							paddingTop: 10,
							paddingBottom: 15,
							paddingLeft: 5
						}}
						onChange={(solution) => this.setState({ solution })}
					/>
				</View>
				<Button
					style={{ marginTop: 10 }}
					title='Publish Module'
					backgroundColor='#1565C0'
					onPress={() => Actions.module({ creator: true })}
				/>
			</View>
		);
	}
}

const styles = {
	problemStyle: {
		margin: 10
	},
	answerStyle: {
		margin: 10
	},
	optionsStyle: {
		margin: 10
	},
	buttonGroupStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	}
};

const mapStateToProps = (state) => (
	{
		language: state.language
	}
)

export default connect(mapStateToProps, null)(NewPage);
