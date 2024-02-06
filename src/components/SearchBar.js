import styles from '../resources/css/SearchBar.module.css';

function SearchBar(props) {
    const handleChange = ({target}) => {
        props.handleSearch(target.value);
    }

    const handleClick = ({target}) => {
        if(target.value === 'Song Name') {
            props.handleSearch('');
        }
    }

    const handleBlur = ({target}) => {
        if(target.value === '') {
            props.handleSearch('Song Name')
        }
    }

    return (
        <div className={styles.background}>
            <input 
               type='text'
               name='search'
               className={styles.input}
               onChange={handleChange}
               onClick={handleClick}
               onBlur={handleBlur}
               value={props.default}
               placeholder='Song Name' />
            <button className={styles.button}>Seach</button>
        </div>
    )
}

export default SearchBar;