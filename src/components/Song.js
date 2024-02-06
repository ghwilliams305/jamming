import styles from '../resources/css/Song.module.css';

function Song(props) {
    return (
        <div className={styles.background}>
            <h2 className={styles.fontOne}>Failure</h2>
            <p className={styles.fontTwo}>Blue Apollo Music</p>
            <button className={styles.button}>{props.posneg}</button>
        </div>
    );
}

export default Song;