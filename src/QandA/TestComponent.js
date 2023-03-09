import React, { useEffect, useState } from "react";

const TestComponent = (props) => {
  const question = props.question;
const answerState = props.answerState
  return (
    <>
      <h3>
        Question #{question.id}: {question.question}
      </h3>
      {question.options.map((option, index) => {
        return (
          <>
            <div className="" onClick={() => props.callBack(option)}>
              <input
                key={index}
                id={question.question+index}
                type="radio"
                name={question.question+"_answer"}
                value={option}
                checked={answerState && answerState.answer == option ? true :false}
              />
              <label for={index}>{option}</label>
            </div>
            <br />
          </>
        );
      })}
    </>
  );
};

export default TestComponent;
