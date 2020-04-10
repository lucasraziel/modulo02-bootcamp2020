import React from 'react'

import Header from './components/Header'

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Project</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </Header>
    </>
  )
}

export default App