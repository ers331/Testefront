import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetingPhoto() {
  const [id] = useState(21)
  const [commons, setCommons] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:3333/data/${id}`)
      .then(res => {
        setCommons(res.data.common.invited_people)
      })
      .catch(err => {
        console.log(err)
      })
  }, [id])
  console.log(commons)
  return (
    <div>
      {commons[0] &&
        commons.map((invited_people, i) => (
          <div key={i}>
            <p>{invited_people.name && invited_people.name}</p>
            <img src={invited_people.avatar && invited_people.avatar} />
            {!invited_people.confirmed ? 'Não' : 'Sim'}
          </div>
        ))}
    </div>
  )
}

export default DataFetingPhoto
