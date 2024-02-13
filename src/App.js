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
    name: 'Smothering',
    uri: 'kdsjgfhos'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Internal Flame',
    name: 'Overpower',
    uri: 'hsgljk'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Star Cycle',
    name: 'Flared',
    uri: 'iuyhas',
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Internal Flame',
    name: 'Spark',
    uri: 'poivbn',
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Star Cycle',
    name: 'Remnant',
    uri: 'oiygnmiuyg'
  },
  {
    artist: 'Blue Apollo Music',
    album: 'Star Cycle',
    name: 'Birth',
    uri: 'ertyujnbv'
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

    const toSend = {
      playlist: name,
      uri: uris
    }
    return toSend;
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
                uri={song.uri}
                handleButton={handleButton} />
            ))}
          </Results>
          <Playlist handleSave={handleSave}>
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
