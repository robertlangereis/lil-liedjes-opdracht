import React, {Fragment} from 'react'
import './SongList.css'

export default function SongList(props) {
  return props.songs && 
    props.songs.map( songItem =>{
      return (<Fragment>
      <div className="song-row" key={songItem.index}>
      <div className="song-row__item">{songItem.song}</div> 
      <div className="song-row__item">{songItem.artist}</div>
      <div className="song-row__item">{songItem.genre}</div>
      <div className="song-row__item">{songItem.rating}</div>
      </div>
      </Fragment>)
    }
);}