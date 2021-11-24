import { Card, FormGroup, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { GeneralNotice } from '../components/GeneralNotice'
import { MenuLang } from '../components/MenuLang'

export function ListCards({ card }) {
  const [files, setFiles] = useState([0])

  useEffect(() => {
    function fechPhoto() {
      const files = card.map(result => result.files)
      for (let file of files) {
        setFiles(file)
      }
    }
    fechPhoto()
  })

  return (
    <>
      <div className='listcards'>
        <div className='card1514'>
          {card.map((e, i) => (
            <Card
              className='listbody'
              key={i}
              sx={{ mb: 4, width: '100%', ml: 5, mt: -2 }}
            >
              <FormGroup row>
                {files.map((e, i) => (
                  <div key={i}>
                    <img alt='foto' src={e.file} className='cube' />
                  </div>
                ))}

                <div className='content-text'>
                  <Typography
                    variant='subtitle1'
                    sx={{ mt: 1 }}
                    color='#707070'
                    fontWeight='fontWeightBold'
                  >
                    {e.title}
                  </Typography>
                  <div style={{ display: 'flex' }}>
                    {e.type === 'release' && (
                      <>
                        <Typography
                          variant='body1'
                          sx={{
                            fontSize: 13,
                            backgroundColor: '#3489b1',
                            width: 100,
                            marginRight: '3px',
                            color: '#fff',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                          }}
                          fontWeight='fontWeightBold'
                        >
                          {e.type === 'release' && 'Comunicado'}
                        </Typography>
                        <Typography
                          variant='body1'
                          sx={{ fontSize: 13, marginTop: '1px' }}
                        >
                          {e.date}
                        </Typography>
                      </>
                    )}
                    {e.type === 'event' && (
                      <>
                        <Typography
                          variant='body1'
                          sx={{
                            fontSize: 13,
                            backgroundColor: '#ee8686',
                            paddingTop: '2px',
                            width: 55,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            marginRight: '3px',
                            marginTop: '2px',
                          }}
                          fontWeight='fontWeightBold'
                        >
                          {e.type === 'event' && 'Evento'}
                        </Typography>
                        <Typography
                          variant='body1'
                          sx={{ fontSize: 13, paddingTop: '3px' }}
                        >
                          COSTELÃO CHURRASCARIA
                        </Typography>
                        |
                        <Typography
                          variant='body1'
                          sx={{ fontSize: 13, paddingTop: '3px' }}
                        >
                          {e.date}
                        </Typography>
                        |
                        <Typography
                          variant='body1'
                          color='#3489b1'
                          sx={{
                            fontSize: 13,
                            marginTop: '3px',
                            borderBottom: '2px solid #9ac4d8',
                          }}
                          fontWeight='fontWeightBold'
                        >
                          3 CONFIRMAÇÕES DE 15
                        </Typography>
                      </>
                    )}
                  </div>

                  <Typography
                    varient='body2'
                    color='#707070'
                    sx={{ width: '95%', fontWeight: 100 }}
                  >
                    {e.description}
                  </Typography>
                </div>
                <MenuLang />
              </FormGroup>
            </Card>
          ))}
        </div>
        <div style={{ flexDirection: 'column' }}>
          <GeneralNotice />
        </div>
      </div>
    </>
  )
}
