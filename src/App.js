import React, {useState} from 'react'

import './App.css'

import background from './assets/wallpaper.jpg'

import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState([])

  const handleAddProject = ()=> {
    const project = `Novo Projeto ${Date.now()}`
    setProjects([...projects,project ])
    console.log(project)
  }
  return (
    <>
      <Header title="Projects"/>
      <img src={background}/>
      <ul>
        {projects.map(project=>(<li key={project}>{project}</li>))}
      </ul>

      <button type="button" onClick={handleAddProject}>Adiciona Projeto</button>
    </>
  )
}

export default App