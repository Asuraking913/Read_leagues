import React from 'react'
import Header from './../Landingpage/header'
import Body from './../Landingpage/body'
import Foot from './../Landingpage/footer'
import BodyHead from './../Landingpage/bodyHead'
import Loginpage from './../pages/login'

function Land() {
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

export default Land