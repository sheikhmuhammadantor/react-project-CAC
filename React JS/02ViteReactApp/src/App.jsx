import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2
      className='text-3xl bg-green-600 p-2 m-2 rounded-md'
      >Tailwind CSS</h2>
      <Card userName="Riya" btnText="Click Me" link='https://www.pexels.com/search/hijab%20girl/' imgSrc="https://photosnow.net/wp-content/uploads/2023/12/hijab-girls-dp38.jpg"/>
      <Card userName="Tina" btnText="Visit Me" link='https://unsplash.com/s/photos/hijab-girl' imgSrc="https://e1.pxfuel.com/desktop-wallpaper/267/645/desktop-wallpaper-620-cover-ideas-in-2021-aesthetic-hijab-girl.jpg"/>
    </>
  )
}

export default App
