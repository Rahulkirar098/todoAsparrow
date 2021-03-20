import { 
    CREATE_TODO,
    DELETE_TODO,
    EDIT_TODO,
    GET_TODO 
} from "../Actiontype";



const intialState = {
    todo: [
      {
        id: 1,
        title: "Buy An Apple",
        descripation: "apple",
        data: "Sincere@april.biz",
      },
      {
        id: 2,
        title: "Buy An mango",
        descripation: "mango",
        data: "Sincere@april.biz",
      },
      {
        id: 3,
        title: "Buy An orange",
        descripation: "apple",
        data: "Sincere@april.biz",
      },
      {
        id: 4,
        title: "Buy An banana",
        descripation: "mango",
        data: "Sincere@april.biz",
      },
    ],
    todoget:null
  };

export const todoReducer = (state = intialState, action) => {

  switch (action.type) {
       case CREATE_TODO:
      return{ 
          ...state,
          todo: [ action.payload, ...state.todo, ], 
       };
      
       case DELETE_TODO:
        return{
          ...state,
          todo:state.todo.filter((todoget) => todoget.id != action.payload)
        }
      
        case GET_TODO:
          let get = state.todo.filter((todoget) => todoget.id == action.payload)
          get = get.values();
          for ( let val of get ) {
              get = val;
          }
          return{
            ...state,
            todoget: get,
          }
            

      
      default:
         return state;
   }
}
















