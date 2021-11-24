import {
  FormGroup,
  MenuItem,
  TextField,
  Typography,
  Button,
} from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React from 'react'
import { types } from '../assets/types'
import '../styles/contentBody.css'
import { useFormik } from 'formik'
import { Cards } from '../components/Cards'

export function Listbulletinboard() {
  const initialValues = {
    type: '',
  }

  const formik = useFormik({
    initialValues,
  })

  return (
    <>
      {/* Title e botão criar e select */}
      <FormGroup row sx={{ mb: 5 }} className='tile_Button'>
        <Typography
          className='title-content'
          variant='h2'
          component='h2'
          sx={{ fontSize: 30, ml: 13 }}
        >
          Endomarketing
        </Typography>
        <div className='btnSelect'>
          {types && (
            <TextField
              variant='outlined'
              select
              size='small'
              label='Tipo'
              name='type'
              value={formik.values.type}
              onChange={formik.handleChange}
              sx={{
                width: 140,
                heigth: 25,
                backgroundColor: '#fff',
                paddingLeft: '2px',
              }}
            >
              {types.map((e, i) => (
                <MenuItem value={e.value} key={i}>
                  {e.label}
                </MenuItem>
              ))}
            </TextField>
          )}
          <Button
            variant='contained'
            color='primary'
            sx={{
              width: 100,
              heigth: 25,
              marginLeft: '10px',
              fontWeight: 400,
              marginTop: '2px',
            }}
          >
            criar <Add sx={{ ml: 4 }} />
          </Button>
        </div>
      </FormGroup>
      {/*  */}
      {/* lista de cards */}
      <Cards />
      {/*  */}
    </>
  )
}
