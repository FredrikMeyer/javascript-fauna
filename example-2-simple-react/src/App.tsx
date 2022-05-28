import React from "react"

function Button() {
  const [n, setN] = React.useState(0)

  return <button onClick={() => setN(n + 1)}>
      I have been clicked {n} times.
  </button>
}

function App() {
  return (
    <main>
        <h1>Some Header</h1>
        <Button />
        <Button />
    </main>
  )
}

export default App
