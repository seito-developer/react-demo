import styles from './Loading.module.css';

const Loading = ({ active }) => {
    
    
    return (
        <div className={`${styles.loading} ${active ? styles.isActive : ''}`}>
            〜結果発表〜
       </div>
    )
}

export default Loading;