import React from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';



const useStyles = makeStyles({
  beaut:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 36.5,
    padding: '0 30px',
    '&:hover':{
      background: 'linear-gradient(45deg,  #FF8E53 30%,  #FE6B8B 90%)',

    }
  }, 
  fave:{
    backgroundColor: '#f44336',
    '&:hover':{
      background: '#eb3326',

    }
  }

})

const Create = () => {
  const classes = useStyles()

  return (
    <Container>
        <Typography 
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
        >
        Create a New Button
        </Typography>

        <form noValidate autoComplete='off'>
        <TextField 
        sx={{mb:2, width:'31em'}}
        id="filled-basic" 
        label="Your Text" 
        variant="filled" 
        fullWidth 
        color='secondary' 
        required
        />
        </form>

        <Button type='submit' 
        sx={{mr:1}}
        variant='contained' 
        color='secondary'
        endIcon={<SendRoundedIcon />}
        disableElevation
        >Submit
        </Button>
        
        <Button 
        className={classes.fave}
        sx={{mr:1}}
        type='submit' 
        variant='contained' 
        color='primary'
        endIcon={<FavoriteIcon />}
        disableElevation
        >Favorite</Button>

        <Button type='submit' 
        sx={{mr:1}}
        variant='contained' 
        color='primary'
        startIcon={<PlayArrowIcon />}
        disableElevation
        >Play</Button>

        <Button 
        sx={{mr:1}}
        className={classes.beaut}
        type='submit' 
        variant='contained' 
        color='primary'
        startIcon={<PlayArrowIcon />}
        disableElevation
        >Beautify</Button>
        
       

    </Container>
  )
}

export default Create