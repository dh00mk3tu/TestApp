import "./CSS/App.css";
import "./CSS/GlobalStyles.css";

import ThumbsUp from "./Assets/ThumbsUp.gif";
import QuestionMark from "./Assets/QuestionMark.png";

import React, { useState } from "react";
import { CommonConstant } from "./QandA/QuestionConfig";
import TestComponent from "./QandA/TestComponent";
import ReviewAnswersComponent from "./QandA/ReviewAnswersComponent";

function App() {
  const [QuestionState, setQuestionState] = useState(0);
  const [AnswerState, setAnswerState] = useState([]);
  const IsSet = (data)=>
  {
      if(Array.isArray(data))
      {
          if(data && data.length>0)
          {
              return true
          }
          else
          {
              return false;
          }
      }
      else if(typeof data === 'object' && data !== null)
      {
          if(data && Object.entries(data).length>0)
          {
              return true
          }
          else
          {
              return false;
          }
      }
      else{
          if(data && data!=undefined && data!=null)
          {
              return true
          }
          else
          {
              return false;
          }
      }

      
  }
  const SearchArrOfObj=(Arr2,key,val,ReturnType='single')=>{

    if(IsSet(Arr2) && Array.isArray(Arr2))
    {
        let pos = -1
        const obj = Arr2.filter((p,index) => {
            let ArrVal =  ''
            if(Array.isArray(key))
            {
                //Fot Multi Dimensions eg = SearchArrOfObj(SimilarModels,['MakeSchema','v_make_id'],1)
                ArrVal = p[key[0]];
                for(let i=1;i<key.length;i++)
                {
                    if(IsSet(ArrVal) && IsSet(ArrVal[key[i]]))
                    {
                        ArrVal = ArrVal[key[i]];
                    }
                   
                }
            }
            else{
                ArrVal =  p[key]
            }
            if(ArrVal == val)
            {
                pos = index
            }
            
            return ArrVal == val
           
            })
            if(ReturnType=='arr')
            {
                return [obj[0],pos]
            }
            else{
                return obj[0];
            }
        
    }
    else{
        return {};
    }
  
 }
  const selectedAnswer = (option) => {
    let isMatchObj = SearchArrOfObj(AnswerState,"questionId",QuestionState)
    if(IsSet(isMatchObj)){
      let newAnswerState = AnswerState.map((data)=>{
          if(data.questionId === QuestionState){
            data.answer=option
          }
          return data
      })
      // let newAnswerState = AnswerState.filter(function(obj) {
        // return obj["questionId"] !== QuestionState;
      // }); 
      // newAnswerState.push({"questionId":QuestionState,answer:option})
      setAnswerState(newAnswerState);
    }else{
      let obj = {"questionId":QuestionState,answer:option}
      setAnswerState([...AnswerState,obj])
   
      console.log('option',AnswerState)
    }
   
    // setAnswerState([obj]);
    
   
    
    
  };

  return (
    
    <div className="root-container">
      <div className="root-sub-container ">
        <div className="answer-side-panel margin-all-1em box-shadow-solid">
          <div className="answer-side-panel header">
            <img
              src={ThumbsUp}
              className="profile-image-small"
              alt="thumbsup"
            ></img>
            <p>Review Answers Here:</p>
          </div>

          <div className="answer-side-panel body">
            <ReviewAnswersComponent answers={AnswerState} />
          </div>
        </div>
        <div className="question-card-panel margin-all-1em box-shadow-solid">
          <div className="header padding-top-3em">
            <img
              src={QuestionMark}
              className="profile-image-small"
              alt="thumbsup"
            ></img>
          </div>
          <div className="question-slider">
            <div className="prev-question  box">
              <div className="next-question question-changer">
                <input
                  type="submit"
                  disabled={QuestionState === 0 ? true : false}
                  className="button"
                  value="Prev"
                  onClick={() => setQuestionState(QuestionState - 1)}
                ></input>
              </div>
            </div>
            <div className="question-card box">Attempt Questions Here</div>
            <div className="next-question question-changer">
              <input
                type="submit"
                disabled={QuestionState === 2 ? true : false}
                className="button"
                value="Next"
                onClick={() => setQuestionState(QuestionState + 1)}
              ></input>
            </div>
          </div>
          <div className="questions ">
            <TestComponent
              question={CommonConstant.QuestionConfig[QuestionState]}
              callBack={(option)=>selectedAnswer(option)}
              answerState={SearchArrOfObj(AnswerState,'questionId',QuestionState)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
