import styles from './Result.module.css';
import ReactConfetti from 'react-confetti';

const Result = ({ maxQuizLen, correctNum }) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    return (
        <>
            <div className={styles.result}>
                あなたの正解数は...
                <span className={styles.resultHighlight}>
                    {maxQuizLen}問中、{correctNum}問
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
    )
}

export default Result;