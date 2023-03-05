import React from 'react'

function ProjectItem({project, onProjectDelete}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/projects/${project.id}`, {
          method: "DELETE",
        })
    
        
        onProjectDelete(project.id)

      }



  return (
    <li>
       <h1> {project.title}</h1>
       <h2>Client:{}</h2>
       <p>Completion : {project.completion}%</p>
       <p> Comments : {project.comment}</p>

        <button onClick={handleDeleteClick}>delete
            <span role="img" aria-label="delete">
              🗑
            </span>
          </button>

    </li>
  )
}

export default ProjectItem