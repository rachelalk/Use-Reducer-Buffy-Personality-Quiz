import React from "react";
import AnswerChoice from "../AnswerChoice";

function QuestionDisplay({ question, choices, handleAnswerClick }) {
  return (
    <article>
      <h3>{question}</h3>
      <ol type="a">
        {choices.map((choice) => (
          <AnswerChoice
            key={choice.choiceId}
            answer={choice.choiceText}
            handleAnswerClick={() => handleAnswerClick(choice.choiceId)}
          />
        ))}
      </ol>
    </article>
  );
}

export default QuestionDisplay;
