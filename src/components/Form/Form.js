import React from 'react';
import './Form.css'
import data from '../data/data'

const Form = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemeImages, setAllMemeImages] = React.useState(data)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }

  const handleClick = (e) => {
    e.preventDefault();
    getMemeImage()
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    // console.log(meme)
    setMeme(prev => {
      return {
        ...prev, [name]: value
      }
    })
  }

  return (
  <main>
    <div className='form-container'>
      <form>
        <div className='input-container'>
          <input 
          className='top-text' 
          type='text' 
          placeholder='top text' 
          name='topText'
          onChange={handleChange}
          value={meme.topText}
          />
          <input 
          className='bottom-text' 
          type='text' 
          placeholder='bottom text' 
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
          />
        </div>
        <button onClick={handleClick}>Get a New Meme Image</button>
      </form>
    </div>
    <div className="meme">
      <img src={meme.randomImage} className="meme-image" />
      <h2 className="meme-text top">{meme.topText}</h2>
      <h2 className="meme-text bottom">{meme.bottomText}</h2>
    </div>
  </main>
  )
}

export default Form;