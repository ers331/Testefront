import React from 'react'
import { Grid, IconButton, Tooltip, Typography } from '@material-ui/core'
import { MoreHoriz, Public } from '@material-ui/icons'
import { photomanagement } from '../assets/photomanagement'
import { Box } from '@material-ui/system'

export function Painting() {
  return (
    <div style={{ paddingBottom: '10px' }}>
      <Box>
        <div style={{ display: 'flex' }}>
          <Typography sx={{ fontSize: 10 }}>Demostrativo comercial</Typography>
          <div className='Dmc'>
            <Tooltip title='Publico'>
              <IconButton
                size='small'
                sx={{
                  width: 15,
                  height: 15,
                  backgroundColor: '#fff',
                  ml: 12,
                }}
              >
                <Public sx={{ fontSize: 14 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title='menu'>
              <IconButton
                size='small'
                sx={{
                  width: 15,
                  height: 15,
                  backgroundColor: '#fff',
                  marginLeft: '3px',
                }}
              >
                <MoreHoriz sx={{ fontSize: 14 }} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <Grid sx={{ display: 'flex', ml: 1 }}>
          {photomanagement.map((e, i) => (
            <div key={i}>
              <img
                className='photo_454'
                src={e.photo}
                alt='foto'
                style={{
                  width: '60px',
                  height: '50px',
                  padding: '1px',
                }}
              />
            </div>
          ))}
        </Grid>
      </Box>
    </div>
  )
}
