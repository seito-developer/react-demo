import styles from './Loading.module.css';

const Loading = ({ active }) => {
    
    
    return (
        <div className={`${styles.loading} ${active ? styles.isActive : ''}`}>
            <span>〜結果発表〜</span>
       </div>
    )
}

export default Loading;