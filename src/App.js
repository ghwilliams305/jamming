import style from './resources/css/App.module.css';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import Song from './components/Song';
import Playlist from './components/Playlist';
import { useState } from 'react';

const mockSongs = [
  {
    artist: 'Blue Apollo Music',
    album: 'Internal Flame',
    name: 'Smothering'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Internal Flame',
    name: 'Overpower'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Star Cycle',
    name: 'Flared'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Internal Flame',
    name: 'Spark'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Star Cycle',
    name: 'Remnant'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Star Cycle',
    name: 'Birth'
  }
];


function App() {
  const [result, setResult] = useState(mockSongs);
  const [playlist, setPlayList] = useState([]);
  const [searchBar, setSearchBar] = useState('Song Name');

  const handleSeach = (value) => {
    setSearchBar(value);
  }

  const handleButton = songProps => {
    const songData = {
      artist: songProps.artist,
      album: songProps.album,
      name: songProps.name
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

  return (
    <div className={style.background}>
      <section className={style.cover}>
        <SearchBar 
          default={searchBar}
          handleSearch={handleSeach} />
        <article className={style.article}>
          <Results>
            {result.map(song => (
              <Song 
                posneg='+'
                artist={song.artist}
                album={song.album}
                name={song.name}
                handleButton={handleButton} />
            ))}
          </Results>
          <Playlist>
          {playlist.map(song => (
              <Song 
                posneg='-'
                artist={song.artist}
                album={song.album}
                name={song.name}
                handleButton={handleButton}  />
            ))}
          </Playlist>
        </article>
      </section>
    </div>
  );
}

export default App;
