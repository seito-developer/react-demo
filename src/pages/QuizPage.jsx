import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/constants";

function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const  [answerLogs, setAnswerLogs] = useState([]); //boolean[]
  const navigate = useNavigate();
  const MAX_QUIZ_LEN = quizData.length;

  const handleButton = (clickedIndex) => {
    // 正誤判定
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswerLogs((prev) => [...prev, true])
    } else {
      setAnswerLogs((prev) => [...prev, false])
    }

    setQuizIndex(quizIndex + 1);
  };

  useEffect(() => {
    if (MAX_QUIZ_LEN === answerLogs.length) {
      const correctNum = answerLogs.filter(answer => answer === true);
      navigate(ROUTES.RESULT, {
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length,
        },
      });
    }
  }, [MAX_QUIZ_LEN, navigate, answerLogs])

  return (
    <>
      {quizData[quizIndex] && <Display>{`Q.${quizIndex + 1} ${quizData[quizIndex].question}`}</Display>}
      <br />
      {quizData[quizIndex] && quizData[quizIndex].options.map((option, index) => {
        return (
          <Button key={`option-${index}`} onClick={() => handleButton(index)}>
            {option}
          </Button>
        );
      })}
    </>
  );
}

export default QuizPage;
