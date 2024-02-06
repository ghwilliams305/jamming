import styles from '../resources/css/Song.module.css';

function Song(props) {
    return (
        <div className={styles.background}>
            <h2 className={styles.fontOne}>{props.name}</h2>
            <p className={styles.fontTwo}>{`${props.artist} | Album: ${props.album}`}</p>
            <button className={styles.button}>{props.posneg}</button>
        </div>
    );
}

export default Song;