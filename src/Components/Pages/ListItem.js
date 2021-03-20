import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useSelector,useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { deleteTodo } from "../../Redux/Action";
import swal from 'sweetalert';


const ListItem = () => {

  const history = useHistory();
  const todolist = useSelector(state => state.todoReducer.todo);
  const dispatch = useDispatch();
  console.log(todolist)


  return (

    <Table>
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Title</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>

        {
          todolist.map((item, index) =>
            <TableRow>
              <TableCell ><Button onClick={()=>history.push(`/edit/${item.id}`)}>{item.title}</Button></TableCell>
              <TableCell>
                <span 
                onClick={() => dispatch(deleteTodo(item.id))}
                > <DeleteIcon /></span> </TableCell>
            </TableRow> 
          )
        }


      </TableBody>
    </Table>

  )
}
export default ListItem;
