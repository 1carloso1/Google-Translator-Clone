import { AUTO_LANGUAJE, SUPPORTED_LANGUAJES } from "../constants"

export type Languaje = keyof typeof SUPPORTED_LANGUAJES
export type AutoLanguaje = keyof typeof AUTO_LANGUAJE
export type FromLanguaje = Languaje | AutoLenguaje

export interface State {
    fromLanguaje: FromLanguaje
    toLanguaje: Languaje
    fromText: string
    result: string
    loading: boolean
}

export type Action = 
    | {type: 'SET_FROM_LANGUAJE'; payload:FromLanguaje}
    | {type: 'SET_FROM_TEXT'; payload:string}
    | {type: 'SET_TO_LANGUAJE'; payload:Languaje}
    | {type: 'SET_RESULT'; payload:string}
    | {type:  'INTERCHANGE_LANGUAJES'}
