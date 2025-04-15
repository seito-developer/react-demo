import styles from "./Result.module.css";
import ReactConfetti from "react-confetti";

const Result = ({ maxQuizLen, correctNumLen }) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <>
      <div className={styles.result}>
        あなたの正解数は...
        <span className={styles.resultHighlight}>
          {maxQuizLen}問中、{correctNumLen}問
        </span>
        でした！
      </div>
      <ReactConfetti
        width={width}
        height={height}
        tweenDuration={5000}
        run={true}
      />
    </>
  );
};

export default Result;
