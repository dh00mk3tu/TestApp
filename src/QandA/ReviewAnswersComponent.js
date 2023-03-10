import React from "react";
const ReviewAnswersComponent = (props) => {
  const ReviewAnswers = props.answers;

  return (
    <>
      {ReviewAnswers &&
        ReviewAnswers.map((answer, index) => {
          return (
            <>
              <div className="answer">
                <b>Answer {index + 1}: </b>  {answer.answer}
              </div>
            </>
          );
        })}
    </>
  );
};

export default ReviewAnswersComponent;
