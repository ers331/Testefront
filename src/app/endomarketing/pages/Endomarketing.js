import React from 'react'
import { Header } from '../components/Header'
import { Listbulletinboard } from './Listbulletinboard'
import '../../../index.css'

export function EndoMarketing() {
  return (
    <>
      <Header />
      {/* Lista de Cards */}
      <Listbulletinboard />
    </>
  )
}
