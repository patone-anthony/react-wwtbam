import React, { useState } from "react";
import Timer from "./Timer";
import Score from "./Score";
import QuestionPanelContainer from "./QuestionPanelContainer";
import Question from "./Question";

export default function Game(props) {
  const { startGame, setStartGame, userScore, setUserScore } = props;
  const [runGame, setRunGame] = useState(true);
  const [timer, setTimer] = useState(30);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionTracker, setQuestionTracker] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      {startGame ? (
        <div
          className="flex-questions"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyItems: "center",
              paddingTop: "2rem",
            }}
          >
            <Timer timer={timer} setTimer={setTimer} runGame={runGame} setRunGame={setRunGame} />
            <Score userScore={userScore} />
            <QuestionPanelContainer
              currentIndex={currentIndex}
              questionTracker={questionTracker}
              setQuestionTracker={setQuestionTracker}
            />
          </div>
          <Question
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setUserScore={setUserScore}
            userScore={userScore}
            timer={timer}
            setTimer={setTimer}
            runGame={runGame}
            setRunGame={setRunGame}
            startGame={startGame}
            setStartGame={setStartGame}
            questionTracker={questionTracker}
            setQuestionTracker={setQuestionTracker}
          />
        </div>
      ) : null}
    </div>
  );
}
