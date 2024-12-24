
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes').then((res)=>{
      setJokes(res.data)
    }).catch((err)=>{
      console.log(err)
    })


  },[])


  return (
    <>
    <h1>Xtrem and full stack</h1>
    <p>Jokes:{jokes.length}</p>

    {
      jokes.map(joke=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }

    
    </>
  )
}

export default App
