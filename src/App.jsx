import { useState } from 'react'
import Header from './components/header'
import Body from './components/body'

function App() {
  const [response, setResponse] = useState([])
  const [busca, setBusca] = useState("")

    return (
      <div>
        <Header setResponse={setResponse} setBusca={setBusca}/>
        <Body response={busca ? response:"/"}/>
      </div>
    )
}

export default App
