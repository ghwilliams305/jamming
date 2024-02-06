import style from './resources/css/App.module.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Song from './components/Song';
import Playlist from './components/Playlist';
import { useState } from 'react';

function App() {
  const [result, setResult] = useState();
  const [playlist, setPlayList] = useState([]);
  const [searchBar, setSearchBar] = useState('Song Name');

  const handleSeach = (value) => {
    setSearchBar(value);
  }

  return (
    <div className={style.background}>
      <section className={style.cover}>
        <SearchBar 
          default={searchBar}
          handleSearch={handleSeach} />
        <article className={style.article}>
          <Results>
            <Song posneg='+' />
          </Results>
          <Playlist>
            <Song posneg='-' />
          </Playlist>
        </article>
      </section>
    </div>
  );
}

export default App;
