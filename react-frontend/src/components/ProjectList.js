import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList({projects,onProjectDelete}) {


  return (
        <div className="list">
      <ul>
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            project={project}
            onProjectDelete={onProjectDelete}
          />
        ))}
      </ul>
    </div>
  )
}

export default ProjectList