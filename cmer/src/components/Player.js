import React, {Component} from 'react';
import '../App.css';
import Songlist from './SongList';
import AddButton from './addButton.jsx';

class Player extends Component {
    constructor(props) {
    super(props);
    this.state = {
      src: '',
     
    }
this.onSongClick = this.onSongClick.bind(this);
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
                        playlist={this.props.playlist} 
                        onSongClick={this.onSongClick} 
                        handleSongSubmit={this.props.handleSongSubmit}

                        handleInputArtistChange={this.props.handleInputArtistChange}
                        handleInputSongChange={this.props.handleInputSongChange}
                        handleInputSrcChange={this.props.handleInputSrcChange}

                        artist={this.props.artist}
                        song={this.props.song}
                        src={this.props.src}
                    />

                    <Songlist playlist={this.props.playlist} onSongClick={this.onSongClick} handleSongDelete={this.props.handleSongDelete}/>

               </div>
            </main>
        )
    }
}

export default Player;