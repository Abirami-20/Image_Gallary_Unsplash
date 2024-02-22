import React, { useState, useEffect } from 'react'
import Gallery from './component/Gallery'
import fetchImg from './component/Unsplash'
import './App.css'
function App() {
  const [images, setImages] = useState([])

  useEffect(() => {
    const imageData = async () => {
      const imageData = await fetchImg()
      setImages(imageData)
    };
    imageData()
  }, [])

  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <Gallery images={images} />
    </div>
  )
}

export default App
