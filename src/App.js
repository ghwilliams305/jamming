import style from './resources/css/App.module.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Song from './components/Song';
import Playlist from './components/Playlist';
import { useEffect, useState } from 'react';
import Spotify from './resources/js/spotify';

function App() {
  const [result, setResult] = useState([]);
  const [playlist, setPlayList] = useState([]);
  const [searchBar, setSearchBar] = useState('Song Name');
  const [listName, setListName] = useState('Playlist Name?');

  useEffect(() => {
    if(searchBar && searchBar !== 'Song Name') {
      const searchResults = Spotify.search(searchBar);
      setResult(searchResults);
    }
  }, [searchBar]);

  const handleSeach = (value) => {
    setSearchBar(value);
  }

  const handleNaming = (value) => {
    setListName(value);
  }

  const handleButton = songProps => {
    const songData = {
      artist: songProps.artist,
      album: songProps.album,
      name: songProps.name,
      uri: songProps.uri
    }

    if(songProps.posneg === '+') {
      setPlayList(prev => {
        if(!prev.some(song => song.name === songData.name)) {
          return [songData, ...prev];
        } else {
          return [...prev];
        }
      });
    } else {
      setPlayList(prev => prev.filter(song => song.name !== songData.name));
    }
  }

  const handleSave = name => {
    const uris = [];

    for(let x of playlist) {
      uris.push(x.uri);
    }

    setPlayList([]);

    Spotify.savePlaylist(listName, uris)
  }

  return (
    <div className={style.background}>
      <section className={style.cover}>
        <SearchBar 
          default={searchBar}
          handleSearch={handleSeach} />
        <article className={style.article}>
          <Results>
            
            {`${searchBar} => ${result}`}
          </Results>
          <Playlist 
            handleSave={handleSave}
            handleNaming={handleNaming}
            name={listName}>
          {playlist.map(song => (
              <Song 
                posneg='-'
                artist={song.artist}
                album={song.album}
                name={song.name}
                uri={song.uri}
                handleButton={handleButton} />
            ))}
          </Playlist>
        </article>
      </section>
    </div>
  );
}

export default App;
/*
(typeof result === 'string' || !result) ? <p>Loading</p> : result.map(song => (
  <Song 
    posneg='+'
    artist={song.artist}
    album={song.album}
    name={song.name}
    uri={song.uri}
    handleButton={handleButton} />
))
*/