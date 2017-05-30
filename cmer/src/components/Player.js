import React, {Component} from 'react';
import '../App.css';
import Songlist from './SongList';
import AddButton from './addButton.jsx';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
      artist: '',
      song: '',
      src: '',
     
    }
      this.handleInputArtistChange = this.handleInputArtistChange.bind(this);
    this.handleInputSongChange = this.handleInputSongChange.bind(this);
    this.handleInputSrcChange = this.handleInputSrcChange.bind(this);

    this.handleSongSubmit = this.handleSongSubmit.bind(this);
    this.fetchAllPlaylist = this.fetchAllPlaylist.bind(this);
    this.onSongClick = this.onSongClick.bind(this);
  }

  componentDidMount(){
    this.fetchAllPlaylist()
  }
  
  fetchAllPlaylist() {
    fetch('/api/myplaylist')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(json);
        this.setState((prevState) => {
          return {
            playlist: json.songsData.songs,
          }
        })
      })
  }

   handleInputArtistChange(event) {
    this.setState({artist: event.target.value})
  }

  handleInputSongChange(event){
    this.setState({song: event.target.value})
  }

  handleInputSrcChange(event){
    this.setState({src: event.target.value})
  }

    handleSongSubmit(event) {
    event.preventDefault();

        fetch('/api/myplaylist', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        artist: event.target.artist.value,
        song: event.target.song.value,
        src: event.target.src.value,
      }),
    })
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      if (json.songData.songs.id !== undefined) {
        const newSong = {
          id: json.songData.songs.id,
          artist: json.songData.songs.artist,
          song: json.songData.songs.song,
          src: json.songData.songs.src,
        }
        this.setState((prevState) => {
          return {
            playlist: prevState.playlist.concat(newSong),
          }
        })
      } else {
        console.log('error');
      }
    })
  }

  handleSongEdit(event){
    event.preventDefault();
    console.log(event);
    fetch(`/api/myplaylist/${event.target.id.value}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        artist: event.target.artist.value,
        song: event.target.song.value,
        src: event.target.src.value,
      }),
    })
    .then((response) => {
      if (response.status === 200) {
        this.fetchAllPlaylist();
      }
    })
  }

  handleSongDelete(Id) {
    fetch(`/api/myplaylist/${Id}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.status === 200) {
        this.fetchAllPlaylist();
      }
    })
  }

  onSongClick(e) {
  fetch('/api/myplaylist')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(json);
        this.setState((prevState) => {
          return {
            src: json.songsData.songs[e].src,
          }
        })
      })
  }
    render() {
        return(
            <main className='App-player'>
               <iframe className='player' src={this.state.src}>
               </iframe>
               <div className='songlist'>
                    {//<AddButton/>}
                    }
                    <Songlist 
                        playlist={this.state.playlist} 
                        onSongClick={this.onSongClick} 
                        handleSongSubmit={this.handleSongSubmit}
                        handleSongDelete={this.handleSongDelete}
                        handleSongEdit={this.handleSongEdit}

                        handleInputArtistChange={this.handleInputArtistChange}
                        handleInputSongChange={this.handleInputSongChange}
                        handleInputSrcChange={this.handleInputSrcChange}

                        artist={this.state.artist}
                        song={this.state.song}
                        src={this.state.src}
                    />
               </div>
            </main>
        )
    }
}

export default Player;