import React, { Component } from 'react';
import {logo} from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link

} from 'react-router-dom'
import Footer from './components/Footer';

import Player from './components/Player';

} from 'react-router-dom';
import Landing from './components/Landing';
import Play from './components/Play';
import Abt from './components/abt'


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

    this.handleSongDelete=this.handleSongDelete.bind(this);

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

  handleSongDelete(id) {
    fetch(`https://warm-reef-44020.herokuapp.com/api/myplaylist/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json;
      })
      .then((responseJson) => {
        if (responseJson.status === 200){
          this.fetchAllPlaylist();
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
        

        <Nav />
        <Player playlist={this.state.playlist} />

        <Footer />

        <Router>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/play" component={Play} />
            <Route path="/about" component={Abt} />
          </main>
      </Router>

      </div>
    );
  }
}

export default App;