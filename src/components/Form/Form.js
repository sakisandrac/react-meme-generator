import React from 'react';
import './Form.css'

const Form = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemeImages, setAllMemeImages] = React.useState({});

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data => setAllMemeImages(data.data.memes))
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
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