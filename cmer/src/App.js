import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Footer from './components/Footer';

import Player from './components/Player';

class App extends Component {
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

  render() {
    return (

      <div className="App">
        {//<div className="App-header">
          //<img src={logo} className="App-logo" alt="logo" />
          //<h2>Welcome to React</h2>
              // </div>}
        }
        <Nav/>
        <Player 
          playlist={this.state.playlist} 
          handleSongSubmit={this.handleSongSubmit}

          handleInputArtistChange={this.handleInputArtistChange}
          handleInputSongChange={this.handleInputSongChange}
          handleInputSrcChange={this.handleInputSrcChange}

          artist={this.state.artist}
          song={this.state.song}
          src={this.state.src}
        />
        
        <Footer />
      </div>
    );
  }
}

export default App;