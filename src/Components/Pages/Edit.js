import React, { useState,useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector,useDispatch } from "react-redux";
import { gettodo } from "../../Redux/Action";
import { useParams } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

function Edit () {
  const classes = useStyles();
  let { id } = useParams();
  const getvews = useSelector( (state) =>  state.todoReducer.todoget )
  console.log(getvews);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("")
  const [descripation, setDescripation] = useState("")
  const [data, setData] = useState("")

 useEffect(()=>{
   if(getvews != null){
    setTitle(getvews.title);
    setDescripation(getvews.descripation);
    setData(getvews.data);
   }
  
   dispatch(gettodo(id))
 },[]);


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          Views & Edit
        </Typography>

        <form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="Title"
            autoComplete="Title"
            autoFocus
            value={title}
            name={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="descripation"
            label="Descripation"
            name="Descripation"
            autoComplete="Descripation"
            value={descripation}
            onChange={(e)=>setDescripation(e.target.value)}
          />
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="data"
            // label="Data"
            name="Data"
            type="file"
            autoComplete="Data"
            value={data}
            onChange={(e)=>setData(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>

        </form>
      </div>

    </Container>
  );
}

export default Edit;