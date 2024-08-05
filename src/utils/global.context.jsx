import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";


const initialState = [];
const ContextGlobal = createContext();

const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const urlGetOdontologos = `http://localhost:8080/odontologos/all`; 

    const getData = async () => {
        try{
          let res = await axios(urlGetOdontologos);
          dispatch({type: "GET_ODONTOLOGOS", payload: res.data});
        }catch(error){
          console.log(error);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}
