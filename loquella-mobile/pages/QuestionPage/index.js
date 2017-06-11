import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

class QuestionPage extends Component {
	
	state = { 
		questions: [
			["Which of the following is a noun?"], 
			["Which of the following is a verb?"], 
			["Which of the following is an adjective?"]
		], 
		answers: [
			["house", "run", "over", "fried"], 
			["house", "workplace", "over", "run"], 
			["fast", "run", "fat", "ferari"]
		], 
		index:0, 
		skipped:0, 
		correct:0, 
		incorrect:0, 
		correct_answers: [
			"house", 
			"run", 
			"fat"
		], 
		incorrect_questions: [], 
		correct_questions: [], 
		skipped_questions: []
	};
	
	componentWillMount(){
		//For use later, will pull down info from the backend stuff
	}

	renderQuestion(){
		//Just using a map function to display all of the answers
		console.log(this.state.index);
		curr_question = this.state.questions[this.state.index];
		return curr_question.map(question =>
			<View key={question} style={styles.questionViewStyle}>
				<Text style={styles.textStyle}>{question}</Text>
			</View>
		);
	}

	renderAnswers(){
		curr_answers = this.state.answers[this.state.index];

		buttonStyle = {
			backgroundColor: 'red', 
			borderRadius: 10, 
			margin:10
		}

		return curr_answers.map(answer =>
			<Button
  				raised
  				key={answer}
  				icon={{name: 'home', size: 20}}
  				buttonStyle={buttonStyle}
  				textStyle={{textAlign: 'center'}}
  				title={answer} 
  				onPress={() => {
  						if(this.state.index < this.state.questions.length-1){
	  						if(answer == this.state.correct_answers[this.state.index]){
	  							this.state.correct_questions.push(this.state.index+1);
	  							this.setState({index: this.state.index+1, correct:this.state.correct+1,
	  								correct_questions:this.state.correct_questions})
	  						}else{
	  							this.state.incorrect_questions.push(this.state.index+1);
	  							this.setState({index: this.state.index+1, incorrect:this.state.incorrect+1, 
	  								incorrect_questions:this.state.incorrect_questions});
	  						}
	  					}else{
	  						if(answer == this.state.correct_answers[this.state.index]){
	  							this.state.correct = this.state.correct+1;
	  							this.state.correct_questions.push(this.state.index+1);
	  							Actions.score(this.state);
	  						}else{
	  							this.state.incorrect = this.state.incorrect + 1;
	  							this.state.incorrect_questions.push(this.state.index+1);
	  							Actions.score(this.state);
	  						}

	  						this.state.index = 0;
	  						this.state.incorrect = 0;
	  						this.state.correct = 0;
	  						
	  					}
  					}
  				}
  				/>
		);
	}


	render(){
		return(
				<View>
					<Text style={styles.pageHeaderStyle}>
						Question {this.state.index+1}
					</Text>
					{this.renderQuestion()}

					<View style={styles.answerViewStyle}>
						{this.renderAnswers()}
					</View>

					<Button
						buttonStyle={{backgroundColor: 'blue', margin: 30}} 
						title="SKIP QUESTION!"
						onPress={() => {
								if(this.state.index < this.state.questions.length-1){
									this.state.skipped_questions.push(this.state.index+1);
									this.setState({index: this.state.index+1, 
										skipped_questions: this.state.skipped_questions});
									this.state.skipped = this.state.skipped + 1;
								}else{
									this.state.skipped = this.state.skipped + 1;
									this.state.skipped_questions.push(this.state.index+1)
									Actions.score(this.state);
								}
							}	
						}
						/>
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

	textStyle: {
		fontSize: 20,
		paddingTop: 20,
		paddingBottom: 20
	},

	pageHeaderStyle: {
		fontSize: 30,
		margin:10
	}


};	

export default QuestionPage;