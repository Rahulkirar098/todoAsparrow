import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from "react-redux";
import { addTodo } from '../../Redux/Action';
import swal from 'sweetalert';
import shortid from "shortid";
import { useHistory } from 'react-router';


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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

function Create() {
  const classes = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("")
  const [descripation, setDescripation] = useState("")
  const [data, setData] = useState("")


  const submittodo = (e) =>{

      e.preventDefault();

      const new_todo = {
        id: shortid.generate(),
        title:title,
        descripation:descripation,
        data:data

      }

      dispatch(addTodo(new_todo))

      setTitle("");
      setDescripation("");
      setData("");

      swal("Good job!", "Task Created", "success");
      history.push("/list")

  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Typography component="h1" variant="h5">
          ToDo
        </Typography>

        <form className={classes.form} onSubmit={(e)=>submittodo(e)}>
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

export default Create ;