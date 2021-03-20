import { 
        CREATE_TODO,
        DELETE_TODO,
        EDIT_TODO,
        GET_TODO
} from "../Actiontype";


export const addTodo = (payload) =>({
        type:CREATE_TODO,
        payload,
});

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload,
  });

export const gettodo = (payload) => ({
        type: GET_TODO,
        payload,
})

export const edittodo = (payload) => ({
        type: EDIT_TODO,
        payload,
})
