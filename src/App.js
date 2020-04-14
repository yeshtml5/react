import React from 'react'
//static
import logo from 'static/svg/logo.svg'
import './App.css'

import Main from 'pages/main/'
function App() {
  return (
    <div className="App">
      <Main />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>여행. 여행.</p>
        <h1>2222</h1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
