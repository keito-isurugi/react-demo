import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

export const MuiDemo = () => {
  return (
    <>
      <Box sx={{ m: 3, p: 3 }}>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ fontSize: 22, fontWeight: "bold", mb: 1 }}>ボタン</Box>
          <Button variant='text' >hoge</Button>
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
          <Button color="secondary">Secondary</Button>
          <Button variant="contained" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
        </Box>
        <Box sx={{ m: 3, p: 3 }}>
          <Box sx={{ fontSize: 22, fontWeight: "bold", mb: 1 }}>テキストフィールド</Box>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
      </Box>
    </>
  )
}
