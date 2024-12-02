import { useReducer } from "react"
import { Action, State } from "../types/types"

const initialState: State = {
    fromLanguaje: 'auto',
    toLanguaje: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
function reducer(state: State, action: Action){
    const { type } = action
  
    if (type == 'SET_FROM_LANGUAJE'){
      return {
        ...state,
        fromLanguaje: action.payload
      }
    }
  
    if (type == 'SET_FROM_TEXT'){
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: true
      }
    }
  
    if (type == 'SET_RESULT'){
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    if (type == 'SET_TO_LANGUAJE'){
      return {
        ...state,
        toLanguaje: action.payload
      }
    }
  
    if (type == 'INTERCHANGE_LANGUAJES'){
        if(state.fromLanguaje == 'auto') return state
      return {
        ...state,
        fromLanguaje: state.toLanguaje,
        toLanguaje: state.fromLanguaje
      }
    }
  
    return state
  }
 
//dispatch, orden con informacion para que se haga esa accion.
export function useStore() {
    const [{
        fromLanguaje,
        toLanguaje,
        fromText,
        result,
        loading
      }, dispatch] = useReducer(reducer, initialState)

    const interchangeLanguaje = () => {
        dispatch({ type: 'INTERCHANGE_LANGUAJES'})
    }

    const setToLanguaje = (payload: string) => {
        dispatch({ type: 'SET_TO_LANGUAJE', payload})
    }

    const setFromLanguaje = (payload: string) => {
        dispatch({ type: 'SET_FROM_LANGUAJE', payload})
    } 

    const setResult = (payload: string) => {
        dispatch({ type: 'SET_RESULT', payload})
    }

    const setFromText = (payload: string) => {
        dispatch({ type: 'SET_FROM_TEXT', payload})
    }


      return {
        fromLanguaje,
        toLanguaje,
        fromText,
        result,
        loading,
        interchangeLanguaje,
        setFromLanguaje,
        setToLanguaje
      }
}