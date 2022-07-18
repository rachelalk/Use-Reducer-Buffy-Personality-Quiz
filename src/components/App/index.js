import "./App.css";
import QuestionDisplay from "../QuestionDisplay";
import ResultsDisplay from "../ResultsDisplay";
import { questionData } from "../../libs/questionData";
import { useState } from "react";
import { useReducer } from "react";
import Logo from "./Logo";

const initialState = { quizResults: [] };

function reducer(userAnswers, action) {
	switch (action.type) {
		case "ADD_ANSWER":
			const answer = action.payload;
			let updatedUserAnswers = { quizResults: [...userAnswers.quizResults, answer] };

			return updatedUserAnswers;

		case "RESET_ANSWERS":
			return { quizResults: [] };

		default:
			return userAnswers;
	}
}

function App() {
	const [userAnswers, dispatch] = useReducer(reducer, initialState);
	const [result, setResult] = useState("...pending");
	const [questionNumber, setQuestionNumber] = useState(0);
	console.log(userAnswers);

	function handleAnswerClick(choiceId) {
		console.log(`handleAnswerClick ran, user clicked choice "${choiceId}"`);
		// TODO: Write your code for step 5 here!
		dispatch({ type: "ADD_ANSWER", payload: choiceId });

		setQuestionNumber(questionNumber + 1);
		//dispatch type: ADD_ANSWER
		//take in {answer:choiceId}
	}

	function handleResetButtonClick() {
		// TODO: Write your code for step 6 here!
		dispatch({ type: "RESET_ANSWERS" });
		setQuestionNumber(0);
	}

	function calculateResults() {
		// TODO: Write your code for step 7 here!
		console.log(userAnswers);
		let newArray = [...userAnswers.quizResults];
		console.log(newArray);
		function mode(arr) {
			return arr
				.sort(
					(a, b) =>
						arr.filter((v) => v === a).length -
						arr.filter((v) => v === b).length
				)
				.pop();
		}

		let answer = mode(newArray);
		console.log(answer);
		setResult(answer);
	}

	if (questionNumber <= 4) {
		return (
			<main className="app">
				<div className="page">
					<Logo
						className="buffyLogo"
						src={
							"https://www.logolynx.com/images/logolynx/ed/ed0d877989cf69c44a9e2558371450a9.png"
						}
						alt="Buffy Logo"
					></Logo>
					<h1>Personality Quiz</h1>
					<h3>Question {questionNumber + 1}</h3>
					<QuestionDisplay
						key={questionData[questionNumber].questionId}
						question={questionData[questionNumber].questionText}
						choices={questionData[questionNumber].choices}
						handleAnswerClick={handleAnswerClick}
					/>
				</div>
			</main>
		);
	} else {
		return (
			<main className="app">
				<div className="page">
						<Logo
							src={
								"https://www.logolynx.com/images/logolynx/ed/ed0d877989cf69c44a9e2558371450a9.png"
							}
							alt="Buffy Logo"
						></Logo>
					<button onClick={calculateResults}>Calculate results!</button>
					<ResultsDisplay result={result} />
					<button onClick={handleResetButtonClick}>Reset results!</button>
				</div>
			</main>
		);
	}
}

export default App;
