import React, {useState, useEffect} from 'react'

import './App.css'

import api from './services/api'


import Header from './components/Header'

function App() {
  const [projects, setProjects] = useState([])

  useEffect( ()=>{
    loadData()
  },[])

  async function loadData(){
    const response = await api.get('/projects')
    console.log(response.data)
    setProjects(response.data)
  }

  const handleAddProject = ()=> {
    const project = `Novo Projeto ${Date.now()}`
    setProjects([...projects,project ])
    console.log(project)
  }
  return (
    <>
      <Header title="Projects"/>
      <ul>
        {projects.map(project=>(<li key={project.id}>{project?.title}</li>))}
      </ul>

      <button type="button" onClick={handleAddProject}>Adiciona Projeto</button>
    </>
  )
}

export default App