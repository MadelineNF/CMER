import React, {Component} from 'react';
import Nav from './Navigation';
import Player from './Player';
import Footer from './Footer';
import '../App.css';
import App from '../App.js'

class Play extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
    }
    this.handleSongDelete=this.handleSongDelete.bind(this);
  }
  componentDidMount(){
    this.fetchAllPlaylist()
  }

  fetchAllPlaylist() {
    fetch('https://warm-reef-44020.herokuapp.com/api/myplaylist')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(json);
        this.setState((prevState) => {
          return {
            playlist: json.songsData,
          }
        })
      })
  }

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
        return(
        <div>
          <Nav/>
          <Player playlist={this.state.playlist} handleSongDelete={this.handleSongDelete}/>
          <Footer />
        </div>
        )
    }
}

export default Play;