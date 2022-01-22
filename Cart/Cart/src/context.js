import  React ,{ useEffect,useContext ,useReducer} from "react";
import cartItems from './data';
import { reducer } from "./reducer";
const initialState={
    loading:false,
    cart:[],
    amount:0,
    total:0
}
console.log(initialState.cart);
  export const AppContext = React.createContext(null);
    const AppProvider=({children})=>{
   const [state,dispatch] = useReducer(reducer,initialState);
  
   const remove =( id)=>{
       dispatch({type:'REMOVE',payload:id})
   }
   const clearCart = ()=>{
       dispatch({type:'CLEAR_CART'});
   }
   const fechData = async()=>{
       dispatch({type:'LOADING'});
       const  response =  await JSON.stringify(cartItems); 
       const cart =   await JSON.parse(response);
       dispatch({type:'DISPLAY_ITEMS',payload:cart});
   }
   const toggleAmount =(id,type)=>{
       dispatch({type:'TOGGLE_AMOUNT',payload:{id,type}});
   }
   useEffect(()=>{
    fechData();
   },[]);
   useEffect(() => {
    dispatch({ type: 'GET_TOTALS' })
  }, [state.cart])
    return(
        <AppContext.Provider 
        value={{
            ...state,
            remove,
            clearCart,
            toggleAmount
        }}>
        {children}
        </AppContext.Provider>
    )
}
 export  const useGlobalContext =()=>{
     return useContext(AppContext);
 };
export default AppProvider;