import React from 'react'
import Header from './components/header'
import Body from './components/body'
import "./fonts/font-icons/css/all.min.css"
import Foot from './components/footer'

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
          <Body />
      </main>
      <footer>
      <Foot />
      </footer>
    </div>
  )
}

export default App