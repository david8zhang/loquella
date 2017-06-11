import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ScorePage extends Component {
	constructor(props) {
		super(props);
		this.state = { skipped: props.skipped, 
			correct: props.correct, 
			incorrect: props.incorrect, 
			total: props.index + 1,
			incorrect_qs: props.incorrect_questions,
			correct_qs: props.correct_questions,
			skipped_qs: props.skipped_questions };
	}

	renderSkippedQuestions() {
		return this.state.skipped_qs.map(skippedQ => 
			<Text key={skippedQ} style={{ color: 'blue', textAlign: 'center' }}> 
				Question #{skippedQ} 
			</Text>
		);
	}

	renderIncorrectQuestions() {
		return this.state.incorrect_qs.map(incorrectQ => 
			<Text key={incorrectQ} style={{ color: 'red', textAlign: 'center' }}> 
				Question #{incorrectQ} 
			</Text>
		);
	}

	renderCorrectQuestions() {
		return this.state.correct_qs.map(correctQ =>
			<Text key={correctQ} style={{ color: 'green', textAlign: 'center' }}>
				Question #{correctQ}
			</Text>
		);
	}
	
	render() {
		return (
			<View >
				<Text style={styles.pageHeaderStyle}> Score Page </Text>
				<View>
					<Text style={styles.scoreStyle}>{this.state.correct}/{this.state.total}</Text>
				</View>
				<View>
					<Text style={styles.subHeaderStyle}>#Questions Skipped: {this.state.skipped}</Text>
					{this.renderSkippedQuestions()}
				</View>
				<View>
					<Text style={styles.subHeaderStyle}> #Answered Incorrectly: {this.state.incorrect} </Text>
					{this.renderIncorrectQuestions()}
				</View>
				<View>
					<Text style={styles.subHeaderStyle}> #Answered Correctly: {this.state.correct} </Text>
					{this.renderCorrectQuestions()}
				</View>
				<View>
					<Button
						buttonStyle={{ backgroundColor: 'blue', margin: 20 }} 
						title="TRY AGAIN?"
						onPress={() => Actions.question()}
					/>
				</View>
				<View>
					<Button
						buttonStyle={{ backgroundColor: 'blue', 
						marginTop: 5, 
						marginRight: 20, 
						marginLeft: 20 }} 
						title="BACK TO HOME"
						onPress={() => Actions.home()}
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	questionViewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		paddingTop: 15,
		elevation: 2,
		marginBottom: 5
	},

	answerViewStyle: {
		paddingTop: 40,
		paddingBottom: 40
	},

	subHeaderStyle: {
		fontSize: 25,
		margin: 30,
		textAlign: 'center'
	},

	pageHeaderStyle: {
		fontSize: 42,
		marginTop: 20,
		marginBottom: 10,
		fontWeight: 'bold',
		textAlign: 'center'
	},

	scoreStyle: {
		fontSize: 40,
		margin: 20,
		textAlign: 'center',
		fontWeight: 'bold'
	},

	problemNumberStyle: {
		fontSize: 20,
		textColor: 'red',
		margin: 5
	}

};	

export default ScorePage;
