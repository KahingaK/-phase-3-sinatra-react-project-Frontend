import React from 'react'
import { useState, useEffect } from 'react'
import ProjectList from '../components/ProjectList'
import Header from '../components/Header'
import NewProject from '../components/NewProject'
import NewClient from '../components/NewClient'
function Home() {
    
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [projects,setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/projects')
        .then((r)=>r.json())
        .then((projects)=>(setProjects(projects)))
        console.log(projects);
      
    }, [])


    function handleDeleteProject(id) {
        const updatedProjects = projects.filter((project) => project.id !== id);
        setProjects(updatedProjects);
      }

    

    
      function handleAddProject(newProject) {
        setProjects([...projects, newProject]);
      }

  return (
    <main className={isDarkMode ? "dark-mode" : ""}>
    <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
    <NewClient/>
    <NewProject onAddProject = {handleAddProject}/>
    <ProjectList
      projects={projects}
      onProjectDelete={handleDeleteProject}
      />
   
     
    
  </main>
  )
}

export default Home