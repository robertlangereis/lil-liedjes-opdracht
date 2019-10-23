import React, { Component, Fragment } from 'react'
import './SongForm.css'

class SongForm extends Component {
  constructor () {
    super()
    this.state = {
      song: '',
      artist: '',
      rating: null,
      genre: ''
    }
  }

  handleChange = e => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }

  handleSubmit = event => {
    event.preventDefault()
    if (
      this.state.song !== '' &&
      this.state.artist !== '' &&
      this.state.genre !== ''
    ) {
      this.props.addSong(this.state)
    } else return <h2>Please enter all fields</h2>
  }

  render () {
    return (
      <Fragment>
        <h2 className='title'>Winc Lil' Liedjeslijst</h2>
        <form className='song-form'>
          <input
            className='song-row__item song-form__field'
            type='text'
            placeholder='Song'
            name='song'
            value={this.state.song}
            onChange={this.handleChange}
          />
          <input
            className='song-row__item song-form__field'
            type='text'
            placeholder='Artist'
            name='artist'
            value={this.state.artist}
            onChange={this.handleChange}
          />
          <select
            className='song-row__item song-form__dropdown'
            type='text'
            placeholder='Genre'
            name='genre'
            value={this.state.genre}
            onChange={this.handleChange}
          >
            <option />
            <option>Rock</option>
            <option>Jazz</option>
            <option>Pop</option>
          </select>
          <select
            className='song-row__item song-form__dropdown'
            type='number'
            placeholder='Rating'
            name='rating'
            value={this.state.rating !== null ? this.state.rating : 1}
            onChange={this.handleChange}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button className='btn' onClick={this.handleSubmit}>
            Add Song
          </button>
        </form>
      </Fragment>
    )
  }
}

export default SongForm
