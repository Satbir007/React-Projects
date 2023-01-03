import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // here we will write about reducer

    // Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },

    // remove Todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },

    //update todos
    updateTodos: (state, action) => {
       return state.map((todo)=>{
        if(todo.id === action.payload){
          return{
           ...todo,
           item: action.payload.item,
          }
          
        }return todo;
       })
      },
    

    //complete
    completeTodos: (state,action) =>{
      return state.map((todo)=>{
        if(todo.id === action.payload){
          return{
            ...todo,
            completed:true,
          };
        }
        return todo;
      });
    }
  },
});

export const { addTodos, removeTodos, updateTodos,completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
