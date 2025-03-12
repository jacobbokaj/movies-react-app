import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Card({title}) {
  const [count, setCount] = useState(0);
  const [hasLiked,setHasLiked] = useState(false);

  useEffect(() =>{
    console.log(`${title} has been liked: ${hasLiked}`)
  }, [hasLiked]);


  return(
    <div className="card" onClick={() => setCount((prevState) => 
    prevState + 1)}>
      <h2>{title} <br/> {count || null}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
       {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}





function App() {

  return (
    <div className="container">
      <h2>Functional Arrow</h2>
      <Card title="Star Wars" rating={5} isCool={true}/>
      <Card title="Avatar"/>
      <Card title="The Lion King"/>
    </div>
  )
}

export default App
