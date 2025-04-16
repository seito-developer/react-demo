import styles from "./Result.module.css";
import ReactConfetti from "react-confetti";

const Result = ({ maxQuizLen, correctNumLen }) => {

  return (
    <>
      <div className={styles.result}>
        あなたの正解数は...
        <span className={styles.resultHighlight}>
          {maxQuizLen.toString()}問中、{correctNumLen.toString()}問
        </span>
        でした！
      </div>
      <ReactConfetti />
    </>
  );
};

export default Result;
