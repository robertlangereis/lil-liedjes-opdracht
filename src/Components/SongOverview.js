import React, { Component } from 'react';
import SongForm from './SongForm/SongForm'
import SongList from './SongList/SongList'
import './SongOverview.css'


class SongOverview extends Component {
  
  constructor() {
    super()
    this.state = 
    {
      songs: []
    }
    
  }

  addSong = (song) => {
    this.setState({songs: [...this.state.songs, song] })
  }

  render() {
    console.log(this.state.songs, "this.state.songs")
    return (
      <div>
          <SongForm addSong={this.addSong}/>
          <div className="song-header">  
        <div className="song-row__item">Song</div>
        <div className="song-row__item">Artist</div>
        <div className="song-row__item">Genre</div>
        <div className="song-row__item">Rating</div>
        </div>
        <div className="song-list">
          <SongList songs={this.state.songs}/>
          </div>
      </div>
    );
  }
}

export default SongOverview;
