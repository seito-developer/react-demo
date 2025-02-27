import { useEffect, useState } from 'react';
import styles from './ResultBoard.module.css';
import ReactConfetti from 'react-confetti';

const ResultBoard = ({ maxQuizLen, correctNum }) => {
    const [count, setCount] = useState(false);
    const width = window.innerWidth;
    const height = window.innerHeight;

    useEffect(() => {
        setTimeout(() => {
            setCount(true);
        }, 3000);
    },[])
    
    return (
        <>
        <div className={styles.resultBoard}>
            <span>あなたの正解数は...</span>
            {count && (
                <>
                    <span className={styles.resultBoardHighlight}>
                        {maxQuizLen}問中、{correctNum}問
                    </span>
                    でした！
                </>
            )}
       </div>
       {count && <ReactConfetti
            width={width}
            height={height}
            tweenDuration={4000}
            run={true}
        />
       }
       </>
    )
}

export default ResultBoard;