
import './CSS/App.css';
import './CSS/GlobalStyles.css';

import ThumbsUp from './Assets/ThumbsUp.gif';

function App() {
  return (
    <div className="root-container">
      <div className="root-sub-container ">  
        <div className="answer-side-panel margin-all-1em box-shadow-solid">
          <div className="answer-side-panel header">
            <img src={ThumbsUp} className="profile-image-small" alt="thumbsup"></img>
            <p>Review Answers Here:</p>

          </div>

          <div className="answer-side-panel body">
            <div className="answer-1 padding-all-1em"> anirudh </div>
            <div className="answer-1 padding-all-1em"> anirudh </div>
            <div className="answer-1 padding-all-1em"> anirudh </div>
            <div className="answer-1 padding-all-1em"> anirudh </div>
          </div>
        </div>
        <div className="question-card-panel margin-all-1em box-shadow-solid">
          <div className="header padding-top-3em">
            image
          </div>
          <div className="question-slider">
            <div className="prev-question box">prev</div>
            <div className="question-card box">Attempt Questions Here</div>
            <div className="next-question box">next</div>
          </div>
          <div className="questions ">
            Question: What is the best soup?
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
