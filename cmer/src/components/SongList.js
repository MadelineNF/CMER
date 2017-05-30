import React, {Component} from 'react'
import Song from './Song';

class Songlist extends Component {
    render() {
        return(
            <div>
                {this.props.playlist.map((playlist, index) => {
                    return (
                        <Song 
                            key={playlist.id} 
                            playlist={playlist} 
                            index={index} 
                            onSongClick={this.props.onSongClick} 
                            handleSongSubmit={this.props.handleSongSubmit}
                            handleSongDelete={this.props.handleSongDelete}
                            handleSongEdit={this.props.handleSongEdit}

                            handleInputArtistChange={this.props.handleInputArtistChange}
                            handleInputSongChange={this.props.handleInputSongChange}
                            handleInputSrcChange={this.props.handleInputSrcChange}

                            artist={this.props.artist}
                            song={this.props.song}
                            src={this.props.src}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Songlist;