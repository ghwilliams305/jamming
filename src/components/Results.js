import styles from '../resources/css/SongContainer.module.css'

function Results(props) {
    return (
        <div className={styles.body}>
            <h1 className={styles.title}>Results</h1>
            <hr className={styles.hr} />
            <ul>{props.children}</ul>
        </div>
    );
}

export default Results;