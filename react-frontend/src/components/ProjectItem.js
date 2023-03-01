import React from 'react'

function ProjectItem({project, onProjectDelete}) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/projects/${project.id}`, {
          method: "DELETE",
        })
    
        .then((r) => r.json())
        .then((deletedProject) => onProjectDelete(deletedProject))

        onProjectDelete(project.id)

      }



  return (
    <li>
       <h2> {project.title}</h2>
       <p>Completion (%) : {project.completion}</p>
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