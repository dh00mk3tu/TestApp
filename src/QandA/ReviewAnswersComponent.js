import React from "react";
const ReviewAnswersComponent = (props) => {
  const ReviewAnswers = props.answers;
   
  return (
    <>
      {
        ReviewAnswers && ReviewAnswers.map((answer, index) => {
          return (<>
              {" "}
              Answers #{index +1} <h4>{answer.answer}</h4>
            </>
          );
        })}
    </>
  );
};

export default ReviewAnswersComponent;
