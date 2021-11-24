import React, { useState, useEffect } from 'react'
import incicleLogo from '../resurces/incicleLogo.png'
import axios from 'axios'
import '../styles/header.css'

export function Header() {
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
    <>
      <div className='header'>
        <div className='logo'>
          <img src={incicleLogo} alt='logo' />
        </div>
        <div>
          {commons[0] &&
            commons.map((invited_people, i) => (
              <div key={i} className='user'>
                <img
                  src={invited_people.avatar && invited_people.avatar}
                  alt='foto'
                  style={{
                    width: '45px',
                    height: '42px',
                    borderRadius: '50%',
                    marginTop: '5px',
                    marginRight: '5px',
                  }}
                />
                <p className='nameUser'>
                  {invited_people.name && invited_people.name}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
