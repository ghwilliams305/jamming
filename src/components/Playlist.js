import styles from '../resources/css/SongContainer.module.css';
import moreStyles from '../resources/css/Playlist.module.css';
import { useState } from 'react';

function Playlist(props) {
    const handleChange = ({target}) => {
        props.handleNaming(target.value);
    }

    const handleClick = ({target}) => {
        if(target.value === 'Playlist Name?') {
            props.handleNaming('');
        }
    }

    const handleBlur = ({target}) => {
        if(target.value === '') {
            props.handleNaming('Playlist Name?');
        }
    }

    const handleSave = () => {
        props.handleSave(props.name);
    }

    return (
        <div className={styles.body}>
            <input 
               type='text'
               name='playlist_name'
               placeholder='Playlist Name?'
               className={moreStyles.input}
               onChange={handleChange}
               onClick={handleClick}
               onBlur={handleBlur}
               value={props.name} />
            <hr className={styles.hr} />
            <ul>{props.children}</ul>
            <button 
                className={moreStyles.button} 
                onClick={handleSave}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;