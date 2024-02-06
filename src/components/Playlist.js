import styles from '../resources/css/SongContainer.module.css';
import moreStyles from '../resources/css/Playlist.module.css';
import { useState } from 'react';

function Playlist(props) {
    const [listName, setListName] = useState('Playlist Name?');

    const handleChange = ({target}) => {
        setListName(target.value);
    }

    const handleClick = ({target}) => {
        if(target.value === 'Playlist Name?') {
            setListName('');
        }
    }

    const handleBlur = ({target}) => {
        if(target.value === '') {
            setListName('Playlist Name?');
        }
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
               value={listName} />
            <hr className={styles.hr} />
            <ul>{props.children}</ul>
        </div>
    );
}

export default Playlist;