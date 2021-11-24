import React, { useState } from 'react'
import { IconButton, Tooltip, Menu, MenuItem, Button } from '@material-ui/core'
import { Delete, Edit, MoreHoriz, RemoveRedEye } from '@material-ui/icons'

const ITEM_HEIGHT = 48
const options = [
  {
    id: 1,
    content: (
      <Button sx={{ color: 'inherit' }}>
        <Delete className='delete' /> Excluir
      </Button>
    ),
  },
  {
    id: 2,
    content: (
      <Button sx={{ color: 'inherit' }}>
        <Edit className='edit' /> Editar
      </Button>
    ),
  },
  {
    id: 3,
    content: (
      <Button sx={{ color: 'inherit' }}>
        <RemoveRedEye className='eye' /> Vizualizar
      </Button>
    ),
  },
]

export function MenuLang() {
  const [menu, setMenu] = useState(null)
  const open = Boolean(menu)
  const handleClick = event => {
    setMenu(event.currentTarget)
  }
  const handleClose = () => {
    setMenu(null)
  }

  return (
    <div>
      <Tooltip arrow title='Menu'>
        <IconButton
          className='btnMore'
          aria-label='more'
          id='long-button'
          aria-controls='long-menu'
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          sx={{
            backgroundColor: '#cdcdcd',
            width: 30,
            height: 30,
            mt: 6,
          }}
          onClick={handleClick}
        >
          <MoreHoriz />
        </IconButton>
      </Tooltip>
      <Menu
        id='long-menu'
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={menu}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((e, i) => (
          <MenuItem value={e.id} key={i}>
            {e.content}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
