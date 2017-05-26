
import React, {Component} from 'react';
import '../App.css';


class Song extends Component {
     constructor(props){
    super(props);
    this.state = {
      isBeingAdded: false,
    }
    
  }

  



  renderAddForm() {
    return (
      <div id="AddForm">
       <form onSubmit = {(event) => {
           this.props.handleSongSubmit(event);
           this.setState({isBeingAdded: false});
        }}
         >
        <input
            name='artist' 
            type='text' 
            value={this.props.artist}
            placeholder='Artist'
            onChange={this.props.handleInputArtistChange}
        />
        <input 
            name='song'
            type='text' 
            value={this.props.song}
            placeholder='Song'
            onChange={this.props.handleInputSongChange}
        />
        <input
            name='src' 
            type='text'
            value={this.props.src} 
            placeholder='link'
            onChange={this.props.handleInputSrcChange}
        />
        <button>save</button>
       </form>
      </div>
    );
  }

    renderPlaylist() {
        return(
            <div className='songLi'>
                <button className='addSongBtn'onClick={()=> {
                    this.setState({isBeingAdded: true})
                }}>add song</button>
                <div>
                <button className='songs' onClick={() => {this.props.onSongClick(this.props.index)}}>
                    <h4>{this.props.playlist.song}</h4>
                    <p>{this.props.playlist.artist}</p>
                </button>
                
                </div>
            </div>
        )
    }



    render(){
        if(this.state.isBeingAdded === false) {
            return this.renderPlaylist();
        }else {
            return this.renderAddForm();
        }


    }
}


export default Song;