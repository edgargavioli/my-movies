import { useEffect, useState } from 'react'
import Header from './components/header'
import Body from './components/body'

function App() {
  const [response, setResponse] = useState([])

  function handleValues(data) {
    setResponse(data)
  }

  useEffect(() => {
    // Este bloco de código será executado sempre que `response` for alterado
    console.log('Response atualizado:', response);
  }, [response]);

    return (
      <div>
        <Header handleValues={handleValues}/>
        <Body response={response}/>
      </div>
    )
}

export default App
