import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DataFeting } from '../actions/DataFeting'
import { ListCards } from '../pages/ListCards'
import { CustomSpinner } from './CustomSpinner'

export function Cards() {
  const [card, setCard] = useState()
  const [leoader, setLeoader] = useState(true)
  const { history } = useHistory()

  useEffect(() => {
    async function fechData() {
      const { data, error } = await DataFeting()
      if (error) {
        history.push('/')
      }
      setCard(data)
      setLeoader(false)
    }
    fechData()
  }, [history])

  return (
    <>
      {leoader === true ? (
        <CustomSpinner />
      ) : (
        <>{card && <ListCards card={card} />}</>
      )}
    </>
  )
}
