import { CircularProgress } from '@material-ui/core'
import React from 'react'

export const CustomSpinner = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '15%',
      }}
    >
      <CircularProgress className='splash-screen-spinner' color='success' />
    </div>
  )
}
