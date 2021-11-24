import React, { useState } from 'react'
import { CardContent, Typography, Button, Card } from '@material-ui/core'
import { Painting } from './Painting'

export function GeneralNotice() {
  const [close, setClose] = useState(true)

  const handleClose = () => {
    setClose(false)
  }

  return (
    <div className='cardsRigth'>
      {!close ? (
        <Card sx={{ width: '265px', mr: 6, height: '58vh', mt: -10 }}>
          <Typography
            variant='subtitle1'
            fontWeight='fontWeightBold'
            color='#707070'
            sx={{ mb: 2 }}
          >
            Quadro de Gestão á Vista
          </Typography>
          <Card
            sx={{
              width: '93%',
              backgroundColor: '#e8f1f5',
              ml: 1,
              mb: 1,
            }}
          >
            <Painting />
          </Card>
          <Card
            sx={{
              width: '93%',
              backgroundColor: '#e8f1f5',
              ml: 1,
              mb: 1,
            }}
          >
            <Painting />
          </Card>
          <Card
            sx={{
              width: '93%',
              backgroundColor: '#e8f1f5',
              ml: 1,
              mb: 1,
            }}
          >
            <Painting />
          </Card>
        </Card>
      ) : (
        <>
          <CardContent
            sx={{
              width: '225px',

              backgroundColor: '#fff2de',

              mt: -10,
              mb: 3,

              border: '1px solid #dec9a8',
            }}
          >
            <Typography
              variant='subtitle1'
              fontWeight='fontWeightBold'
              color='#707070'
            >
              Endomarketing
            </Typography>
            <Typography
              paragraph={true}
              variant='body2'
              sx={{ fontSize: 13, mt: 3, color: '#707070' }}
            >
              Endomarketing está relacionado ás ações de treinamento ou
              qualificação dos colaboradores da empresa visando um melhor
              serviço para o cliente.Marketing interno, devido ao nome, é
              usualmente confundido com Endomarketing mesmo sendo conceitos
              diferentes.
            </Typography>
            <Button
              variant='outlined'
              color='inherit'
              fontWeight='fontWeightBold'
              onClick={handleClose}
            >
              Dispensar
            </Button>
          </CardContent>
        </>
      )}
      {!close ? null : (
        <Card sx={{ width: '265px', mr: 6 }}>
          <Typography
            variant='subtitle1'
            fontWeight='fontWeightBold'
            color='#707070'
            sx={{ mb: 2 }}
          >
            Quadro de Gestão á Vista
          </Typography>
          <Card
            sx={{
              width: '93%',
              backgroundColor: '#e8f1f5',
              ml: 1,
              mb: 1,
            }}
          >
            <Painting />
          </Card>
          <Card
            sx={{
              width: '93%',
              backgroundColor: '#e8f1f5',
              ml: 1,
              mb: 1,
            }}
          >
            <Painting />
          </Card>
          <Card
            sx={{
              width: '93%',
              backgroundColor: '#e8f1f5',
              ml: 1,
              mb: 1,
            }}
          >
            <Painting />
          </Card>
        </Card>
      )}
    </div>
  )
}
