import React,{Children, createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

const initialTransaction={
    transactions:[
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 }, // positive number means income
                                          //negative number means expense
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]
};
//create context
 export const GlobalContext=createContext(initialTransaction);

 //Provider component
 export const GlobalProvider=({children})=>{
  const[state,dispatch]=useReducer(AppReducer,initialTransaction);

  //Actions
function deleteTransaction(id){
  dispatch({
  type:'DELETE_TRANSACTION',
  payload:id

  });
}



function addTransaction(transaction){
  dispatch({
  type:'ADD_TRANSACTION',
  payload:transaction

  });
}




return(<GlobalContext.Provider value={{
  transactions:state.transactions,
  deleteTransaction,
  addTransaction

}}>
  {children}
  </GlobalContext.Provider>);
 }