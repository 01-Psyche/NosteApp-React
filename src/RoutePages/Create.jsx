import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Create = () => {
  const [title, setTitle]=useState('')
  const [details, setDetails]=useState('')
  const [titleError, setTitleError]=useState(false)
  const [detailsError, setDetailsError]=useState(false)
  const [category, setCategory]=useState('work')

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if( title === ''){
      setTitleError(true)
    }

    if( details === ''){
      setDetailsError(true)
    }

    if(title && details){
      console.log(title, details, category)

    }
  }


  return (
    <Container>
              <Typography
        variant="h6" 
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField 
        onChange={(e)=>{setTitle(e.target.value)}}
        sx={{mb:2}}
        id="filled-basic" 
        label="Title" 
        variant="outlined" 
        fullWidth 
        color='primary' 
        required
        error={titleError}
        />

        <TextField 
        onChange={(e)=>{setDetails(e.target.value)}}
        sx={{mb:2}}
        id="filled-basic" 
        label="Details" 
        variant="outlined" 
        color='primary' 
        rows={4}
        multiline
        fullWidth 
        required
        error={detailsError}
        />

        <FormControl sx={{display:'flex', mb:1.5}}>
          <FormLabel>Category</FormLabel>
          <RadioGroup sx={{display:'block'}} value={category} onChange={(e)=>{setCategory(e.target.value)}}>
            <FormControlLabel value="work" control={<Radio/>} label="Work" />
            <FormControlLabel value="school" control={<Radio/>} label="School" />
            <FormControlLabel value="todo" control={<Radio/>} label="Todo" />
            <FormControlLabel value="none" control={<Radio/>} label="None" />
          </RadioGroup>
        </FormControl>

        <Button type='submit' 
        sx={{mr:1}}
        variant='contained' 
        color='primary'
        endIcon={<SendRoundedIcon />}
        disableElevation
        >Submit
        </Button>      
       
        </form>

    </Container>
  )
}

export default Create