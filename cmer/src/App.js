import React, { Component } from 'react';
<<<<<<< HEAD
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,  } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
=======
import {logo} from './logo.svg';
import './App.css';
>>>>>>> a1044550e0b4e28d822bfa4a4c0c40cd52e073db
import {
  BrowserRouter as Router,
  Route,
  Link
<<<<<<< HEAD
} from 'react-router-dom';
=======

} from 'react-router-dom'
import Footer from './components/Footer';
>>>>>>> a1044550e0b4e28d822bfa4a4c0c40cd52e073db

import Footer from './components/Footer';
import About from './components/About';
import Player from './components/Player';
import Landing from './components/Landing';

<<<<<<< HEAD


class App extends Component {
  
=======
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
>>>>>>> a1044550e0b4e28d822bfa4a4c0c40cd52e073db

  render() {
    return (
    <Router>
      <div className="App">
<<<<<<< HEAD
        <Navbar inverse collapseOnSelect className="Navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CMER Playlist</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav">
            <NavItem><Link to="/">Home</Link></NavItem>
            <NavItem eventKey={2} ><Link to="/about">About</Link></NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem><Link to="/play">Player</Link></NavItem>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>  

          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/play" component={Player} />
            <Route path="/about" component={About} />
          </main>
     
=======


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
>>>>>>> a1044550e0b4e28d822bfa4a4c0c40cd52e073db
        
        <Footer />

        <Router>
          <main>
            <Route exact path="/" component={Landing} />
            <Route path="/play" component={Play} />
            <Route path="/about" component={Abt} />
          </main>
      </Router>

      </div>
      </Router>
    );
  }
}

export default App;