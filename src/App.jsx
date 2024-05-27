import React from 'react'
import Header from './components/header'
import Body from './components/body'
import "./fonts/font-icons/css/all.min.css"

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
          <Body />
      </main>
    </div>
  )
}

export default App