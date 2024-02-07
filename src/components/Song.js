import styles from '../resources/css/Song.module.css';

function Song(props) {
    const handleButtonPress = () => {
        props.handleButton(props);
    }

    return (
        <div className={styles.background}>
            <h2 className={styles.fontOne}>{props.name}</h2>
            <p className={styles.fontTwo}>{`${props.artist} | Album: ${props.album}`}</p>
            <button 
                className={styles.button}
                onClick={handleButtonPress} >{props.posneg}</button>
        </div>
    );
}

export default Song;