import { useState, useEffect } from "react"
import React from 'react'

function NewProject({onAddProject}) {
  const [project, setProject] = useState("")
  const [completion, setCompletion] = useState("")
  const [comment, setComment ] = useState("")
  const [clientId, setClientId ] = useState("0")
  const [clients, setClients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/clients')
    .then((r)=>r.json())
    .then((clients)=>(setClients(clients)))
    console.log(clients);
    
   
  }, [])
  

  function handleSubmitClick(e) {
    e.preventDefault()

    fetch("http://localhost:9292/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify({
          title: project,
          completion: completion,
          comment: comment,
          client_id: clientId
        }),
    })
    .then((r)=>r.json())
    .then(newProject => {
      onAddProject(newProject)
      setProject("")
      setCompletion("")
      setComment("")
      setClientId(clientId)
    }) 




  }


  return (
  <form classname = "client_submission" onSubmit = {handleSubmitClick}>
  
   <input
    type="text"
    value = {project}
    placeholder = "new project.."
    onChange = {(e) => setProject(e.target.value)}
   />
   <input
    type="text"
    value = {completion}
    placeholder = "completion(percentage)"
    onChange = {(e) => setCompletion(e.target.value)}
   />
   <input
    type="text"
    value = {comment}
    placeholder = "comment"
    onChange = {(e) => setComment(e.target.value)}
   />
   <label className="label">Client Name</label>
   <select onChange = {(e)=> setClientId(e.target.value)}>
          {
            clients.map((client)=><option key = {client.id} value = {client.id}> {client.name} </option>)
   
          }

   </select>
   <button className="new" type = "submit">Add</button>


   



   

  </form>
  )
}

export default NewProject