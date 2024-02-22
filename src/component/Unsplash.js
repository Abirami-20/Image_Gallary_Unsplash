const BASE_URL = 'https://api.unsplash.com'
const ACCESS_KEY = 'aYTqXeMNC5rwbobCkQILQK5tUUp6WB9ai3Xdp6JHa1o'
const fetchImg = async () => {
  
    const response = await fetch(`${BASE_URL}/photos/random?count=10&client_id=${ACCESS_KEY}`)
    const imageData = await response.json()
    return imageData
  
}

export default fetchImg
