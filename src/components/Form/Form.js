import React from 'react';
import './Form.css'
import data from '../data/data'

const Form = () => {
  const [image, setImage] = React.useState("https://i.imgflip.com/30b1gx.jpg")

  const handleClick = (e) => {
    e.preventDefault();
    getNewImg()
  }

  const getNewImg = () => {
    setImage(() => {
      const num = Math.floor(Math.random() * data.data.memes.length);
      return data.data.memes[num].url
    })
    
  }

  return (
    <div className='form-container'>
      <form>
        <div className='input-container'>
          <input className='top-text' type='text' placeholder='top text'/>
          <input className='bottom-text' type='text' placeholder='bottom text'/>
        </div>
        <button onClick={handleClick}>Get a New Meme Image</button>
      </form>
      <img className='meme-img' src={image}></img>
    </div>
  )
}

export default Form;